// components/ui/IconLabel.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styles from "./IconLabel.module.css";

type IconLabelProps = {
    icon: IconDefinition;
    label: string;
    iconPosition?: "left" | "right";
};

export default function IconLabel({
    icon,
    label,
    iconPosition = "left",
}: IconLabelProps) {
    return (
        <span
            className={[
                styles.iconLabel,
                iconPosition === "right" ? styles.iconRight : "",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <FontAwesomeIcon
                icon={icon}
                aria-hidden="true"
            />
            <span>{label}</span>
        </span>
    );
}
