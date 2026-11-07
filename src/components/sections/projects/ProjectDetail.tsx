import type { Project } from "../../../content/projects";
import styles from "./ProjectDetail.module.css";
import ProjectSection from "./ProjectSection/ProjectSection";
import ArrowTextNavLink from "../../ui/ArrowTextNavLink/ArrowTextNavLink";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

type ProjectDetailProps = {
    project: Project;
    previousProject?: Project;
    nextProject?: Project;
};

function formatPublishedAt(date: string) {
    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(date));
}

export default function ProjectDetail({
    project,
    previousProject,
    nextProject,
}: ProjectDetailProps) {
    return (
        <article className={styles.project_detail}>
            <section className={styles.intro}>
                <header className={styles.intro__header}>
                    <p className={styles.intro__eyebrow}>
                        <time dateTime={project.publishedAt}>
                            Published {formatPublishedAt(project.publishedAt)}
                        </time>
                    </p>
                    <h1 className="text-display-2">{project.title}</h1>
                    <p className={styles.intro__dek}>{project.description}</p>
                </header>

                <img
                    className={styles.cover_img}
                    src={`/images/projects/${project.slug}/cover.png`}
                    alt={`${project.title} cover image`}
                />
            </section>

            <section className={styles.overview}>
                <h2>Project at a Glance</h2>

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

                {
                    project.summary && (
                        <div className={styles.overview__summary}>
                            <h3 className="text-heading-2">Overview</h3>
                            <p>
                                {project.summary}
                            </p>
                        </div>
                    )
                }
            </section>

            <div className={styles.case_study}>
                {
                    project.sections.map((section) => (
                       <ProjectSection key={section.position} section={section}/> 
                    ))
                }
            </div>

            <nav className={styles.page_controls} aria-label="Project navigation">
                {previousProject ? (
                    <ArrowTextNavLink
                        to={`/projects/${previousProject.slug}`}
                        icon={faArrowLeft}
                        label="Previous project"
                        title={previousProject.title}
                        aria-label={`Prev. project: ${previousProject.title}`}
                    />
                ) : (
                    <ArrowTextNavLink
                        icon={faArrowLeft}
                        label="Prev. project"
                        disabled
                    />
                )}

                {nextProject ? (
                    <ArrowTextNavLink
                        to={`/projects/${nextProject.slug}`}
                        icon={faArrowRight}
                        label="Next project"
                        title={nextProject.title}
                        iconPosition="right"
                        align="end"
                        aria-label={`Next project: ${nextProject.title}`}
                    />
                ) : (
                    <ArrowTextNavLink
                        icon={faArrowRight}
                        label="Next project"
                        iconPosition="right"
                        align="end"
                        disabled
                    />
                )}
            </nav>
        </article>
    );
}
