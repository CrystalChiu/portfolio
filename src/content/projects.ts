export type Project = {
    slug: string;
    title: string;
    description: string;
    image: string; // URL
    technologies: string[];
    category: "Full-Stack" | "Frontend" | "Backend" | "Database" | "UIUX";
}

export const projects: Project[] = [
    {
        slug: "example",
        title: "Example Project",
        description: "A placeholder project.",
        image: "#",
        technologies: ["React", "TypeScript", "CSS"],
        category: "Full-Stack"
    }
];