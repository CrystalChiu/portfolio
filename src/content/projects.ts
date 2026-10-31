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
    role: string;
    description: string;
    summary: string | null;
    technologies: string[];
    categories: readonly ProjectCategory[];
    publishedAt: string;
    sections: ProjectSection[];
}

export type SectionImage = {
    path: string;
    caption: string | null;
};

export type ProjectSection = {
    position: number; // starting from 1
    title: string;
    content: string;
    images: SectionImage[];
}

export const projects: Project[] = [
    {
        slug: "tagcsoft",
        title: "Tagcsoft",
        role: "Full Stack Developer",
        description: "An internal ERP system for managing Civil Engineering workflows, including project management, time tracking, employee metrics, and handling IT tickets.",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        technologies: ["Laravel", "PHP", "Vue.js", "MySQL"],
        categories: ["Full-Stack", "DevOps", "Cloud"],
        publishedAt: "2026-10-31",
        sections: [
            {
                position: 1,
                title: "The Original App",
                content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
                images: []
            },
            {
                position: 2,
                title: "Design & Planning",
                content: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
                images: []
            }
        ]
    },
    {
        slug: "example-2",
        title: "Example 2 Project",
        role: "Developer",
        description: "A placeholder project.",
        summary: null,
        technologies: ["React", "TypeScript", "CSS"],
        categories: ["Full-Stack", "AI"],
        publishedAt: "2026-11-1",
        sections: [

        ]
    }
];
