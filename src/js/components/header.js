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

  const links = ["Home", "Skills", "Projects","About", "Contact"];
  const ul = document.createElement("ul");
  ul.classList.add("flex", "items-center", "space-x-4", "lg:space-x-8");

  links.forEach((link) => {
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
      "hover:underline",
      "transition",
      "duration-300",
      "ease-in-out",
      "cursor-pointer",
      "underline-offset-4"
    );
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  header.appendChild(nav);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.backdropFilter = "none";
    }
  });
  return header;
}
