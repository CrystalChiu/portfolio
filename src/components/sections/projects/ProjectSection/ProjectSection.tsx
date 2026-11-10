import DefaultSection from "./DefaultSection/DefaultSection";
import ListSection from "./ListSection/ListSection";
import TitleSection from "./TitleSection/TitleSection";
import type { ProjectSection } from "../../../../content/projects"

type ProjectSectionProps = {
    section: ProjectSection
};

export default function ProjectSection({ section } : ProjectSectionProps) {
    if (section.type === "title") {
        return <TitleSection section={section} />;
    }

    if (section.type === "list") {
        return <ListSection section={section} />;
    }

    return <DefaultSection section={section} />;
}
