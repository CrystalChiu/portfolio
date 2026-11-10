import type { TitleProjectSection } from "../../../../../content/projects";
import styles from "./TitleSection.module.css";
import Divider from "../../../../ui/Divider/Divider";

type TitleSectionProps = {
    section: TitleProjectSection;
};

export default function TitleSection({ section }: TitleSectionProps) {
    return (
        <section className={styles.title_section}>
            <h2 className="text-display-4">{section.title}</h2>
            <Divider />
        </section>
    );
}
