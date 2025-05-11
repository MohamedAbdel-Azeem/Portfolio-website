import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { projects } from "../data";
import DownButton from "./down_button";
import { FiExternalLink, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="projects" className="w-full py-20 px-10 text-slate-200">
      <div className="flex flex-col h-full">
        <h2 className="text-5xl font-bold text-center mb-8">Projects</h2>

        <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0">
          <LayoutGroup>
            <div className="relative">
              <AnimatePresence initial={false}>
                {!expanded && (
                  <motion.div
                    key="carousel"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Swiper
                      modules={[Autoplay, Scrollbar]}
                      spaceBetween={30}
                      slidesPerView={3}
                      autoplay={{ delay: 2500, disableOnInteraction: false }}
                      loop={true}
                      scrollbar={{
                        hide: false,
                        draggable: true,
                        snapOnRelease: true,
                        dragSize: "auto",
                      }}
                      breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                      }}
                      className="w-full max-w-[1200px] mx-auto pb-16"
                    >
                      {projects.map((project) => (
                        <SwiperSlide key={project.name}>
                          <motion.div
                            layout
                            className="w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg bg-slate-300 transition-all duration-300 hover:bg-slate-800/80 hover:shadow-2xl group mx-auto mb-6"
                          >
                            <div className="relative">
                              <img
                                src={project.imageUrl}
                                alt={project.name}
                                className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="px-6 py-4 h-[200px] flex flex-col justify-between">
                              <div>
                                <div className="font-bold text-2xl mb-2 text-slate-800 group-hover:text-slate-200">
                                  {project.name}
                                </div>
                                <p className="text-gray-600 text-base group-hover:text-slate-300">
                                  {project.description}
                                </p>
                              </div>

                              <div className="flex flex-wrap justify-center gap-2 mt-4">
                                {project.languages.map((language) => (
                                  <span
                                    key={language}
                                    className="inline-block bg-slate-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-950 group-hover:bg-slate-700 group-hover:text-slate-200"
                                  >
                                    {language}
                                  </span>
                                ))}
                              </div>

                              <div className="flex flex-col items-center space-y-2 mt-4 pb-4">
                                <a
                                  href={project.repo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-700 text-xl flex items-center space-x-2 transition-colors duration-300 group-hover:text-white linkAnimation"
                                >
                                  <span>Repo</span>
                                  <FiExternalLink className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
                                </a>

                                {project.demo && (
                                  <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 text-xl flex items-center space-x-2 transition-colors duration-300 group-hover:text-white linkAnimation"
                                  >
                                    <span>Demo</span>
                                    <FiExternalLink className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto pb-8"
                  >
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.name}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg bg-slate-300 transition-all duration-300 hover:bg-slate-800/80 hover:shadow-2xl group mx-auto"
                      >
                        <div className="relative">
                          <img
                            src={project.imageUrl}
                            alt={project.name}
                            className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <div className="px-6 py-4 h-[200px] flex flex-col justify-between">
                          <div>
                            <div className="font-bold text-2xl mb-2 text-slate-800 group-hover:text-slate-200">
                              {project.name}
                            </div>
                            <p className="text-gray-600 text-base group-hover:text-slate-300">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {project.languages.map((language) => (
                              <span
                                key={language}
                                className="inline-block bg-slate-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-950 group-hover:bg-slate-700 group-hover:text-slate-200"
                              >
                                {language}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-col items-center space-y-2 mt-4 pb-4">
                            <a
                              href={project.repo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-700 text-xl flex items-center space-x-2 transition-colors duration-300 group-hover:text-white linkAnimation"
                            >
                              <span>Repo</span>
                              <FiExternalLink className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
                            </a>

                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 text-xl flex items-center space-x-2 transition-colors duration-300 group-hover:text-white linkAnimation"
                              >
                                <span>Demo</span>
                                <FiExternalLink className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </LayoutGroup>
        </div>
<button
                onClick={() => setExpanded(!expanded)}
                className="mt-8 mx-auto flex items-center gap-2 px-6 py-2 bg-violet-900 rounded-lg hover:bg-violet-950 hover:shadow-lg hover:cursor-pointer transition-colors duration-300"
              >
                <span>{expanded ? "Collapse" : "Expand All"}</span>
                <FiChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expanded ? "rotate-180" : ""
                  }`}
                />
              </button>
        <DownButton nextPage="about" />
      </div>
    </section>
  );
}
