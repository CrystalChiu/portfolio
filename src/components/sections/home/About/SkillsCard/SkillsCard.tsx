import styles from "./SkillsCard.module.css"

type SkillsCardProps = {
    title: string;
    skills: readonly string[];
};

export function SkillsCard({ title, skills }: SkillsCardProps) {
    return (
        <article className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.list}>
                {skills.map((skill) => (
                    <li key={skill} className={styles.item}>
                        {skill}
                    </li>
                ))}
            </ul>
        </article>
    );
}
