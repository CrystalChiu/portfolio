// components/ui/IconLabel.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styles from "./IconLabel.module.css";

type IconLabelProps = {
    icon: IconDefinition;
    label: string;
};

export default function IconLabel({
    icon,
    label,
}: IconLabelProps) {
    return (
        <span className={styles.iconLabel}>
            <FontAwesomeIcon
                icon={icon}
                aria-hidden="true"
            />
            <span>{label}</span>
        </span>
    );
}