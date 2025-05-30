import myImage from "../assets/images/me.jpg";
import githubLogo from "../assets/images/contacts/github.png";
import linkedinLogo from "../assets/images/contacts/linkedin.png";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-start w-full space-y-28 py-20 px-10 text-slate-200 about-gradient"
    >
      <h2 className="text-3xl font-bold text-slate-200 mb-8">About</h2>

      <div className="flex md:flex-row flex-col items-center justify-center w-full md:justify-evenly space-y-8">
        <img src={myImage} alt="Me" className="w-72 rounded-full shadow-lg" />
        <p className="text-slate-200 text-lg md:text-xl text-center px-6 md:w-96">
          I’m a Computer Science and Engineering student at the German
          University in Cairo, expected to graduate in 2026. I’m passionate
          about building and developing web applications, and I’m always eager
          to grow, improve, and explore new technologies. I bring dedication,
          curiosity, and a constant drive to learn to every project I work on
        </p>
      </div>

      <div className="flex flex-row items-center justify-center px-3 py-2 space-x-4 shadow-xl border-2 border-indigo-900 bg-slate-300 rounded-lg">
        <a
          href="https://github.com/MohamedAbdel-Azeem"
          target="_blank"
          rel="noopener noreferrer"
          className="linkAnimation"
        >
          <img src={githubLogo} alt="github logo" className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-abdelazeem-098086244/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkAnimation"
        >
          <img src={linkedinLogo} alt="linkedin logo" className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
