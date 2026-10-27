import PageLayout from "../components/layout/PageLayout";
import Divider from "../components/ui/Divider/Divider";
import styles from "./Credits.module.css";

type Credit = {
    label: string;
    url: string;
    linkText: string;
};

const CREDITS: readonly Credit[] = [
    {
        label: "Retro Phone illustration",
        url: "https://www.vecteezy.com/free-vector/retro-phone",
        linkText: "Retro Phone Vectors by Vecteezy",
    },
];

export default function Credits() {
    return (
        <main>
            <PageLayout className={styles.credits}>
                <h1 className="text-display-2">Credits</h1>

                <Divider />

                <ul className={styles.credits__list}>
                    {CREDITS.map((credit) => (
                        <li key={credit.url}>
                            <a
                                href={credit.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {credit.linkText}
                            </a>
                        </li>
                    ))}
                </ul>
            </PageLayout>
        </main>
    );
}
