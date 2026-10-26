export const PROJECT_IMGS_PATH = "/images/projects";

export type Project = {
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    category: "Full-Stack" | "Frontend" | "Backend" | "Database" | "UIUX";
    publishedAt: string;
}

export const projects: Project[] = [
    {
        slug: "example",
        title: "Example Project",
        description: "A placeholder project.",
        technologies: ["React", "TypeScript", "CSS"],
        category: "Full-Stack",
        publishedAt: "2026-10-25"
    },
    {
        slug: "example-2",
        title: "Example 2 Project",
        description: "A placeholder project.",
        technologies: ["React", "TypeScript", "CSS"],
        category: "Full-Stack",
        publishedAt: "2026-10-25"
    }
];