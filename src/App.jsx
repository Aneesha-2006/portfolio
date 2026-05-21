import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      
      {/* ഓരോ സെക്ഷനും ID നൽകുന്നു */}
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="education"><Education /></div>
      <div id="skills"><Skills /></div>
      <div id="contact"><Contact /></div>
      <div id="footer"><Footer /></div>
    </>
  );
}

export default App;