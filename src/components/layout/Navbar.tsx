// hovering over work showcase navlink opens menu w/projects -> takes to project details page
// other links are anchor links within home page
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import styles from "./Navbar.module.css";
import SeasonalPortrait from "../accents/SeasonalPortrait";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DESKTOP_NAVBAR_HEIGHT = 72;

const navItems = [
    { label: "Home", to: "/#hero" },
    { label: "About", to: "/#about" },
    { label: "Works", to: "/#work" },
    { label: "Experience", to: "/#experience" },
    { label: "Contact", to: "/#contact" }
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isPastHero, setIsPastHero] = useState(false);
    const { pathname, hash } = useLocation();

    useEffect(() => {
        function updateNavbarState() {
            const hero = document.getElementById("hero");
            const fallbackThreshold = window.innerHeight - DESKTOP_NAVBAR_HEIGHT;
            const heroThreshold = hero
                ? hero.getBoundingClientRect().top +
                  window.scrollY +
                  hero.offsetHeight -
                  DESKTOP_NAVBAR_HEIGHT
                : fallbackThreshold;

            setIsPastHero(window.scrollY > Math.max(heroThreshold, 1));
        }

        updateNavbarState();

        window.addEventListener("scroll", updateNavbarState, { passive: true });
        window.addEventListener("resize", updateNavbarState);

        return () => {
            window.removeEventListener("scroll", updateNavbarState);
            window.removeEventListener("resize", updateNavbarState);
        };
    }, [pathname]);

    function closeMenu() {
        setMenuOpen(false);
    }

    function handleNavLinkClick(to: string) {
        const targetHash = to.slice(to.indexOf("#"));

        if (pathname === "/" && hash === targetHash) {
            document
                .getElementById(targetHash.replace("#", ""))
                ?.scrollIntoView({ behavior: "smooth" });
        }

        closeMenu();
    }

    return (
        <header
            className={`${styles.header} ${
                isPastHero ? styles.headerScrolled : ""
            }`}
        >
            <nav
                className={`${styles.nav} ${
                    isPastHero ? styles.navScrolled : ""
                }`}
                aria-label="Main navigation"
            >
                <div className={styles.brand}>
                    <SeasonalPortrait />
                    <h2 className={styles.logo}>
                        Crystal Chiu
                    </h2>
                </div>

                <button
                    className={`${styles.menuToggle} ${
                        menuOpen ? styles.menuToggleOpen : ""
                    }`}
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <FontAwesomeIcon icon={faChevronDown} aria-hidden="true" />
                </button>

                <ul
                    id="primary-navigation"
                    className={`${styles.links} ${
                        menuOpen ? styles.linksOpen : ""
                    }`}
                >
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                onClick={() => handleNavLinkClick(item.to)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
