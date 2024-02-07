import myImage from "../../assets/images/me.jpg";
import githubLogo from "../../assets/images/contacts/github.png";
import linkedinLogo from "../../assets/images/contacts/linkedin.png";

export function createAbout() {
    const aboutSection = document.createElement("section");
    aboutSection.id = "about";
    aboutSection.classList.add(
        "flex",
        "flex-col",
        "items-center",
        "justify-start",
        "w-full",
        "space-y-28",
        "py-20",
        "px-10",
        "text-slate-200",
        "about-gradient"
    );

    const title = document.createElement("h2");
    title.textContent = "About";
    title.classList.add("text-3xl", "font-bold", "text-slate-200", "mb-8");

    aboutSection.appendChild(title);

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add(
        "flex",
        "md:flex-row",
        "flex-col",
        "items-center",
        "justify-center",
        "w-full",
        "md:justify-evenly",
        "space-y-8",
    );

    const aboutImage = document.createElement("img");
    aboutImage.src = myImage;
    aboutImage.alt = "Me";

    aboutImage.classList.add("w-72", "rounded-full", "shadow-lg");

    const aboutText = document.createElement("p");
    aboutText.textContent =
        "I am a Computer Science and Engineering Student in the German University in Cairo who is expected to graduate in 2026 with a passion for creating and developing web applications. I am a very passionate and dedicated person who is always looking to improve and learn new things.";
    aboutText.classList.add("text-slate-200", "text-lg","md:text-xl", "text-center", "px-6", "md:w-96");
    
    
    aboutContainer.appendChild(aboutImage);
    aboutContainer.appendChild(aboutText);

    const contactContainer = document.createElement("div");
    contactContainer.classList.add(
        "flex",
        "flex-row",
        "items-center",
        "justify-center",
        "px-3",
        "py-2",
        "space-x-4",
        "shadow-xl",
        "border",
        "border-2",
        "border-indigo-900",
        "bg-slate-300",
        "rounded-lg"
    );

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/MohamedAbdel-Azeem";
    githubLink.target = "_blank";
    githubLink.innerHTML = `<img src="${githubLogo}" alt="github logo" class="w-6 h-6">`;
    githubLink.classList.add("linkAnimation");

    const linkedinLink = document.createElement("a");
    linkedinLink.href = "https://www.linkedin.com/in/mohamed-abdelazeem-098086244/";
    linkedinLink.target = "_blank";
    linkedinLink.innerHTML = `<img src="${linkedinLogo}" alt="github logo" class="w-6 h-6">`;
    linkedinLink.classList.add("linkAnimation");


    contactContainer.appendChild(githubLink);
    contactContainer.appendChild(linkedinLink);

    

    aboutSection.appendChild(aboutContainer);
    aboutSection.appendChild(contactContainer);

    return aboutSection;
}
