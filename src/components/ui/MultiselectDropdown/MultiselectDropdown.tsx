import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./MultiselectDropdown.module.css";

type MultiselectDropdownProps<T extends string> = {
    label: string;
    options: readonly T[];
    selected: readonly T[];
    onChange: (selected: readonly T[]) => void;
    className?: string;
};

export default function MultiselectDropdown<T extends string>({
    label,
    options,
    selected,
    onChange,
    className,
}: MultiselectDropdownProps<T>) {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    function toggleOption(option: T) {
        const isSelected = selected.includes(option);

        onChange(
            isSelected
                ? selected.filter((item) => item !== option)
                : [...selected, option],
        );
    }

    function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
        if (!containerRef.current?.contains(event.relatedTarget as Node)) {
            setOpen(false);
        }
    }

    return (
        <div
            ref={containerRef}
            className={[styles.dropdown, className]
                .filter(Boolean)
                .join(" ")
            }
            onBlur={handleBlur}
        >
            <button
                type="button"
                className={styles.toggle}
                aria-expanded={open}
                onClick={() => setOpen((prev) => !prev)}
            >
                <span>{label}</span>
                
                <FontAwesomeIcon
                    icon={faChevronDown}
                    aria-hidden="true"
                    className={[
                        styles.chevron,
                        open ? styles.chevronOpen : ""]
                        .filter(Boolean)
                        .join(" ")
                    }
                />
            </button>

            {open && (
                <ul className={styles.menu}>
                    {options.map((option) => {
                        const isSelected = selected.includes(option);

                        return (
                            <li key={option}>
                                <button
                                    type="button"
                                    className={[
                                        styles.option,
                                        isSelected ? styles.optionSelected : ""]
                                        .filter(Boolean)
                                        .join(" ")
                                    }
                                    aria-pressed={isSelected}
                                    onClick={() => toggleOption(option)}
                                >
                                    <span className={styles.checkbox}>
                                        {
                                            isSelected && 
                                            (
                                                <FontAwesomeIcon
                                                    icon={faCheck}
                                                    aria-hidden="true"
                                                    className={styles.checkmark}
                                                />
                                            )
                                        }
                                    </span>
                                    <span>{option}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
