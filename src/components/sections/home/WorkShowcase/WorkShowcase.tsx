import styles from "./WorkShowcase.module.css"

export default function WorkShowcase() {
    return (
        <section id="work" className={styles.content}>
            <div className={styles.work__intro}>
                <h2 className="text-display-2">Work Showcase</h2>
                <p>A collection of projects that showcase my approach to software engineering, design, and problem-solving. Select a project to explore its story, technical implementation, and the decisions behind it.</p>
            </div>
        </section>
    )
}