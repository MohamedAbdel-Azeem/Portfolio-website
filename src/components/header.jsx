import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const sections = ["home", "skills", "projects", "about"];

  useEffect(() => {
    // Update scroll state for blur effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Set up Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const index = sections.indexOf(sectionId);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    const handleSectionClick = (e, sectionId) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        const index = sections.indexOf(sectionId);
        if (index !== -1) {
          setActiveSection(index);
        }
      }
    };

    // Add click handlers to navigation links
    sections.forEach(sectionId => {
      const link = document.querySelector(`a[href="#${sectionId}"]`);
      if (link) {
        link.addEventListener('click', (e) => handleSectionClick(e, sectionId));
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      // Clean up click handlers
      sections.forEach(sectionId => {
        const link = document.querySelector(`a[href="#${sectionId}"]`);
        if (link) {
          link.removeEventListener('click', (e) => handleSectionClick(e, sectionId));
        }
      });
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-[1000] py-3 md:py-5 flex justify-end px-4 md:px-8 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/30 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center">
        <ul className="flex items-center space-x-2 md:space-x-4 lg:space-x-8">
          {["Home", "Skills", "Projects", "About"].map((link, index) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`relative text-slate-200 text-xs md:text-sm lg:text-xl hover:text-emerald-400 cursor-pointer transition-colors duration-300 ${
                  activeSection === index ? 'text-emerald-400' : ''
                }`}
              >
                {link}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400 transform origin-left transition-transform duration-300 ${
                  activeSection === index ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
