import Glide from "@glidejs/glide";
import GlideCoreStyles from "../../glide.core.min.css";
import { skills } from "../data.js";
import { createDownButton } from "./down-button.js";

export function createSkills() {
  const skillsContainer = document.createElement("section");
  skillsContainer.id = "skills";
  skillsContainer.classList.add(
    "flex",
    "flex-col",
    "w-full",
    "space-y-28",
    "py-20",
    "px-20",
    "text-slate-200"
  );

  const heading = document.createElement("h2");
  heading.classList.add("text-5xl", "font-bold", "text-center");
  heading.textContent = "Skills";
  skillsContainer.appendChild(heading);

  skillsContainer.appendChild(glidingSkills());
  skillsContainer.appendChild(createDownButton("projects"));
  return skillsContainer;
}

function glidingSkills() {
  const container = document.createElement("div");

  if (window.matchMedia("(max-width: 900px)").matches) {
    // for smaller screens, The View is above the controls
    container.innerHTML = `<div class="glide flex flex-col space-y-5">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
      </ul>
    </div>
    <div class="glide__arrows flex flex-row justify-center items-center space-x-6" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<"></button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">"></button>
    </div>
  </div>`;
  } else {
    // for larger screens ,The View is between the controls
    container.innerHTML = `<div class="glide">
      <div class="glide__arrows flex justify-center items-center space-x-6" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
        <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
        </ul>
        </div>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">"></button>
      </div>
    </div>`;
  }

  const glideListContainer = container.querySelector(".glide__slides");

  skills.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.classList.add(
      "min-w-40",
      "min-h-40",
      "lg:w-40",
      "lg:h-48",
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "bg-slate-900",
      "rounded-xl",
      "shadow-lg"
    );

    const skillIcon = document.createElement("img");
    skillIcon.src = skill.imageUrl;
    skillIcon.alt = skill.name;
    skillIcon.classList.add("w-16", "h-16");
    skillItem.appendChild(skillIcon);

    const skillName = document.createElement("span");
    skillName.classList.add("text-lg", "font-bold", "mt-4");
    skillName.textContent = skill.name;
    skillItem.appendChild(skillName);

    glideListContainer.appendChild(skillItem);
  });

  window.addEventListener("load", () => {
    document.querySelector(".glide__arrow--left").innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#cbd5e1">
    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
    </svg>
    `;

    document.querySelector(".glide__arrow--right").innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#cbd5e1">
    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
    </svg>
    `;

    const glideConfig = {
      type: "carousel",
      perView: 3,
      autoplay: 2500,
      hoverpause: true,
      peek: { before: 100, after: 100 },
      pagination: {
        el: ".glide__bullets",
      },
      breakpoints: {
        800: {
          perView: 1,
          peek: { before: 0, after: 0 },
        },
      },
    };

    new Glide(".glide", glideConfig).mount();
  });
  return container;
}
