import styles from "./WorkShowcase.module.css";
import Dropdown from "../../../ui/Dropdown/Dropdown";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "../../../../content/projects";

export default function WorkShowcase() {
    return (
        <section id="work" className={styles.content}>
            <div className={styles.work__intro}>
                <h2 className="text-display-2">Work Showcase</h2>
                <p>A collection of projects that showcase my approach to software engineering, design, and problem-solving. Select a project to explore its story, technical implementation, and the decisions behind it.</p>
            </div>

            <div className={styles.work__filters_bar}>                
                <Dropdown label="Category">
                    <ul className={styles.work__filters_menu}>
                        <li>Full-Stack</li>
                        <li>Frontend</li>
                        <li>Backend</li>
                    </ul>
                </Dropdown>

                <Dropdown label="Sort By">
                    <ul className={styles.work__filters_menu}>
                        <li>Date Published</li>
                    </ul>
                </Dropdown>
                <Dropdown label="Sort Direction">
                    <ul className={styles.work__filters_menu}>
                        <li>Ascending</li>
                        <li>Descending</li>
                    </ul>
                </Dropdown>
            </div>

            <div className={styles.work__project_cards}>
                { 
                    projects.map((project) => (
                        <ProjectCard 
                            key={project.slug}
                            project={project} 
                        />
                    ))
                }
            </div>
        </section>
    )
}