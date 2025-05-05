import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["home", "skills", "projects", "about"];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top, height } = section.getBoundingClientRect();
          if (top <= height / 3 && top >= -height + height / 3) {
            setActiveSection(index);
          }
        }
      });

      // Blur effect
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header.style.backdropFilter = "blur(5px)";
      } else {
        header.style.backdropFilter = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 w-full z-[1000] header py-5 flex justify-end px-8">
      <nav className="flex items-center">
        <ul className="flex items-center space-x-4 lg:space-x-8">
          {["Home", "Skills", "Projects", "About"].map((link, index) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`sticky top-0 text-slate-200 text-sm lg:text-xl hover:text-slate-400 cursor-pointer ${
                  activeSection === index ? "active-section-underline" : ""
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
