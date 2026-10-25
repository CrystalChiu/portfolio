import { Link } from "react-router";
import type { Project } from "../../../../../content/projects";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
    project: Project
};

export default function ProjectCard({
    project
}: ProjectCardProps) {
    return (
        <article className={styles.card}>
            <Link  
                to="/projects/{slug}"
                className={styles.link}
            >
                <img
                    src={project.image}
                    alt=""
                    className={styles.image}
                />

                <h3>{ project.title }</h3>
                <p>{ project.description }</p>
            </Link>

            {/* maybe add a technologies used section here later */}
        </article>
    );
}
