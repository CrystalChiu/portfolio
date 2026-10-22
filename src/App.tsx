import { Routes, Route } from "react-router";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

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
      </Routes>
    </>
  );
}