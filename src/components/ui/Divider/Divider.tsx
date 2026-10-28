import { motion, useReducedMotion } from "motion/react";
import styles from "./Divider.module.css";

type DividerProps = {
    className?: string;
};

export default function Divider({ className }: DividerProps) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.hr
            className={[styles.divider, className]
                .filter(Boolean)
                .join(" ")}
            initial={{ width: prefersReducedMotion ? "100%" : "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
    );
}
