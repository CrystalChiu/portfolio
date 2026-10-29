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
    bio: "Before computer science, there was art. I spent years in programs for drawing, painting, and digital art. When I discovered programming in high school, I recognized it as another outlet for creative expression that also satisfied my desire for creating practical solutions. I've always seen software engineering as a form of digital craftsmanship, from the systems and databases beneath an application to the countless engineering decisions that shape how it works. \n\nThat perspective continues to shape how I approach my work. I'm drawn to the technical puzzles behind complex systems, the thoughtfulness required to build them well and maintain them, and the people who ultimately use what I create. I hope to keep expanding my craft by learning from teams who manage larger, more complex systems and growing into an engineer who brings technical rigor, creativity, and user empathy to every project.",
    tldr: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
    skillGroups: [
        {
            title: "Languages",
            skills: ["TypeScript", "JavaScript", "Java", "PHP", "SQL", "C++", "Python"],
        },
        {
            title: "Frameworks & Libraries",
            skills: ["React.js", "React Native", "Vue.js", "Node.js", "Next.js", "Laravel", "Flask"],
        },
        {
            title: "Tools & Platforms",
            skills: ["Git", "Docker", "AWS", "Terraform"],
        },
    ],
};
