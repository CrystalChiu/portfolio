import { motion } from "motion/react";
import type { ReactNode } from "react";

type FadeInProps = {
    children: ReactNode;
    className?: string;
};

export default function FadeIn({ children, className }: FadeInProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
