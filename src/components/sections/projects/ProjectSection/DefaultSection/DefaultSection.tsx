import { PROJECT_IMGS_PATH } from "../../../../../content/projects";
import type { DefaultProjectSection } from "../../../../../content/projects";
import styles from "../ProjectSection.module.css";

type DefaultSectionProps = {
    section: DefaultProjectSection;
};

export default function DefaultSection({ section }: DefaultSectionProps) {
    return (
        <section className={styles.project_section}>
            <header className={styles.project_section__header}>
                {
                    section.position != null && (
                        <span className={styles.project_section__number}>
                            {String(section.position).padStart(2, "0")}
                        </span>
                    )
                }
                <h2>{section.title}</h2>
            </header>

            {
                section.subheading && (
                    <h3 className="text-subheading">
                        {section.subheading}
                    </h3>
                )
            }

            <div className={styles.project_section__paragraphs}>
                {
                    section.paragraphs.map((paragraph) => (
                        <p
                            key={paragraph}
                            className={styles.project_section__paragraph}
                        >
                            {paragraph}
                        </p>
                    ))
                }
            </div>

            <div className={styles.project_section__images}>
                {
                    section.images.map((image) => (
                        <figure
                            key={image.path}
                            className={styles.project_section__image}
                        >
                            <img
                                src={`${PROJECT_IMGS_PATH}/${image.path}`}
                                alt={image.caption ?? ""}
                            />
                            {
                                image.caption && (
                                    <figcaption
                                        className={styles.project_section__caption}
                                    >
                                        {image.caption}
                                    </figcaption>
                                )
                            }
                        </figure>
                    ))
                }
            </div>
        </section>
    );
}
