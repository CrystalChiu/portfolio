import { Link } from "react-router";
import { motion } from "motion/react";
import { useState } from "react";
import type { Project } from "../../../../../content/projects";
import FadeIn from "../../../../ui/FadeIn/FadeIn";
import {
    PROJECT_IMGS_PATH,
    PROJECT_TYPE_LABELS,
} from "../../../../../content/projects";
import styles from "./ProjectCard.module.css";
import Sparkles from "../../../../ui/Sparkles/Sparkles";

type ProjectCardProps = {
    project: Project
};

export default function ProjectCard({
    project
}: ProjectCardProps) {
    const coverSrc = `${PROJECT_IMGS_PATH}/${project.slug}/cover.png`;
    const [sparklesActive, setSparklesActive] = useState(false);

    return (
        <article className={styles.card}>
            <FadeIn distance={24}>
                <Link  
                    to={`/projects/${project.slug}`}
                    className={styles.link}
                    onMouseEnter={() => setSparklesActive(true)}
                    onMouseLeave={() => setSparklesActive(false)}
                    onFocus={() => setSparklesActive(true)}
                    onBlur={() => setSparklesActive(false)}
                >
                    <div className={styles.cover_wrapper}>
                        <motion.img
                            src={coverSrc}
                            alt={`${project.title} — project preview`}
                            className={styles.cover}
                        />

                        <Sparkles active={sparklesActive} />
                    </div>

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
                                        className={`${styles.technologies__list_item} + text-mono-s`}
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
            </FadeIn>
        </article>
    );
}
