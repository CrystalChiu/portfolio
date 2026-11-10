import { Link } from "react-router";
import { motion } from "motion/react";
import type { Project } from "../../../../../content/projects";
import {
    PROJECT_IMGS_PATH,
    PROJECT_TYPE_LABELS,
} from "../../../../../content/projects";
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
                <motion.img
                    src={coverSrc}
                    alt={`${project.title} — project preview`}
                    className={styles.cover}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />

                <div className={styles.metadata}>
                    <div className={styles.title_row}>
                        <h3>{ project.title }</h3>
                        <span className={styles.type_tag}>
                            {PROJECT_TYPE_LABELS[project.projectType]}
                        </span>
                    </div>
            
                    <ul className={styles.technologies__list}>
                        {
                            project.technologies.map((tech) => (
                                <li 
                                    key={tech}
                                    className={`${styles.technologies__list_item} + text-mono-m`}
                                >{tech}</li>
                            ))
                        }
                    </ul>

                    <div className={styles.categories}>
                        {
                            project.categories.map((category) => (
                                <div key={category} className={styles.categories__tag}>{category}</div>
                            ))
                        }
                    </div>

                    <p>{ project.description }</p>
                </div>
            </Link>

            {
                project.url && (
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.external_link}
                    >
                        Visit project
                    </a>
                )
            }
        </article>
    );
}
