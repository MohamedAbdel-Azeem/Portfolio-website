import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { skills } from "../data";
import DownButton from "./down_button";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export default function Skills() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="skills"
      className="flex flex-col w-full space-y-28 py-20 px-20 text-slate-200"
    >
      <h2 className="text-5xl font-bold text-center">Skills</h2>

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
                  spaceBetween={1}
                  slidesPerView={5}
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
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                  }}
                  className="w-full max-w-[1200px] mx-auto"
                >
                  {skills.map((skill) => (
                    <SwiperSlide key={skill.name}>
                      <motion.div
                        layout
                        className="w-[200px] h-[200px] flex flex-col items-center justify-center bg-slate-900 rounded-xl shadow-lg transition-colors duration-300 hover:bg-slate-300 p-4 group mx-auto mb-5"
                      >
                        <div className="w-[120px] h-[120px] flex items-center justify-center">
                          <img
                            src={skill.imageUrl}
                            alt={skill.name}
                            className="w-full h-full object-contain transition-colors duration-300"
                          />
                        </div>
                        <span className="text-lg font-bold mt-4 text-slate-200 transition-colors duration-300 group-hover:text-slate-900">
                          {skill.name}
                        </span>
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
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-[1200px] mx-auto"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="w-[200px] h-[200px] flex flex-col items-center justify-center bg-slate-900 rounded-xl shadow-lg transition-all duration-300 hover:bg-slate-300 p-4 group mx-auto"
                  >
                    <div className="w-[120px] h-[120px] flex items-center justify-center">
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className="w-full h-full object-contain transition-colors duration-300"
                      />
                    </div>
                    <span className="text-lg font-bold mt-4 text-slate-200 transition-colors duration-300 group-hover:text-slate-900">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-8 mx-auto flex items-center gap-2 px-6 py-2 bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors duration-300"
          >
            <span>{expanded ? "Collapse" : "Expand All"}</span>
            <FiChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </LayoutGroup>

      <DownButton nextPage="projects" />
    </section>
  );
}
