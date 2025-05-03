import Typewriter from "typewriter-effect/dist/core";
import {createDownButton} from "./down-button.js";

const homeImg = require("../../assets/images/home-img.png").default;



export function createHome() {
  const home = document.createElement("section");
  home.id = "home";
  home.classList.add(
    "w-full",
    "flex",
    "flex-col",
    "md:flex-row",
    "items-center",
    "justify-center",
    "lg:justify-between",
    "px-4",
    "lg:px-28",
    "py-12",
    "text-slate-200",
    "space-y-4"
  );
  

  const textPart = document.createElement("div");
  textPart.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "space-y-8",
    "text-center"
  );
  const imgPart = document.createElement("img");
  imgPart.classList.add(
    "transition",
    "duration-300",
    "ease-in-out",
    "hover:scale-105",
    "w-[35rem]",
    "h-auto"
  );
  imgPart.src = homeImg;
  imgPart.alt = "A Vector Image of a Programmer";

  const h1 = document.createElement("h1");
  h1.classList.add("text-3xl", "font-bold", "lg:text-5xl");
  h1.textContent = "Hi, I'm ";

  const span = document.createElement("span");
  span.classList.add("text-4xl", "lg:text-6xl", "text-emerald-400");
  span.textContent = "Mohamed Abdelazeem";

  h1.appendChild(span);

  textPart.appendChild(h1);

  const heading2 = document.createElement("h2");
  heading2.classList.add("text-2xl", "lg:text-4xl", "font-semibold");
  
  const typewriterTexts = [
    { text: "I'm a <span class='text-emerald-400'>Computer Science and Engineering Student</span>", displayTime: 4000 },
    { text: "I study at the <span class='text-emerald-400'>German University in Cairo (GUC)</span>", displayTime: 3500 },
    { text: "I will graduate in <span class='text-emerald-400'>2026</span>", displayTime: 3000 },
    { text: "I'm interested in <span class='text-emerald-400'>Full-Stack Web Development</span>", displayTime: 4000 },
    { text: "I'm Also Interested in <span class='text-red-400'>AI and ML !!</span>", displayTime: 3500 },
    { text: "I'm Looking for an <span class='text-emerald-500'>Internship !!</span>", displayTime: 5000 }
  ];

  const typewriter = new Typewriter(heading2, {
    loop: true,
  });

  
  typewriterTexts.forEach((item, index) => {
    if (index > 0) {
      // Calculate the length of the previous text to delete
      const prevText = typewriterTexts[index - 1].text;
      const textLength = prevText.replace(/<[^>]*>/g, '').length;
      typewriter.deleteChars(textLength);
    }
    
    typewriter
      .typeString(item.text)
      .pauseFor(item.displayTime);
  });

  typewriter.start();

  textPart.appendChild(heading2);

  home.appendChild(textPart);
  home.appendChild(imgPart);


  if (window.matchMedia("(max-width: 900px)").matches) {
    // for smaller screens, The Button is Below the Image
    home.appendChild(createDownButton("skills"));
  } else {
    // for larger screens ,The Button is below the Text Area
    const downButton = createDownButton("skills");
    downButton.classList.add("pt-16");
    textPart.appendChild(downButton);
  }

  return home;
}
