import { useState } from "react";
import styles from "./WorkShowcase.module.css";
import Dropdown from "../../../ui/Dropdown/Dropdown";
import MultiselectDropdown from "../../../ui/MultiselectDropdown/MultiselectDropdown";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects, PROJECT_CATEGORIES } from "../../../../content/projects";
import type { ProjectCategory } from "../../../../content/projects";

export default function WorkShowcase() {
    // Determine the set of visible projects and their ordering
    const [selectedCategories, setSelectedCategories] = useState<readonly ProjectCategory[]>([]);
    const [sortBy, setSortBy] = useState<"publishedAt" | "title">("publishedAt");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

    const hasActiveFilters =
        selectedCategories.length > 0 ||
        sortBy !== "publishedAt" ||
        sortDirection !== "desc";

    function resetFilters() {
        setSelectedCategories([]);
        setSortBy("publishedAt");
        setSortDirection("desc");
    }

    const visibleProjects = [...projects].filter((project) => (
        // Filter
        selectedCategories.length === 0 || 
        selectedCategories.some(category => project.categories.includes(category))
    ))
    .sort((a, b) => {
        const comparison = sortBy === "title"
            ? a.title.localeCompare(b.title)
            : a.publishedAt.localeCompare(b.publishedAt);

        return sortDirection === "asc"
            ? comparison
            : -comparison;
    });

    return (
        <section id="work" className={styles.content}>
            <div className={styles.work__intro}>
                <h2 className="text-display-1">Work Showcase</h2>
                <p>A collection of projects that showcase my approach to software engineering, design, and problem-solving. Select a project to explore its story, technical implementation, and the decisions behind it.</p>
            </div>

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
