import styles from "./Hero.module.css"
import IconLabel from "../../ui/IconLabel";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faSquareLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
    return (
        <section id="hero" className={styles.content}>
            <div className={styles.hero__statement}>
                <p>Hello, World.</p>
                <div className={styles.hero__name}>
                    <h2 className="text-display-3">I'm</h2>
                    <h1 className="text-display-2">Crystal</h1>
                </div>
            </div>

            <div className={styles.hero__description}>
                <h1 className="text-display-1">
                    Software Engineer with really good taste.
                </h1>
                <p>
                    I’m looking to become an expert at engineering technically complex, joyful, and humanistic digital experiences.
                </p>
            </div>
            
            <div className={styles.hero__details}>
                <div className={styles.hero__location}>
                    <IconLabel icon={faMapPin} label="Orange, CA" />
                </div>
                <div 
                    className={styles.hero__links}
                    aria-label="Professional Links"
                >
                    {/* Update with real resume later */}
                    <a href="/files/crystal-chiu-resume.pdf"> 
                        <IconLabel icon={faFile} label="Resume" /> 
                    </a> 
                    <a 
                        href="https://github.com/CrystalChiu" 
                        target="_blank" 
                        rel="noreferrer" 
                    > 
                        <IconLabel icon={faGithub} label="GitHub" /> 
                    </a> 
                    <a 
                        href="https://www.linkedin.com/in/crystal-chiu-741658232/" 
                        target="_blank" 
                        rel="noreferrer" 
                    > 
                        <IconLabel icon={faSquareLinkedin} label="LinkedIn" /> 
                    </a>
                </div>
            </div>
        </section>
    );
}
