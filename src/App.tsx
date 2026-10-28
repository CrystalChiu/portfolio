import { Routes, Route } from "react-router";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Credits from "./pages/Credits";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
      <Navbar />

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
    </>
  );
}
