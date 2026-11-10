import { Routes, Route } from "react-router";
import { MotionConfig } from "motion/react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Credits from "./pages/Credits";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/layout/ScrollToTop";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />

      <ScrollToTop />
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/projects/:slug" 
          element={<ProjectDetails />}
        />
        <Route 
          path="/projects" 
          element={<Projects />} 
        />
        <Route 
          path="/credits" 
          element={<Credits />} 
        />
      </Routes>

      <Footer />
    </MotionConfig>
  );
}
