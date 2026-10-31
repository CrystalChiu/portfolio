import PageLayout from "../components/layout/PageLayout";
import ProjectDetail from "../components/sections/projects/ProjectDetail";
import { projects } from "../content/projects";
import { useParams } from "react-router";

export default function ProjectDetails() {
    const { slug } = useParams();
    const projectIndex = projects.findIndex((project) => project.slug === slug);
    const project = projectIndex === -1 ? undefined : projects[projectIndex];
    const previousProject =
        projectIndex > 0 ? projects[projectIndex - 1] : undefined;
    const nextProject =
        projectIndex !== -1 && projectIndex < projects.length - 1
            ? projects[projectIndex + 1]
            : undefined;

    return (
        <main>
            <PageLayout>
                {project ? (
                    <ProjectDetail
                        project={project}
                        previousProject={previousProject}
                        nextProject={nextProject}
                    />
                ) : (
                    <section>
                        <h1 className="text-display-2">Project not found</h1>
                        <p>The project you're looking for doesn't exist.</p>
                    </section>
                )}
            </PageLayout>
        </main>
    );
}
