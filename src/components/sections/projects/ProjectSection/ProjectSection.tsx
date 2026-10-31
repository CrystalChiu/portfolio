import styles from "./ProjectSection.module.css"
import type { ProjectSection } from "../../../../content/projects"

type ProjectSectionProps = {
    section: ProjectSection
};

export default function ProjectSection({ section } : ProjectSectionProps) {
    return (
        <section className={styles.project_section}>
            <header>
                <h2>{String(section.position).padStart(2, "0")}</h2>
                <h2>{section.title}</h2>
            </header>
            <p>{section.content}</p>
            <div className={styles.project_section__images}>
                {
                    section.images.map((image) => (
                        <img src={`/images/projects/${image}`} />
                    ))
                }
            </div>
        </section>
    );
}
