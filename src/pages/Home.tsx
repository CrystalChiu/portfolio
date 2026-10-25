import PageLayout from "../components/layout/PageLayout";
import Hero from "../components/sections/home/Hero/Hero";
import About from "../components/sections/home/About/About";
import WorkShowcase from "../components/sections/home/WorkShowcase/WorkShowcase";
import Experience from "../components/sections/home/Experience/Experience";
import Contact from "../components/sections/home/Contact/Contact";

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