import _ from "lodash";
import "./output.css";
import "./styles.css";
import { createHeader } from "./js/components/header.js";
import { createHome } from "./js/components/home.js";
import { createSkills } from "./js/components/skills.js";


document.body.appendChild(createHeader());
document.body.appendChild(createHome());
document.body.appendChild(createSkills());
