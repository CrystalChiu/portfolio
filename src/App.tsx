import Navbar from "./components/layout/Navbar";
import PageLayout from "./components/layout/PageLayout";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <PageLayout>
          <section id="about">
            <h1>About</h1>
            <p>This is where the portfolio begins.</p>
          </section>

          <section id="work">
            <h2>Work Showcase</h2>
          </section>

          <section id="experience">
            <h2>Experience</h2>
          </section>

          <section id="contact">
            <h2>Contact</h2>
          </section>
        </PageLayout>
      </main>
    </>
  );
}