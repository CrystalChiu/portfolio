import type { ReactNode } from "react";
import styles from "./PageLayout.module.css";

type PageLayoutProps = {
    children: ReactNode;
    className?: string;
};

export default function PageLayout({
    children,
    className,
}: PageLayoutProps) {
    return (
        <div
            className={[styles.container, className]
                .filter(Boolean)
                .join(" ")    
            }
        >
            {children}
        </div>
    )
}
