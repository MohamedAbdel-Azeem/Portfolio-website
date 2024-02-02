import Typewriter from "typewriter-effect/dist/core";

const homeImg = require("../../assets/images/home-img.png").default;

export function createHome() {
    const home = document.createElement("section");
    home.id = "home";
    home.classList.add(
        "w-full",
        "flex",
        "flex-col",
        "lg:flex-row",
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
    textPart.classList.add("flex", "flex-col", "items-center", "justify-center" , "space-y-4");
    const imgPart = document.createElement("img");
    imgPart.src = homeImg;

    const h1 = document.createElement("h1");
    h1.classList.add("text-3xl", "font-bold", "lg:text-5xl");
    h1.textContent = "Hi, I'm ";

    const span = document.createElement("span");
    span.classList.add("text-4xl", "lg:text-6xl" , "text-emerald-400");
    span.textContent = "Mohamed Abdelazeem";

    h1.appendChild(span);

    textPart.appendChild(h1);

    const heading3 = document.createElement("h3");
    heading3.classList.add("text-2xl", "lg:text-4xl", "font-semibold");
    const typewriter = new Typewriter(heading3, {
        loop: true,
    });
    
    typewriter.typeString("I'm a ")
        .pauseFor(300)
        .typeString("<span class='text-emerald-400'>Student</span>")
        .pauseFor(1000)
        .deleteChars(9)
        .typeString("Learning <span class='text-emerald-400'>Full-Stack Web Development</span>")
        .pauseFor(5000)
        .start();

    textPart.appendChild(heading3);
    

    home.appendChild(textPart);
    home.appendChild(imgPart);
    return home;
}
