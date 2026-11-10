export const PROJECT_IMGS_PATH = "/images/projects";

export const PROJECT_CATEGORIES = [
    "Full-Stack",
    "DevOps",
    "Cloud",
    "AI",
    "UIUX",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const PROJECT_TYPES = [
    "open-source",
    "professional",
    "personal",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
    "open-source": "Open Source",
    professional: "Professional",
    personal: "Personal",
};

export type Project = {
    slug: string;
    title: string;
    role: string;
    url?: string;
    projectType: ProjectType;
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

type ProjectSectionBase = {
    position: number | null; // starting from 1
    title: string;
    images: SectionImage[];
}

export type DefaultProjectSection = ProjectSectionBase & {
    type?: "default";
    subheading?: string;
    paragraphs: string[];
};

export type TitleProjectSection = ProjectSectionBase & {
    type: "title";
    content?: undefined;
};

export type ListProjectSection = ProjectSectionBase & {
    type: "list";
    subheading?: string;
    content?: undefined;
    items: string[];
};

export type ProjectSection =
    | DefaultProjectSection
    | TitleProjectSection
    | ListProjectSection;

export const projects: Project[] = [
    {
        slug: "tagcsoft",
        title: "Tagcsoft",
        role: "Software Engineer",
        projectType: "professional",
        description: "Reengineering, modernizing, and building on a custom ERP in 3 phases for a civil-engineering consulting enterprise.",
        summary: "Tagcsoft was an ERP application built for The Alliance Group Enterprise, an engineering consulting organization. At the time I joined, it had outgrown its original project-management scope. It held important operational data, but its engineering practices, hosting environment, and codebase had not matured at the same pace.",
        technologies: ["Laravel (PHP)", "Vue.js", "MySQL", "Docker", "Terraform", "GitHub Actions", "AWS (EC2, EBS, S3, SES)"],
        categories: ["Full-Stack", "DevOps", "Cloud", "UIUX"],
        publishedAt: "2026-11-6",
        sections: [
            {
                position: null,
                type: "title",
                title: "Phase 1: Redoing the Foundation",
                images: []
            },
            {
                position: 1,
                type: "default",
                title: "Stabilizing an Inherited Production System",
                paragraphs: [
                    "When I began working on Tagcsoft, the application was operational but fragile. Credentials had been exposed in the repository, the database lacked integrity constraints, there was no useful migration history, and the backend had no test foundation.",
                    "I rotated the exposed keys, removed the committed environment file, and introduced a safer configuration workflow. I then created a production-oriented database cleanup and constraint pass and established a migration baseline so future schema changes could be tracked and reviewed. To make future changes safer, I built the backend test foundations needed to exercise existing endpoints, including factories, seeders, and supporting migrations. I also introduced branching and code-review practices, added pre-commit formatting, and replaced raw JavaScript linking with Webpack Mix.",
                    "That work changed how the system could evolve. Instead of making unreviewed schema changes or relying on manual deployment habits, the team had a versioned database workflow, regression coverage around selected behavior, and a more consistent development process that would maintain standards even as we slowly introduced AI-tooling in our workflow."
                ],
                images: []
            },
            {
                position: null,
                type: "title",
                title: "Phase 2: Timesheets & Project Manager",
                images: []
            },
            {
                position: 2,
                type: "default",
                title: "Integrating Time Tracking",
                paragraphs: [
                    "One of my largest contributions was leading the implementation of the Timesheets module, spanning time entry, approvals, reporting, and invoicing workflows. I designed its underlying data models and application logic to integrate with existing ERP project structures while accommodating different billing rules and administrative requirements. Beyond basic time tracking, the system gave project managers visibility into hours charged against their projects and centralized the review and approval process before payroll export. The application replaced the company's third-party timesheet tool, saving over $200 per month, and was eventually adopted company-wide and incorporated into the employee handbook following successful live-testing phases and no operational failures after rollout.",
                ],
                images: []
            },
            {
                position: 3,
                type: "default",
                title: "Addressing Frontend Bottlenecks",
                paragraphs: [
                    "After noticing that the legacy Project Manager module accounted for 85% of new bug reports, I identified its limited frontend capabilities (Vanilla JS exclusively) as a bottleneck to delivering new features reliably. I proposed and led a frontend modernization, beginning with interviews with civil engineers and Figma prototypes to address usability issues in their day-to-day workflows. Rather than attempting a costly full rewrite, I introduced Vue incrementally, starting with Project Manager while transitioning the backend toward a REST API to better separate frontend and backend responsibilities. Within three months, the redesigned module introduced long-requested features, including auto-save, inline editing, and streamlined photo uploads. Engineers successfully field-tested it during site inspections shortly after launch and noted it to be significantly more usable. Additionally, subsequent bug reports declined to levels comparable with the newer Timesheets module."],
                images: []
            },
            {
                position: null,
                type: "title",
                title: "Phase 3: A More Mature Infrastructure",
                images: []
            },
            {
                position: 4,
                type: "default",
                title: "Designing Reproducible AWS Infrastructure",
                paragraphs: [
                    "Developers encountered increasing friction as our workload, application usage, and our user base grew. We soon came to the conclusion that Tagcsoft eventually outgrew its Hostinger shared-hosting environment. The hosting setup locked the PHP version, limited modern development tooling such as Docker, and made environment consistency difficult. Manual SSH deployments and environment drift also made onboarding and recovery slower than they needed to be. I designed the migration to AWS.",
                    "The new architecture used Docker for environmental consistency, Terraform for reproducible infrastructure, EC2 and EBS for compute and persistent storage, and S3 for files and backups. GitHub Actions automated testing, deployment, and rollback. Versioned container releases made it possible to identify and restore a known-good release without manually logging into production. The new environment cost about $10 per month—less on average than the Hostinger plan it replaced—while providing significantly more developer control and flexibility.",
                    "Local and server setup dropped from several hours to under an hour, deployments moved from a 15–20 minute manual SSH process to an approximately 5-minute deploy-on-push workflow, rollbacks moved from manual SSH recovery to a GitHub Actions workflow, environments became more consistent across development, staging, and production, and backup health became visible instead of failing silently. The architecture also needed to support a growing multi-office user base and hundreds of gigabytes of operational files. Rather than immediately adopting a more complex distributed setup, I kept the application layer portable and avoided premature multi-region database complexity until the operational requirements justified it."
                ],
                images: []
            },
            {
                position: 5,
                type: "default",
                title: "Performance & Reliability Refinements",
                paragraphs: [
                    "As application usage grew, high-load API requests began taking 5–7 seconds to complete, putting unnecessary strain on the database and slowing down everyday workflows. I profiled the queries behind these requests, identifying N+1 query patterns and opportunities to reduce repeated database access. I introduced query optimizations and Redis caching for frequently accessed, relatively static data, bringing response times down to approximately 400–600ms while reducing database load.",
                    "With managed database services like RDS outside our budget, I also designed a lightweight backup and monitoring solution around our existing infrastructure. The database ran on persistent storage, with scheduled jobs creating backups and transferring them to S3. I complemented this with a small Python monitoring suite that checked backup freshness, disk capacity, and other operational health indicators, sending alerts to our team's communication channel when something needed attention. This gave us greater visibility into infrastructure health and a more dependable backup process without introducing the cost of additional managed services."
                ],
                images: []
            },
            {
                position: null,
                type: "title",
                title: "Conclusion",
                images: []
            },
            {
                position: null,
                type: "list",
                title: "Outcomes",
                items: [
                    "Containerized the application using Docker",
                    "Improved slow and repetitive DB operations with Redis caching",
                    "Built a CICD pipeline for testing, image-based deployments to development and production environments, and handling rollbacks",
                    "Built and replaced a third-party timesheet tool integrated within the ERP",
                    "Minimized AWS infrastructure cost while improving developer flexibility",
                    "Slowly integrated Vue.js into the application frontend and rewrote legacy backend code into REST APIs",
                    "Designed and rebuilt the Project Manager module around direct user research with civil engineers",
                    "Improved data integrity through constraints, cleanup, and a migration baseline"
                ],
                images: []
            },
            {
                position: null,
                type: "default",
                title: "Engineering Reflections",
                // add an AI reflection part: what it taught me about my role as an orchestrator for AI
                paragraphs: [
                    "The biggest lesson from Tagcsoft was that production software needs control before it needs more features. Integrity constraints, migrations, tests, and review processes are not bureaucratic overhead; they are what make future changes safe.",
                    "I also learned that modernization does not require a rewrite. Incrementally converting frontend-heavy areas to Vue, keeping backend endpoints resource-oriented, and introducing Docker and Terraform step by step reduced risk while still meaningfully improving the system.",
                    "Finally, the infrastructure work taught me that architecture decisions are risk decisions. Choosing between managed and self-managed services, deciding when to introduce containers and infrastructure as code, and determining how much scalability to build before it is needed all require balancing reliability, cost, maintenance burden, and team capacity."
                ],
                images: []
            }
        ]
    },
    {
        slug: "commencement",
        title: "UCI Commencement",
        role: "Student Web Developer",
        projectType: "professional",
        description: "Building software for a university's largest annual event. My work on the UC Irvine commencement platform.",
        summary: "During my time at UCI, I was part of the student development team responsible for the university's commencement platform under the Department of Student Affairs. Despite being unfamiliar with the Laravel, Vue.js, and MySQL stack and it being my first professional development role, I quickly learned and contributed to bug fixes, testing, performance improvements, and, eventually, new developer support and key feature development. Two contributions in particular stood out as high-impact, high-ownership, full builds.",
        technologies: ["Laravel (PHP)", "Vue.Js", "SCSS", "Cypress"],
        categories: ["Full-Stack"],
        publishedAt: "2026-11-9",
        sections: [
            {
                position: null,
                type: "title",
                title: "Featured Contributions",
                images: []
            },
            {
                position: 1,
                type: "default",
                title: "Contribution 1: Seating Chart Tool",
                images: [],
                paragraphs: [
                    "The commencement team needed a more flexible way to create and manage ceremony seating charts on the internal side of the platform. I helped build the Seating Chart Tool from the ground up, working closely with the technical lead and other developers.",
                    "The tool allowed administrators to design ceremony-specific layouts, block off unavailable seats, and reserve seats for specific groups or individuals. It also included an auto-assign feature that distributed students across the chart using proprietary grouped seating logic, reducing the amount of manual placement work required for each ceremony.",
                    "My contribution went beyond implementation. I worked on the initial mockups and took on more responsibility for planning the feature, including writing tickets and helping the technical lead shape the software architecture. The hardest part was not simply rendering seats on a page; it was modeling a flexible layout system that could support real ceremony constraints while keeping the auto-assignment behavior predictable and fast. Maintaining good time complexity was a high priority, as the system managed tens of thousands of student records accumulated over years of commencements.",
                    "Despite the constraints, the team managed to meet the deadline with time to spare, which I used to polish the application front-end and build E2E tests. The result was a production tool that gave administrators direct control over seating logistics and removed a significant amount of manual coordination from the ceremony planning process."
                ]
            },
            {
                position: 2,
                type: "default",
                title: "Contribution 2: Event Request Application",
                images: [],
                paragraphs: [
                    "I also built the Event Request application, a separate sister application for coordinating minor events under UCI Commencement. I completed the implementation independently, with supervision and some architectural guidance from the technical lead.",
                    "The application supported the full request workflow: form submissions, speaker booking, and email coordination between event organizers and the commencement team. Because it was a standalone application rather than a feature inside the main platform, I worked across the full stack, from data modeling and application logic to interface behavior and communication workflows.",
                    "This project gave me a rare amount of ownership early in my career. I was responsible for translating an operational process into a working application, while still collaborating with a technical lead who reviewed the direction and helped me make better architectural decisions. It was completed by the end of my summer session and put into production."
                ]
            },
            {
                position: null,
                type: "title",
                title: "Conclusion",
                images: []
            },
            {
                position: 3,
                type: "default",
                title: "Reflections",
                images: [],
                paragraphs: [
                    "My work on UCI Commencement combined everyday production maintenance with two larger feature builds. With the Seating Chart Tool, I gained experience designing production mockups, shaping application architecture, writing implementation tickets, and technical documents. The Event Request application gave me even more ownership by designing and implementing an entire full-stack application from the ground up over the summer session, based on admin requirements and through sprints between me and my technical lead.",
                    "This was my first professional development role, and I joined with a lot to learn. My technical lead gave me space to propose solutions, make mistakes, and think through architecture instead of just implementing tickets. That mentorship taught me how to collaborate with other developers, ask better questions, and take ownership of real production work. By the end, I had gone from feeling like a student learning to code to feeling like an engineer trusted to ship software people relied on."
                ]
            }
        ]
    }
];
