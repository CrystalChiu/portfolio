export const PROJECT_IMGS_PATH = "/images/projects";

export const PROJECT_CATEGORIES = [
    "Full-Stack",
    "DevOps",
    "Cloud",
    "AI",
    "UIUX",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type Project = {
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    categories: readonly ProjectCategory[];
    publishedAt: string;
}

export const projects: Project[] = [
    {
        slug: "example",
        title: "Example Project",
        description: "A placeholder project.",
        technologies: ["React", "TypeScript", "CSS"],
        categories: ["Full-Stack", "DevOps", "Cloud"],
        publishedAt: "2026-10-25"
    },
    {
        slug: "example-2",
        title: "Example 2 Project",
        description: "A placeholder project.",
        technologies: ["React", "TypeScript", "CSS"],
        categories: ["Full-Stack", "AI"],
        publishedAt: "2026-10-25"
    }
];
