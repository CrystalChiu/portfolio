import styles from "./About.module.css"
import Divider from "../../../ui/Divider/Divider"
import { SkillsCard } from "./SkillsCard/SkillsCard"
import { aboutContent } from "../../../../content/about"

export default function About() {
    return (
        <section id="about" className={styles.content}>
            <h2 className="text-display-2">About Me</h2>

            <div className={styles.about_content}>
                <div className={styles.about__credentials}>
                    {aboutContent.credentials.map((credential) => (
                        <div key={credential.title} className={styles.credential}>
                            <h3 className="text-heading-4">{credential.title}</h3>
                            <div className={styles.credential__details}>
                                <p className="text-mono-s">{credential.date}</p>
                                <p className="text-mono-m">{credential.degree}</p>
                                <p>{credential.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.about__bio}>
                    <h1>My Story</h1>
                    <p>{aboutContent.bio}</p>
                </div>

                <div className={styles.about__tldr}>
                    <strong className="text-display-4-italic">All in all...</strong>
                    <p className="text-subheading">{aboutContent.tldr}</p>
                </div>
            </div>

            <Divider />

            <div className={styles.about__skills}>
                <h2>Skills & Technologies</h2>
                <div className={styles.skills__grid}>
                    {aboutContent.skillGroups.map((group) => (
                        <SkillsCard
                            key={group.title}
                            title={group.title}
                            skills={group.skills}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
