import styles from "./WorkShowcase.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "../../../../content/projects";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ArrowTextNavLink from "../../../ui/ArrowTextNavLink/ArrowTextNavLink";
import Divider from "../../../ui/Divider/Divider";

export default function WorkShowcase() {
    const featuredProjects = [
        'tagcsoft'
    ];
    const visibleProjects = projects.filter((project) => featuredProjects.includes(project.slug))

    return (
        <section id="work" className={styles.content}>
            <header className={styles.content__heading}>
                <div className={styles.content__heading__group}>
                    <div className={styles.work__intro}>
                        <h2 className="text-display-1">Work Showcase</h2>
                        <p>A collection of projects that showcase my approach to software engineering, design, and problem-solving.</p>
                        <p>Select a project to explore its story, technical implementation, and the decisions behind it.</p>
                    </div>

                    <Divider />
                </div>

                <ArrowTextNavLink
                    to="/projects"
                    icon={faArrowRight}
                    label="All Works"
                    iconPosition="right"
                    orientation="inline"
                    className={styles.view_all}
                />
            </header>

            <div className={styles.work__project_cards}>
                { 
                    visibleProjects.map((project) => (
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
