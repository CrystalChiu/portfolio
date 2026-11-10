import { Link } from "react-router";
import Dropdown from "../ui/Dropdown/Dropdown";
import styles from "./Navbar.module.css";

type WorksNavMenuProps = {
    onOpenChange: (open: boolean) => void;
    onNavigate: (to: string) => void;
    open: boolean;
};

export default function WorksNavMenu({
    onOpenChange,
    onNavigate,
    open,
}: WorksNavMenuProps) {
    function handleNavigate(to: string) {
        onOpenChange(false);
        onNavigate(to);
    }

    return (
        <Dropdown
            id="works-navigation"
            label="Works"
            className={styles.worksDropdown}
            contentClassName={styles.worksMenu}
            keepContentMounted
            open={open}
            onOpenChange={onOpenChange}
        >
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
