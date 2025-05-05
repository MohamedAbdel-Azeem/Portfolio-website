import Header from "./components/header";
import Home from "./components/home";
import Skills from "./components/skills";
import Projects from "./components/projects";
import About from "./components/about";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <About />
    </main>
  );
}
