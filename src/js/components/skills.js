export function createSkills() {
    const skills = document.createElement("section");
    skills.id = "skills";
    skills.classList.add(
      "flex",
      "flex-col",
      "w-full",
      "space-y-4",
      "py-20",
      "px-10"
    );
    const textPart = document.createElement("div");
    textPart.classList.add(
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "space-y-4",
      "text-center"
    );
    const h1 = document.createElement("h1");
  
    h1.classList.add("text-3xl", "font-bold", "lg:text-5xl");
    h1.textContent = "Skills";
    textPart.appendChild(h1);
  
    skills.appendChild(textPart);
    return skills;
  }
  