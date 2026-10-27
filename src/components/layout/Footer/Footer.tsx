import { Link } from "react-router";
import styles from "./Footer.module.css";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                © {CURRENT_YEAR} Crystal Chiu
            </p>

            <Link to="/credits" className={styles.credits}>
                Credits
            </Link>
        </footer>
    );
}
