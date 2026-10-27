export type Experience = {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string | null;
    location: string;
    jobType: "Full Time" | "Part Time" | "Contract";
    description: string;
};

export const experiences: Experience[] = [
    {
        jobTitle: "Independent Software Engineer",
        company: "CRIT Advisory",
        startDate: "August 2025",
        endDate: null,
        location: "Orange, CA",
        jobType: "Contract",
        description: "Provide software development and technical consulting services to clients, including building a digital collection management application and supporting business technology systems. Contribute to product requirements, application architecture, database design, troubleshooting, and ongoing system maintenance across client engagements.",
    },
    {
        jobTitle: "Software Engineer",
        company: "The Alliance Group Enterprise",
        startDate: "July 2025",
        endDate: "July 2026",
        location: "Santa Ana, CA",
        jobType: "Full Time",
        description: "Developed and modernized an internal ERP platform spanning full-stack application development, database design, and AWS infrastructure. Improved system performance, deployment workflows, and maintainability through database optimization, API refactoring, Docker, and CI/CD automation.",

    },
    {
        jobTitle: "Student Web Developer",
        company: "UCI OIT Student Affairs",
        startDate: "March 2023",
        endDate: "December 2024",
        location: "Irvine, CA",
        jobType: "Part Time",
        description: "Developed and maintained full-stack applications supporting UC Irvine commencement operations for over 10,000 students and staff. Built features for event management, QR-based name pronunciation, and automated seating assignments while collaborating with stakeholders and mentoring student developers.",
    },
    {
        jobTitle: "Human Resources Assistant",
        company: "California Science Center Foundation",
        startDate: "July 2022",
        endDate: "September 2022",
        location: "Los Angeles, CA",
        jobType: "Part Time",
        description: "Supported HR operations through confidential records management, applicant screening, and administrative coordination. Developed strong organizational, communication, and data-handling skills in a professional environment."
    },
    {
        jobTitle: "Student Assistant III",
        company: "Mt. SAC Accessible Technology Center",
        startDate: "August 2021",
        endDate: "June 2022",
        location: "Walnut, CA",
        jobType: "Part Time",
        description: "Provided technical support and accessible technology assistance to students with diverse learning needs and levels of digital proficiency. Helped troubleshoot hardware and software issues while supporting an inclusive, functional learning environment.",
    },
];