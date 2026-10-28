import { Link } from "react-router";
import PageLayout from "../components/layout/PageLayout";
import Dropdown from "../components/ui/Dropdown/Dropdown";
import MultiselectDropdown from "../components/ui/MultiselectDropdown/MultiselectDropdown";
import ProjectCard from "../components/sections/home/WorkShowcase/ProjectCard/ProjectCard";
import { PROJECT_CATEGORIES } from "../content/projects";
import { useProjectFilters } from "../hooks/useProjectFilters";
import styles from "../components/sections/home/WorkShowcase/WorkShowcase.module.css";
import IconLabel from "../components/ui/IconLabel/IconLabel";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Divider from "../components/ui/Divider/Divider";
import pageStyles from "./Projects.module.css";

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
                    <div className={pageStyles.content__heading}>
                        <div className={pageStyles.content__heading__group}>
                            <div className={styles.work__intro}>
                                <h2 className="text-display-1">My Works</h2>
                                <p>
                                    Click each card to learn more about its development process.
                                </p>
                                <p className="text-tertiary">
                                    WIP: More coming soon!
                                </p>
                            </div>

                            <Divider />
                        </div>

                        <Link to="/#work" className={styles.view_all}>
                            <IconLabel icon={faArrowLeft} label="Back to Home" />
                        </Link>
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
