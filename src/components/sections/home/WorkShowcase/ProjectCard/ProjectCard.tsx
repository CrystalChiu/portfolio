import { Link } from "react-router";
import type { Project } from "../../../../../content/projects";
import { PROJECT_IMGS_PATH } from "../../../../../content/projects";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
    project: Project
};

export default function ProjectCard({
    project
}: ProjectCardProps) {
    const coverSrc = `${PROJECT_IMGS_PATH}/${project.slug}/cover.png`;

    return (
        <article className={styles.card}>
            <Link  
                to={`/projects/${project.slug}`}
                className={styles.link}
            >
                <img
                    src={coverSrc}
                    alt={`${project.title} — project preview`}
                    className={styles.cover}
                />

                <div className={styles.metadata}>
                    <h3>{ project.title }</h3>
                    <p>{ project.description }</p>
                </div>
            </Link>

            <ul className={styles.technologies__list}>
                {
                    project.technologies.map((tech) => (
                        <li 
                            key={tech}
                            className={styles.technologies__list_item}
                        >{tech}</li>
                    ))
                }
            </ul>
        </article>
    );
}
