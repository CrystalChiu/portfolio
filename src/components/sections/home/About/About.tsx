import { useState } from "react";
import styles from "./About.module.css"
import Divider from "../../../ui/Divider/Divider"
import { SkillsCard } from "./SkillsCard/SkillsCard"
import { aboutContent } from "../../../../content/about"
import { Link } from "react-router";
import IconLabel from "../../../ui/IconLabel/IconLabel";
import { faChevronDown, faHighlighter } from "@fortawesome/free-solid-svg-icons";
import { TextHighlighter } from "../../../fancy/text/text-highlighter";
import ScrollReveal from "./ScrollReveal";

const highlightedBioPhrases = new Set([
    "outlet for creative expression",
    "desire for creating practical solutions",
    "digital craftsmanship",
    "how I approach my work",
    "learning from teams who manage larger, more complex systems",
    "technical rigor", 
    "creativity",
    "user empathy",
]);

const bioHighlightPattern = new RegExp(
    `(${[...highlightedBioPhrases]
        .map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|")})`,
);

const sharedScrollRevealProps = {
    mode: "scrub",
    splitBy: "words",
    stagger: 0.3,
    baseOpacity: 0.1,
    baseRotation: 1,
    enableBlur: true,
    blurStrength: 4,
} as const;

function renderBioParagraph(paragraph: string, areHighlightsEnabled: boolean) {
    return paragraph.split(bioHighlightPattern).map((segment, index) => {
        if (!highlightedBioPhrases.has(segment)) {
            return segment;
        }

        if (!areHighlightsEnabled) {
            return <span key={`${segment}-${index}`}>{segment}</span>;
        }

        return (
            <TextHighlighter
                key={`${segment}-${index}`}
                highlightColor="var(--color-highlight)"
                triggerType="auto"
                direction="ltr"
            >
                {segment}
            </TextHighlighter>
        );
    });
}


export default function About() {
    const [areHighlightsEnabled, setAreHighlightsEnabled] = useState(true);

    const scrollToContact = () => {
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="about" className={styles.content}>
            <Divider />
            
            <div className={styles.about_content}>
                <ScrollReveal
                    as="h1"
                    effect="fade"
                    textClassName="text-display-2"
                    {...sharedScrollRevealProps}
                >
                    About Me
                </ScrollReveal>

                {/* My Story */}
                <div className={styles.about__bio}>
                    <div className={styles.about__bio_header}>
                        <ScrollReveal
                            as="h2"
                            effect="rise"
                            baseOffset={8}
                            {...sharedScrollRevealProps}
                        >
                            My Story
                        </ScrollReveal>
                        <button
                            type="button"
                            className={`${styles.highlight_toggle} ${
                                areHighlightsEnabled
                                    ? styles.highlight_toggle_active
                                    : ""
                            }`}
                            aria-pressed={areHighlightsEnabled}
                            onClick={() =>
                                setAreHighlightsEnabled((isEnabled) => !isEnabled)
                            }
                        >
                            <IconLabel
                                icon={faHighlighter}
                                label={
                                    areHighlightsEnabled ?
                                    "On" :
                                    "Off"
                                }
                            />
                        </button>
                    </div>

                    <div className={styles.about__bio_content}>
                        {
                            aboutContent.bio.split("\n\n").map((paragraph, index) => (
                                <ScrollReveal
                                    key={index}
                                    as="p"
                                    effect="rise"
                                    baseOffset={12}
                                    {...sharedScrollRevealProps}
                                >
                                    {renderBioParagraph(
                                        paragraph,
                                        areHighlightsEnabled,
                                    )}
                                </ScrollReveal>
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
                                <p className="text-mono-s text-tertiary">{credential.date}</p>
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
                        <Link
                            to="/#contact"
                            className={styles["about__skills-contact"]}
                            onClick={scrollToContact}
                        >
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
