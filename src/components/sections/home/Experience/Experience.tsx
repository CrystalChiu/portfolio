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
                <ol className={styles.experience__timeline__entries}>
                    {
                        experiences.map((experience) => (
                            <li key={`${experience.jobTitle}_${experience.company}`}>
                                <ExperienceEntry experience={experience} />
                            </li>
                        ))
                    }
                </ol>
            </div>
        </section>
    )
}