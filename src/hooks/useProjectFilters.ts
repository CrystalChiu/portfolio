import { useState } from "react";
import { projects } from "../content/projects";
import type { ProjectCategory } from "../content/projects";

export function useProjectFilters() {
    const [selectedCategories, setSelectedCategories] = useState<
        readonly ProjectCategory[]
    >([]);
    const [sortBy, setSortBy] = useState<"publishedAt" | "title">(
        "publishedAt",
    );
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

    const visibleProjects = [...projects]
        .filter(
            (project) =>
                selectedCategories.length === 0 ||
                selectedCategories.some((category) =>
                    project.categories.includes(category),
                ),
        )
        .sort((a, b) => {
            const comparison =
                sortBy === "title"
                    ? a.title.localeCompare(b.title)
                    : a.publishedAt.localeCompare(b.publishedAt);

            return sortDirection === "asc" ? comparison : -comparison;
        });

    return {
        selectedCategories,
        setSelectedCategories,
        sortBy,
        setSortBy,
        sortDirection,
        setSortDirection,
        hasActiveFilters,
        resetFilters,
        visibleProjects,
    };
}
