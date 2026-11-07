import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Dropdown.module.css";

type DropdownProps = {
    label: string;
    children: ReactNode;
    className?: string;
};

export default function Dropdown({
    label,
    children,
    className,
}: DropdownProps) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    return (
        <div
            ref={dropdownRef}
            className={[styles.dropdown, className]
                .filter(Boolean)
                .join(" ")}
        >
            <button
                type="button"
                className={styles.toggle}
                aria-expanded={open}
                onClick={() => setOpen((prev) => !prev)}
                onBlur={(event) => {
                    const nextFocused = event.relatedTarget;

                    if (
                        !nextFocused ||
                        !dropdownRef.current?.contains(nextFocused)
                    ) {
                        setOpen(false);
                    }
                }}
            >
                <span>{label}</span>

                {/* Flip toggle on open and closed */}
                <FontAwesomeIcon
                    icon={faChevronDown}
                    aria-hidden="true"
                    className={[
                        styles.chevron,
                        open ? styles.chevronOpen : "",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                />
            </button>

            {/* Conditionally render child/menu content */}
            { 
                open && 
                <div 
                    className={styles.content}
                >
                    {children}
                </div> 
            }
        </div>
    );
}
