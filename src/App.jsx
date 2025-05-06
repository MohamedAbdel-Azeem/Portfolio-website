import { useEffect } from "react";
import Header from "./components/header";
import Home from "./components/home";
import Skills from "./components/skills";
import Projects from "./components/projects";
import About from "./components/about";
import "./styles.css";

export default function App() {
  useEffect(() => {
    const handleWheel = (e) => {
      const sections = document.querySelectorAll('section');
      const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
      });

      if (currentSection) {
        const direction = e.deltaY > 0 ? 1 : -1;
        const nextSection = direction > 0 
          ? currentSection.nextElementSibling 
          : currentSection.previousElementSibling;

        if (nextSection) {
          e.preventDefault();
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <main className="relative">
      <Header />
      <div className="sections-container">
        <Home />
        <Skills />
        <Projects />
        <About />
      </div>
    </main>
  );
}
