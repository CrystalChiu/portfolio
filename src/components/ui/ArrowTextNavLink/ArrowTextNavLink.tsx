import { Link } from "react-router";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import IconLabel from "../IconLabel/IconLabel";
import styles from "./ArrowTextNavLink.module.css";

type ArrowTextNavLinkProps = {
    icon: IconDefinition;
    label: string;
    to?: string;
    title?: string;
    ariaLabel?: string;
    iconPosition?: "left" | "right";
    orientation?: "stacked" | "inline";
    align?: "start" | "end";
    disabled?: boolean;
    className?: string;
};

export default function ArrowTextNavLink({
    icon,
    label,
    to,
    title,
    ariaLabel,
    iconPosition = "left",
    orientation = "stacked",
    align = "start",
    disabled = false,
    className = "",
}: ArrowTextNavLinkProps) {
    const classNameValue = [
        styles.arrow_text_nav,
        orientation === "inline" ? styles.inline : "",
        orientation === "inline" && iconPosition === "right"
            ? styles.inline_right
            : "",
        align === "end" ? styles.end : "",
        disabled ? styles.disabled : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const content = (
        <>
            <IconLabel
                icon={icon}
                label={label}
                iconPosition={iconPosition}
            />
            {title && (
                <span className={styles.arrow_text_nav__title}>{title}</span>
            )}
        </>
    );

    if (to === undefined) {
        return <span className={classNameValue}>{content}</span>;
    }

    return (
        <Link to={to} className={classNameValue} aria-label={ariaLabel}>
            {content}
        </Link>
    );
}
