import { PROJECT_IMGS_PATH } from "../../../../../content/projects";
import type { ListProjectSection } from "../../../../../content/projects";
import sharedStyles from "../ProjectSection.module.css";
import styles from "./ListSection.module.css";

type ListSectionProps = {
    section: ListProjectSection;
};

export default function ListSection({ section }: ListSectionProps) {
    return (
        <section className={sharedStyles.project_section}>
            <header className={sharedStyles.project_section__header}>
                {
                    section.position != null && (
                        <span className={sharedStyles.project_section__number}>
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

            <ul className={styles.list_section__items}>
                {
                    section.items.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>

            <div className={sharedStyles.project_section__images}>
                {
                    section.images.map((image) => (
                        <figure
                            key={image.path}
                            className={sharedStyles.project_section__image}
                        >
                            <img
                                src={`${PROJECT_IMGS_PATH}/${image.path}`}
                                alt={image.caption ?? ""}
                            />
                            {
                                image.caption && (
                                    <figcaption
                                        className={sharedStyles.project_section__caption}
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
