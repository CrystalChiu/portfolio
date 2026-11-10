import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type FadeInProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    distance?: number;
    duration?: number;
};

export default function FadeIn({
    children,
    className,
    delay = 0,
    distance = 0,
    duration = 0.9,
}: FadeInProps) {
    const prefersReducedMotion = useReducedMotion();
    const offsetY = prefersReducedMotion ? 0 : distance;

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: offsetY }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration,
                delay: prefersReducedMotion ? 0 : delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
