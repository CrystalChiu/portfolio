import styles from "./About.module.css"
import Divider from "../../../ui/Divider/Divider"
import { SkillsCard } from "./SkillsCard/SkillsCard"
import { aboutContent } from "../../../../content/about"
import { Link } from "react-router";
import IconLabel from "../../../ui/IconLabel/IconLabel";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


export default function About() {
    return (
        <section id="about" className={styles.content}>
            <Divider />
            
            <div className={styles.about_content}>
                {/* My Story */}
                <div className={styles.about__bio}>
                    <h2 className="text-display-2-italic">My Story</h2>

                    <div className={styles.about__bio_content}>
                        {
                            aboutContent.bio.split("\n\n").map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))
                        }
                    </div>
                </div>

                <Divider />

                {/* Credentials List */}
                <div className={styles.about__credentials}>
                    {aboutContent.credentials.map((credential) => (
                        <div key={credential.title} className={styles.credential}>
                            <h3 className="text-heading-3">{credential.title}</h3>
                            <div className={styles.credential__details}>
                                <p className="text-mono-s">{credential.date}</p>
                                <p className="text-mono-m">{credential.degree}</p>
                                <p>{credential.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>

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
                    <div className={styles["about__skills-outro"]}>
                        <p>
                            Don't see exactly what you're looking for? I learn fast.
                        </p>
                        <Link to="/#contact" className={styles["about__skills-contact"]}>
                            <IconLabel 
                                icon={faChevronDown} 
                                label="Ask me more"
                                iconPosition="right"
                            />
                        </Link>
                    </div>
                </div>

                {/* <div className={styles.about__tldr}>
                    <strong className="text-display-4-italic">All in all,</strong>
                    <p className="text-subheading">{aboutContent.tldr}</p>
                </div> */}
            </div>

        </section>
    )
}
