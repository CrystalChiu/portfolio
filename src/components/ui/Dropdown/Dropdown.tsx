import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Dropdown.module.css";

type DropdownProps = {
    label: string;
    children: ReactNode;
    className?: string;
    contentClassName?: string;
    id?: string;
    keepContentMounted?: boolean;
    onOpenChange?: (open: boolean) => void;
    open?: boolean;
};

export default function Dropdown({
    label,
    children,
    className,
    contentClassName,
    id,
    keepContentMounted = false,
    onOpenChange,
    open,
}: DropdownProps) {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const toggleRef = useRef<HTMLButtonElement | null>(null);
    const isControlled = open !== undefined;
    const isOpen = isControlled ? open : uncontrolledOpen;

    function updateOpen(nextOpen: boolean) {
        if (isControlled) {
            onOpenChange?.(nextOpen);
            return;
        }

        setUncontrolledOpen(nextOpen);
    }

    return (
        <div
            ref={dropdownRef}
            data-open={isOpen}
            className={[styles.dropdown, className]
                .filter(Boolean)
                .join(" ")}
            onKeyDown={(event) => {
                if (event.key !== "Escape" || !isOpen) return;

                event.stopPropagation();
                updateOpen(false);
                toggleRef.current?.focus();
            }}
        >
            <button
                ref={toggleRef}
                type="button"
                className={styles.toggle}
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => updateOpen(!isOpen)}
                onBlur={(event) => {
                    const nextFocused = event.relatedTarget;

                    if (
                        !nextFocused ||
                        !dropdownRef.current?.contains(nextFocused)
                    ) {
                        updateOpen(false);
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
                        isOpen ? styles.chevronOpen : "",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                />
            </button>

            {/* Conditionally render child/menu content */}
            {
                (keepContentMounted || isOpen) && (
                    <div
                        id={id}
                        className={[styles.content, contentClassName]
                            .filter(Boolean)
                            .join(" ")}
                        aria-hidden={keepContentMounted && !isOpen}
                        inert={keepContentMounted && !isOpen}
                    >
                        {children}
                    </div>
                )
            }
        </div>
    );
}
