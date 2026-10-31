import styles from "./WorkShowcase.module.css";
import Dropdown from "../../../ui/Dropdown/Dropdown";
import MultiselectDropdown from "../../../ui/MultiselectDropdown/MultiselectDropdown";
import ProjectCard from "./ProjectCard/ProjectCard";
import { PROJECT_CATEGORIES } from "../../../../content/projects";
import { useProjectFilters } from "../../../../hooks/useProjectFilters";
import { Link } from "react-router";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import IconLabel from "../../../ui/IconLabel/IconLabel";

export default function WorkShowcase() {
    const {
        selectedCategories,
        setSelectedCategories,
        sortBy,
        setSortBy,
        sortDirection,
        setSortDirection,
        hasActiveFilters,
        resetFilters,
        visibleProjects,
    } = useProjectFilters();

    return (
        <section id="work" className={styles.content}>
            <header className={styles.work__intro}>
                <h2 className="text-display-1">Work Showcase</h2>

                <div>
                    <p>A collection of projects that showcase my approach to software engineering, design, and problem-solving.</p>
                    <p>Select a project to explore its story, technical implementation, and the decisions behind it.</p>
                </div>
            </header>

            <div className={styles.work__filters_bar}>                
                <MultiselectDropdown
                    label="Category"
                    options={PROJECT_CATEGORIES}
                    selected={selectedCategories}
                    onChange={setSelectedCategories}
                />

                <Dropdown label="Sort By">
                    <ul>
                        <li onMouseDown={() => setSortBy("publishedAt")}>
                            Date Published
                        </li>
                        <li onMouseDown={() => setSortBy("title")}>
                            A-Z
                        </li>
                    </ul>
                </Dropdown>
                <Dropdown label="Sort Direction">
                    <ul>
                        <li onMouseDown={() => setSortDirection("asc")}>
                            Asc
                        </li>
                        <li onMouseDown={() => setSortDirection("desc")}>
                            Desc
                        </li>
                    </ul>
                </Dropdown>
            </div>

            <div className={styles.work__active_filters}>
                <span>
                    Filtered:{" "}
                    <span className={styles.active_value}>
                        {selectedCategories.length > 0
                            ? selectedCategories.join(", ")
                            : "All"}
                    </span>
                </span>
                <span>
                    Sort:{" "}
                    <span className={styles.active_value}>
                        {sortBy === "title" ? "A-Z" : "Date Published"}
                    </span>
                </span>
                <span>
                    Direction:{" "}
                    <span className={styles.active_value}>
                        {sortDirection === "asc" ? "Asc" : "Desc"}
                    </span>
                </span>
                {hasActiveFilters && (
                    <button
                        type="button"
                        className={styles.reset}
                        onClick={resetFilters}
                    >
                        Reset
                    </button>
                )}
            </div>

            <p className={styles.work__wip_message}>Projects currently being curated. Check back again soon!</p>

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

            <Link to="/projects" className={styles.view_all}>
                <IconLabel 
                    icon={faArrowRight} 
                    label="See More" 
                    iconPosition="right" 
                />
            </Link>
        </section>
    )
}
