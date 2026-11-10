import styles from "./Experience.module.css"
import { experiences } from "../../../../content/experience"
import ExperienceEntry from "./ExperienceEntry/ExperienceEntry"
import coil from "../Coil.module.css";

export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <h2 className="text-display-1">Experience</h2>
            <div className={styles.experience__timeline}>
                <div className={coil.line} aria-hidden="true"></div>
                <div className={styles.experience__entries}>
                    {
                        experiences.map((experience) => (
                            <ExperienceEntry key={experience.company} experience={experience} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
