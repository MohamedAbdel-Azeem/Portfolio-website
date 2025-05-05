import React from "react";
import { projects } from "../data";
import DownButton from "./down_button";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 px-10 text-slate-200">
      <div className="flex flex-col items-center justify-center w-full space-y-28">
        <h2 className="text-5xl font-bold text-center">Projects</h2>

        <div className="projects-container flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg bg-slate-300 transition-all duration-300 hover:bg-emerald-400 hover:scale-105 hover:shadow-2xl group"
            >
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-[200px] object-cover"
              />

              <div className="px-6 py-4 h-[200px] flex flex-col justify-between">
                <div>
                  <div className="font-bold text-2xl mb-2 text-slate-800 transition-colors duration-300 group-hover:text-white">
                    {project.name}
                  </div>
                  <p className="text-gray-600 text-base transition-colors duration-300 group-hover:text-white">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {project.languages.map((language) => (
                    <span
                      key={language}
                      className="inline-block bg-slate-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-950 transition-colors duration-300 group-hover:bg-white group-hover:text-emerald-600"
                    >
                      {language}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col items-center space-y-2 mt-4">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 text-xl flex items-center space-x-2 transition-colors duration-300 group-hover:text-white linkAnimation"
                  >
                    <span>Repo</span>
                    <FiExternalLink className="w-6 h-6" />
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 text-xl flex items-center space-x-2 transition-colors duration-300 group-hover:text-white linkAnimation"
                    >
                      <span>Demo</span>
                      <FiExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more">
          <a
            href="https://github.com/MohamedAbdel-Azeem?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-emerald-400 transition-colors duration-300"
          >
            View More
          </a>
        </div>

        <DownButton nextPage="about" />
      </div>
    </section>
  );
}
