import { head } from "lodash";

export function createHeader() {
  const header = document.createElement("header");
  header.classList.add(
    "sticky",
    "top-0",
    "w-full",
    "z-[1000]",
    "header",
    "py-7",
    "flex",
    "justify-end",
    "px-8"
  );

  const nav = document.createElement("nav");
  nav.classList.add("flex", "items-center");

  const links = ["Home", "Skills", "Projects", "About", "Contact"];
  const ul = document.createElement("ul");
  ul.classList.add("flex", "items-center", "space-x-4", "lg:space-x-8");

  links.forEach((link, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${link.toLowerCase()}`;
    a.textContent = link;
    a.classList.add(
      "sticky",
      "top-0",
      "text-slate-200",
      "text-sm",
      "lg:text-xl",
      "hover:text-slate-400",
      "cursor-pointer"
    );

    if (index === 0) a.classList.add("active-section-underline");

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  header.appendChild(nav);



  underlineCurrentSection();
  blurOnScroll(header);

  return header;
}

function underlineCurrentSection() {
  window.addEventListener("scroll", function () {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop - sectionHeight / 3 &&
        window.scrollY < sectionTop + sectionHeight - sectionHeight / 3
      ) {
        links.forEach((link) =>
          link.classList.remove("active-section-underline")
        );
        links[index].classList.add("active-section-underline");
      }
    });
  });
}

function blurOnScroll(header){
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.style.backdropFilter = "blur(5px)";
    } else {
      header.style.backdropFilter = "none";
    }
  });
}