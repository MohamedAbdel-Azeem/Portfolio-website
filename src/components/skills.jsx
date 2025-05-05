import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { skills } from "../data";
import DownButton from "./down_button";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col w-full space-y-28 py-20 px-20 text-slate-200"
    >
      <h2 className="text-5xl font-bold text-center">Skills</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={1}
        slidesPerView={5}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-[1200px] mx-auto"
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.name}>
            <div className="w-[200px] h-[200px] flex flex-col items-center justify-center bg-slate-900 rounded-xl shadow-lg transition-colors duration-300 hover:bg-slate-300 p-4 group mx-auto">
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <DownButton nextPage="projects" />
    </section>
  );
}
