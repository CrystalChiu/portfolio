import PageLayout from "../components/layout/PageLayout";
import Dropdown from "../components/ui/Dropdown/Dropdown";
import MultiselectDropdown from "../components/ui/MultiselectDropdown/MultiselectDropdown";
import ArrowTextNavLink from "../components/ui/ArrowTextNavLink/ArrowTextNavLink";
import ProjectCard from "../components/sections/home/WorkShowcase/ProjectCard/ProjectCard";
import { PROJECT_CATEGORIES } from "../content/projects";
import { useProjectFilters } from "../hooks/useProjectFilters";
import styles from "../components/sections/home/WorkShowcase/WorkShowcase.module.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Divider from "../components/ui/Divider/Divider";

export default function Projects() {
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
        <main>
            <PageLayout>
                <section className={styles.content}>
                    <div className={styles.content__heading}>
                        <div className={styles.content__heading__group}>
                            <div className={styles.work__intro}>
                                <h2 className="text-display-1">All Works</h2>
                                <p>A collection of projects, problems solved, and the engineering behind the work. Explore the process, implementation, and impact of each.</p>
                            </div>

                            <Divider />
                        </div>

                        <ArrowTextNavLink
                            to="/#work"
                            icon={faArrowLeft}
                            label="Back to Home"
                            orientation="inline"
                        />
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
                                <li
                                    onMouseDown={() => setSortDirection("desc")}
                                >
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
                        {visibleProjects.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                            />
                        ))}
                    </div>
                </section>
            </PageLayout>
        </main>
    );
}
