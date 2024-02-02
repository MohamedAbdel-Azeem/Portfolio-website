import Typewriter from "typewriter-effect/dist/core";

export function createHome() {
    const home = document.createElement("section");
    home.id = "home";
    home.classList.add(
        "flex",
        "flex-col",
        "lg:flex-row",
        "items-center",
        "justify-between",
        "lg:justify-between",
        "lg:px-16",
        "text-slate-200",
        "space-y-4"
    );

    const textPart = document.createElement("div");
    const imgPart = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.classList.add("text-5xl", "font-bold", "lg:text-6xl");
    h1.textContent = "Hi, I'm John Doe";

    textPart.appendChild(h1);

    const typewriter = new Typewriter(h1, {
        loop: true,
    });
    
    typewriter.typeString('Hello from JavaScript!')
        .pauseFor(2500)
        .deleteAll()
        .start();

    home.appendChild(textPart);
    home.appendChild(imgPart);
    return home;
}
