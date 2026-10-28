import { useEffect } from "react";
import { useLocation } from "react-router";
import PageLayout from "../components/layout/PageLayout";
import Hero from "../components/sections/home/Hero/Hero";
import About from "../components/sections/home/About/About";
import WorkShowcase from "../components/sections/home/WorkShowcase/WorkShowcase";
import Experience from "../components/sections/home/Experience/Experience";
import Contact from "../components/sections/home/Contact/Contact";
import FadeIn from "../components/ui/FadeIn/FadeIn";

export default function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, [hash]);

    return (
        <main>
            <PageLayout>
                <Hero />
                <FadeIn>
                    <About />
                </FadeIn>
                <FadeIn>
                    <WorkShowcase />
                </FadeIn>
                <FadeIn>
                    <Experience />
                </FadeIn>
                <FadeIn>
                    <Contact />
                </FadeIn>
            </PageLayout>
        </main>
    );
}
