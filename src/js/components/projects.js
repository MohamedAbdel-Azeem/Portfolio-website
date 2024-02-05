import { projects } from '../data.js';
import {createDownButton} from "./down-button.js";

export function createProjects(){
    const sectionContainer = document.createElement('section');
    sectionContainer.id = 'projects';
    sectionContainer.classList.add(
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "w-full",
        "space-y-28",
        "py-20",
        "px-10",
        "text-slate-200",
    );


    const heading = document.createElement('h2');
    heading.classList.add('text-5xl', 'font-bold', 'text-center');
    heading.textContent = 'Projects';


    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add( 
        "projects-container" /*In the Styles.css*/ 
    );

    projects.forEach((projectElement) => {
        projectsContainer.appendChild(renderProject(projectElement));
    });

    sectionContainer.appendChild(heading);
    sectionContainer.appendChild(projectsContainer);
    sectionContainer.appendChild(createDownButton('home'));
    return sectionContainer;
}


function renderProject(project){
    const ProjectItem = document.createElement('div');
    ProjectItem.classList.add("project-card");

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('flex', 'flex-col',"mt-2", 'justify-center',"items-center", 'space-y-2');

    const projectName = document.createElement('h3');
    projectName.classList.add('text-2xl', 'font-bold');
    projectName.textContent = project.name;

    const projectImage = document.createElement('img');
    projectImage.src = project.imageUrl;
    projectImage.alt = project.name;
    projectImage.classList.add('w-72', 'h-auto');

    const projectDescription = document.createElement('p');
    projectDescription.classList.add('text-center',"text-lg");
    projectDescription.textContent = project.description;

    const projectLanguages = document.createElement('span');
    projectLanguages.textContent = project.languages;

    const projectLinks = document.createElement('div');
    projectLinks.classList.add('flex', 'flex-row', 'space-x-4');
    const repoLink = document.createElement('a');
    repoLink.href = project.repo;
    repoLink.target = '_blank';
    repoLink.textContent = 'Repo';
    const demoLink = document.createElement('a');
    demoLink.href = project.demo;
    demoLink.target = '_blank';
    demoLink.textContent = 'Demo';

    projectLinks.appendChild(repoLink);
    projectLinks.appendChild(demoLink);

    projectContainer.appendChild(projectName);
    projectContainer.appendChild(projectDescription);
    projectContainer.appendChild(projectLanguages);
    projectContainer.appendChild(projectLinks);

    ProjectItem.appendChild(projectImage);
    ProjectItem.appendChild(projectContainer);

    return ProjectItem;
}