import { motion } from "motion/react";
import styles from "./Hero.module.css"
import IconLabel from "../../../ui/IconLabel/IconLabel";
import { faMapPin, faFile } from "@fortawesome/free-solid-svg-icons";
import { faSquareLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
    return (
        <motion.section
            id="hero"
            className={styles.content}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.3 } },
            }}
        >
            <motion.div
                className={styles.hero__statement}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { duration: 0.9, ease: [0.3, 1, 0.4, 1] },
                    },
                }}
            >
                <p className="text-subheading">Hello, World.</p>
                <div className={styles.hero__introduction}>
                    <h2 className="text-display-3">I'm</h2>
                    <h1 className={`${styles.hero__name} text-display-2`}>
                        Crystal.
                    </h1>
                </div>
            </motion.div>

            <div className={styles.hero__main}>
                <motion.img
                    src="images/photostrip-480.jpg"
                    srcSet="
                        images/photostrip-480.jpg 480w,
                        images/photostrip-720.jpg 720w
                    "
                    sizes="(max-width: 720px) min(70vw, 240px), 12vw"
                    width={480}
                    height={1450}
                    alt=""
                    className={styles.hero__img}
                    decoding="async"
                    style={{ transformOrigin: "50% 20%" }}
                    whileHover={{
                        rotate: [0, -2.5, 2, -1, 0],
                        y: -4,
                        scale: 1.015,
                        transition: { duration: 0.65, ease: "easeInOut" },
                    }}
                    whileTap={{
                        scale: 0.99,
                        rotate: -1,
                        transition: { duration: 0.15 },
                    }}
                />

                <motion.div
                    className={styles.hero__description}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { duration: 0.9, ease: [0.3, 1, 0.4, 1] },
                        },
                    }}
                >
                    <h1 className="text-display-1">
                        Software Engineer, with really good taste.
                    </h1>
                    <p>
                        I’m looking to become an expert at engineering technically complex, joyful, and humanistic digital experiences.
                    </p>
                </motion.div>
            </div>
            
            <motion.div
                className={styles.hero__details}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { duration: 0.9, ease: [0.3, 1, 0.4, 1] },
                    },
                }}
            >
                <div className={styles.hero__location}>
                    <IconLabel icon={faMapPin} label="Orange, CA" />
                </div>
                <div 
                    className={styles.hero__links}
                    aria-label="Professional Links"
                >
                    <a
                        href="/files/Crystal_Chiu_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open resume preview in a new tab"
                    >
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
            </motion.div>

        </motion.section>
    );
}
