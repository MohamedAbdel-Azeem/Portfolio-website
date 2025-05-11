import { useState, useEffect } from "react";
import DownButton from "./down_button";
import homeImg from "../assets/images/home-img.png";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 900px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="home"
      className="w-full flex flex-col md:flex-row items-center justify-center lg:justify-between px-4 lg:px-28 py-12 text-slate-200 space-y-4"
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <h1 className="text-3xl font-bold lg:text-5xl">
          Hi, I'm{" "}
          <span className="text-4xl lg:text-6xl text-emerald-400">
            Mohamed Abdelazeem
          </span>
        </h1>

        <h2 className="text-2xl lg:text-4xl font-semibold">
          <Typewriter
            options={{
              loop: true,
              strings: [
                "I'm a <span class='text-emerald-400'>Computer Science and Engineering Student</span>",
                "I study at the <span class='text-emerald-400'>German University in Cairo (GUC)</span>",
                "I will graduate in <span class='text-emerald-400'>2026</span>",
                "I'm interested in <span class='text-emerald-400'>Full-Stack Web Development</span>",
                "I'm Also Interested in <span class='text-red-400'>AI and ML !!</span>",
                "I'm Looking for an <span class='text-emerald-500'>Internship !!</span>",
              ],
              autoStart: true,
              deleteSpeed: 60,
              delay: 100,
            }}
          />
        </h2>

        {!isMobile && <DownButton nextPage="skills" />}
      </div>

      <img
        src={homeImg}
        alt="A Vector Image of a Programmer"
        className="transition duration-300 ease-in-out hover:scale-105 w-[35rem] h-auto"
      />

      {isMobile && <DownButton nextPage="skills" />}
    </section>
  );
}
