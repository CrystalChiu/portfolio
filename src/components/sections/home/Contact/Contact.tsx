import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import coil from "../Coil.module.css";
import styles from "./Contact.module.css";
import Divider from "../../../ui/Divider/Divider";

export default function Contact() {
    const phoneImgSrc = "/images/vecteezy_retro-telephone.png";

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contact__heading}>
                <div className={styles.contact__heading__visual}>
                    <div className={`${coil.line} ${styles.coil__transition}`} />
                    <img
                        className={styles.contact__heading__phone_img}
                        src={phoneImgSrc}
                        alt="Illustrated retro telephone"
                    />
                </div>

                <h2 className="text-display-1">Contact Me</h2>
            </div>

            <div className={styles.contact__content}>
                <div className={styles.contact__content__intro}>
                    <p className="text-subheading">Have a question, opportunity, or just want to connect?</p>
                    <p className="text-secondary">Reach me here:</p>
                </div>

                <ul className={styles.contact__content__links}>
                    <li>
                        <a href="mailto:crystchiu@gmail.com">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                aria-hidden="true"
                            />
                            <span className="text-mono-m">
                                crystchiu@gmail.com
                            </span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/CrystalChiu"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                aria-hidden="true"
                            />
                            <span className="text-mono-m">GitHub</span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/in/crystal-chiu-741658232/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faSquareLinkedin}
                                aria-hidden="true"
                            />
                            <span className="text-mono-m">LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>

            <Divider />

            <p className={styles.contact__closing}>
                That's all for now! Back to making the internet a little more interesting. See you again soon.
            </p>

            <div className={styles.contact__signature}>
                <h2 className={styles.contact__signature__signoff}>Always,</h2>
                <h1 className={styles.contact__signature__name}>Crystal Chiu</h1>
            </div>
        </section>
    );
}
