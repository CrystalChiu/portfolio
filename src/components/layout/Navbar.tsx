// hovering over work showcase navlink opens menu w/projects -> takes to project details page
// other links are anchor links within home page
import { useState } from "react";
import styles from "./Navbar.module.css";
import SeasonalPortrait from "../accents/SeasonalPortrait";

const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Work Showcase", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav} aria-label="Main navigation">
                <div className={styles.brand}>
                    <SeasonalPortrait />
                    <h2 className={styles.logo}>
                        Crystal Chiu
                    </h2>
                </div>

                <button
                    className={styles.menuToggle}
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open Menu"}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? "Close" : "Open"}
                </button>

                <ul
                    id="primary-navigation"
                    className={`${styles.links} ${
                        menuOpen ? styles.linksOpen : ""
                    }`}
                >
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} onClick={closeMenu}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
