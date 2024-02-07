import { projects } from "../data.js";
import { createDownButton } from "./down-button.js";
import linkIcon from "../../assets/images/link.png";

export function createProjects() {
  const section = document.createElement("section");
  section.id = "projects";

  const sectionContainer = document.createElement("div");

  sectionContainer.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "w-full",
    "space-y-28",
    "py-20",
    "px-10",
    "text-slate-200"
  );

  const heading = document.createElement("h2");
  heading.classList.add("text-5xl", "font-bold", "text-center");
  heading.textContent = "Projects";

  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("projects-container"); /*In the Styles.css*/

  projects.forEach((projectElement, index) => {
    const renderedProject = renderProject(projectElement);
    projectsContainer.appendChild(renderedProject);
  });

  sectionContainer.appendChild(heading);
  sectionContainer.appendChild(projectsContainer);
  sectionContainer.appendChild(viewMore());
  sectionContainer.appendChild(createDownButton("about"));

  section.appendChild(sectionContainer);
  return section;
}



function renderProject(project) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add(
    "max-w-sm",
    "rounded",
    "overflow-hidden",
    "shadow-lg",
    "bg-slate-300",
    "pb-4"
  );

  projectContainer.style.paddingBottom = "25px";

  const projectImage = document.createElement("img");
  projectImage.classList.add("w-full", "h-[40%]");
  projectImage.src = project.imageUrl;
  projectImage.alt = project.name;

  projectContainer.appendChild(projectImage);

  const projectInfo = document.createElement("div");
  projectInfo.classList.add("px-6", "py-4");

  const projectName = document.createElement("div");
  projectName.classList.add("font-bold", "text-2xl", "mb-2", "text-slate-800");
  projectName.textContent = project.name;

  const projectDescription = document.createElement("p");
  projectDescription.classList.add("text-gray-600", "text-base");
  projectDescription.textContent = project.description;

  projectInfo.appendChild(projectName);
  projectInfo.appendChild(projectDescription);

  projectContainer.appendChild(projectInfo);

  const projectLanguagesContainer = document.createElement("div");
  projectLanguagesContainer.classList.add(
    "px-6",
    "pt-4",
    "pb-2",
    "flex",
    "flex-wrap",
    "justify-center",
    "md:justify-evenly"
  );

  project.languages.forEach((language) => {
    const projectLanguage = document.createElement("span");
    projectLanguage.classList.add(
      "inline-block",
      "bg-slate-400",
      "rounded-full",
      "px-3",
      "py-1",
      "text-sm",
      "font-semibold",
      "text-gray-950",
      "mr-2",
      "mb-2"
    );
    projectLanguage.textContent = language;
    projectLanguagesContainer.appendChild(projectLanguage);
  });

  projectContainer.appendChild(projectLanguagesContainer);

  const projectLinksContainer = document.createElement("div");
  projectLinksContainer.classList.add(
    "px-6",
    "py-4",
    "flex",
    "flex-col",
    "items-center",
    "space-y-2"
  );

  const repoLink = document.createElement("a");
  repoLink.classList.add(
    "text-gray-700",
    "text-xl",
    "flex",
    "items-center",
    "space-x-2",
    "hover:text-indigo-900",
    "linkAnimation"
  );
  repoLink.href = project.repo;
  repoLink.target = "_blank";

  const repoLinkIcon = document.createElement("img");
  repoLinkIcon.src = linkIcon;
  repoLinkIcon.classList.add("w-6", "h-6", "mr-2");
  repoLinkIcon.alt = "link Icon";

  const repoLinkSpan = document.createElement("span");
  repoLinkSpan.textContent = "Repo";

  repoLink.appendChild(repoLinkSpan);
  repoLink.appendChild(repoLinkIcon);

  projectLinksContainer.appendChild(repoLink);

  if (project.demo) {
    const demoLink = document.createElement("a");
    demoLink.classList.add(
      "text-gray-700",
      "text-xl",
      "flex",
      "items-center",
      "space-x-2",
      "hover:text-indigo-900",
      "linkAnimation"
    );
    demoLink.href = project.demo;
    demoLink.target = "_blank";

    const demoLinkIcon = document.createElement("img");
    demoLinkIcon.src = linkIcon;
    demoLinkIcon.classList.add("w-6", "h-6", "mr-2");
    demoLinkIcon.alt = "link Icon";

    const demoLinkSpan = document.createElement("span");
    demoLinkSpan.textContent = "Demo";

    demoLink.appendChild(demoLinkSpan);
    demoLink.appendChild(demoLinkIcon);

    projectLinksContainer.appendChild(demoLink);
  }

  projectContainer.appendChild(projectLinksContainer);

  return projectContainer;
}


function viewMore(){
    const container = document.createElement("div");
    container.classList = "view-more";
    

    const anchor = document.createElement("a");
    anchor.href = "https://github.com/MohamedAbdel-Azeem?tab=repositories";
    anchor.target = "_blank";
    anchor.textContent = "View More";
    container.appendChild(anchor);
    
    return container;
}

