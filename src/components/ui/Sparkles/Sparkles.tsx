import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import sparkleUrl from "../../../assets/svgs/sparkle.svg";
import styles from "./Sparkles.module.css";

type Sparkle = {
    id: number;
    createdAt: number;
    size: number;
    top: string;
    left: string;
};

type SparklesProps = {
    active: boolean;
    className?: string;
    maxSparkles?: number;
};

const SPARKLE_LIFETIME_MS = 900;
const SPARKLE_GRID_SIZE = 3;

function random(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function useRandomInterval(
    callback: () => void,
    active: boolean,
    minDelay: number,
    maxDelay: number,
    immediate = false
) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!active) return undefined;

        let timeout: number | undefined;

        if (immediate) callbackRef.current();

        function schedule() {
            timeout = window.setTimeout(() => {
                callbackRef.current();
                schedule();
            }, random(minDelay, maxDelay));
        }

        schedule();

        return () => window.clearTimeout(timeout);
    }, [active, immediate, minDelay, maxDelay]);
}

function SparkleItem({ sparkle }: { sparkle: Sparkle }) {
    return (
        <span
            className={styles.sparkle}
            style={{
                width: sparkle.size,
                height: sparkle.size,
                top: sparkle.top,
                left: sparkle.left,
            }}
        >
            <img src={sparkleUrl} alt="" className={styles.sparkle__image} />
        </span>
    );
}

export default function Sparkles({
    active,
    className,
    maxSparkles = 3,
}: SparklesProps) {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);
    const sparkleIdRef = useRef(0);
    const sparkleSlotRef = useRef(0);
    const prefersReducedMotion = useReducedMotion();
    const shouldGenerate = active && !prefersReducedMotion;

    const createSparkle = useCallback(() => {
        const createdAt = Date.now();
        const id = sparkleIdRef.current + 1;
        const slot = (sparkleSlotRef.current * 4) % (SPARKLE_GRID_SIZE ** 2);
        const column = slot % SPARKLE_GRID_SIZE;
        const row = Math.floor(slot / SPARKLE_GRID_SIZE);

        sparkleIdRef.current = id;
        sparkleSlotRef.current += 1;

        setSparkles((current) => {
            const visibleSparkles = current.filter(
                (item) => createdAt - item.createdAt < SPARKLE_LIFETIME_MS
            );

            return [
                ...visibleSparkles,
                {
                    id,
                    createdAt,
                    size: random(10, 20),
                    top: `${
                        (row + random(0.15, 0.85)) *
                        (100 / SPARKLE_GRID_SIZE)
                    }%`,
                    left: `${
                        (column + random(0.15, 0.85)) *
                        (100 / SPARKLE_GRID_SIZE)
                    }%`,
                },
            ].slice(-maxSparkles);
        });
    }, [maxSparkles]);

    useEffect(() => {
        if (shouldGenerate) return undefined;

        const timeout = window.setTimeout(
            () => setSparkles([]),
            active ? 0 : SPARKLE_LIFETIME_MS
        );

        return () => window.clearTimeout(timeout);
    }, [active, shouldGenerate]);

    useRandomInterval(createSparkle, shouldGenerate, 350, 900, true);

    return (
        <div
            className={[styles.sparkles, className].filter(Boolean).join(" ")}
            aria-hidden="true"
        >
            {sparkles.map((sparkle) => (
                <SparkleItem key={sparkle.id} sparkle={sparkle} />
            ))}
        </div>
    );
}
