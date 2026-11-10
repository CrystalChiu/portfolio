import type { Experience } from "../../../../../content/experience";
import styles from "./ExperienceEntry.module.css";
import FadeIn from "../../../../ui/FadeIn/FadeIn";

type ExperienceEntryProps = {
    experience: Experience
};

export default function ExperienceEntry({ 
    experience 
} : ExperienceEntryProps) {
    return (
        <FadeIn distance={24}>
            <article className={styles.entry}>
                <p className={`${styles.entry__dates} text-mono-s`}>
                    {experience.startDate} - {experience.endDate ?? "Present"}
                </p>

                <div className={styles.entry__headline}>
                    <h2>{experience.jobTitle}</h2>
                    <h3 className="text-subheading">{experience.company}</h3>
                </div>

                <div className={styles.entry__details}>
                    <p>{experience.location}</p>
                    <p>|</p>
                    <p>{experience.jobType}</p>
                </div>

                <p className={`${styles.entry__description} text-body-s`}>
                    {experience.description}
                </p>
            </article>
        </FadeIn>
    )
}