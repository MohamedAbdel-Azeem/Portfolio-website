import _ from "lodash";
import "./output.css";
import "./styles.css";
import { createHeader } from "./js/components/header.js";
import { createHome } from "./js/components/home.js";

function component() {
  const body = document.querySelector("body");
  body.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "h-screen",
    "bg-slate-900",
    "scroll-smooth"
  );
}

component();

document.body.appendChild(createHeader());
document.body.appendChild(createHome());

