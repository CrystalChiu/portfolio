import PageLayout from "../components/layout/PageLayout";
import Hero from "../components/sections/home/Hero";
import About from "../components/sections/home/About";
import WorkShowcase from "../components/sections/home/WorkShowcase";
import Experience from "../components/sections/home/Experience";
import Contact from "../components/sections/home/Contact";

export default function Home() {
    return (
        <main>
            <PageLayout>
                <Hero />
                <About />
                <WorkShowcase />
                <Experience />
                <Contact />
            </PageLayout>
        </main>
    );
}