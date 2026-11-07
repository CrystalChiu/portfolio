import { Link } from "react-router";
import Dropdown from "../ui/Dropdown/Dropdown";
import styles from "./Navbar.module.css";

type WorksNavMenuProps = {
    onNavigate: (to: string) => void;
};

export default function WorksNavMenu({ onNavigate }: WorksNavMenuProps) {
    function handleNavigate(to: string) {
        onNavigate(to);
    }

    return (
        <Dropdown label="Works" className={styles.worksDropdown}>
            <ul>
                <li>
                    <Link to="/#work" onClick={() => handleNavigate("/#work")}>
                        Work Showcase
                    </Link>
                </li>
                <li>
                    <Link
                        to="/projects"
                        onClick={() => handleNavigate("/projects")}
                    >
                        All Works
                    </Link>
                </li>
            </ul>
        </Dropdown>
    );
}
