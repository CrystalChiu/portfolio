export type Credential = {
    title: string;
    date: string;
    degree: string;
    institution: string;
};

export type SkillGroup = {
    title: string;
    skills: readonly string[];
};

export type AboutContent = {
    credentials: readonly Credential[];
    bio: string;
    tldr: string;
    skillGroups: readonly SkillGroup[];
};

export const aboutContent: AboutContent = {
    credentials: [
        {
            title: "Education",
            date: "Grad. March 2025",
            degree: "B.S., Computer Science",
            institution: "University of California, Irvine",
        },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.",
    tldr: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
    skillGroups: [
        {
            title: "Languages",
            skills: ["TypeScript", "JavaScript", "Python", "SQL"],
        },
        {
            title: "Frameworks & Libraries",
            skills: ["React", "Node.js", "Next.js"],
        },
        {
            title: "Tools & Platforms",
            skills: ["Git", "Docker", "AWS", "Vite"],
        },
    ],
};
