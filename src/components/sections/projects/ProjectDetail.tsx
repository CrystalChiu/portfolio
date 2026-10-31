import type { Project } from "../../../content/projects";
import styles from "./ProjectDetail.module.css";
import ProjectSection from "./ProjectSection/ProjectSection";
import { Link } from "react-router";
import IconLabel from "../../ui/IconLabel/IconLabel";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

type ProjectDetailProps = {
    project: Project;
    previousProject?: Project;
    nextProject?: Project;
};

export default function ProjectDetail({
    project,
    previousProject,
    nextProject,
}: ProjectDetailProps) {
    return (
        <article className={styles.project_detail}>
            {/* Intro Section */}
            <section>
                <header className={styles.intro__text}>
                    <h1 className="text-display-2">{project.title}</h1>
                    <p>{project.description}</p>
                </header>

                <div className={styles.intro__gallery}>

                </div>
            </section>

            {/* Overview Section */}
            <section className={styles.overview}>
                <h2>Project at a Glance</h2>

                {/* Metadata */}
                <div className={styles.overview__metadata_row}>
                    <div className={styles.overview__metadata}>
                        <h4>My Role</h4>
                        <p>{project.role}</p>
                    </div>
                    <div className={styles.overview__metadata}>
                        <h4>Stack</h4>
                        <ul>
                            {
                                project.technologies.map((item) => (
                                    <li key={item}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* Summary */}
                {
                    project.summary && (
                        <div className={styles.overview__summary}>
                            <h3>Overview</h3>
                            <p>
                                {project.summary}
                            </p>
                        </div>
                    )
                }
            </section>

            {/* Case Study */}
            <div className={styles.case_study}>
                {
                    project.sections.map((section) => (
                       <ProjectSection key={section.position} section={section}/> 
                    ))
                }
            </div>

            {/* Page Controls */}
            <nav className={styles.page_controls} aria-label="Project navigation">
                {previousProject ? (
                    <Link
                        to={`/projects/${previousProject.slug}`}
                        className={`
                            ${styles.page_control} 
                            text-nav
                        `}
                        aria-label={`Previous project: ${previousProject.title}`}
                    >
                        <IconLabel
                            icon={faArrowLeft}
                            label="Previous project"
                        />
                        <span className={styles.page_control__title}>
                            {previousProject.title}
                        </span>
                    </Link>
                ) : (
                    <span className={`${styles.page_control_disabled} text-nav`}>
                        <IconLabel
                            icon={faArrowLeft}
                            label="Previous project"
                        />
                    </span>
                )}

                {nextProject ? (
                    <Link
                        to={`/projects/${nextProject.slug}`}
                        className={`
                            ${styles.page_control} 
                            ${styles.page_control_next} 
                            text-nav
                        `}
                        aria-label={`Next project: ${nextProject.title}`}
                    >
                        <IconLabel
                            icon={faArrowRight}
                            label="Next project"
                            iconPosition="right"
                        />
                        <span className={styles.page_control__title}>
                            {nextProject.title}
                        </span>
                    </Link>
                ) : (
                    <span
                        className={`
                            ${styles.page_control_disabled} 
                            ${styles.page_control_next} 
                            text-nav
                        `}
                    >
                        <IconLabel
                            icon={faArrowRight}
                            label="Next project"
                            iconPosition="right"
                        />
                    </span>
                )}
            </nav>
        </article>
    );
}
