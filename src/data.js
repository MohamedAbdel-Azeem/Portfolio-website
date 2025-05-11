import htmlIcon from "./assets/images/skills-icons/html.png";
import cssIcon from "./assets/images/skills-icons/css.png";
import tailwindIcon from "./assets/images/skills-icons/tailwind.png";
import jsIcon from "./assets/images/skills-icons/js.png";
import pythonIcon from "./assets/images/skills-icons/python.png";
import javaIcon from "./assets/images/skills-icons/java.png";
import psqlIcon from "./assets/images/skills-icons/psql.png";
import gitIcon from "./assets/images/skills-icons/git.png";
import reactIcon from "./assets/images/skills-icons/react.png";
import nodeJsIcon from "./assets/images/skills-icons/node_js.png";
import expressIcon from "./assets/images/skills-icons/express.png";
import cppIcon from "./assets/images/skills-icons/cpp.png";
import mongodbIcon from "./assets/images/skills-icons/mongodb.png";
import tsIcon from "./assets/images/skills-icons/ts.png";

import getItDoneImage from "./assets/images/projects/get-it-done.png";
import lastOfUsImage from "./assets/images/projects/last-of-us.png";
import advisingStudentImage from "./assets/images/projects/advising-student.png";
import ticTacToeImage from "./assets/images/projects/tic-tac-toe.png";

export const skills = [
  { name: "HTML", imageUrl: htmlIcon },
  { name: "CSS", imageUrl: cssIcon },
  { name: "TailwindCSS", imageUrl: tailwindIcon },
  { name: "Javascript", imageUrl: jsIcon },
  { name: "Python", imageUrl: pythonIcon },
  { name: "Java", imageUrl: javaIcon },
  { name: "PostgreSQL", imageUrl: psqlIcon },
  { name: "GIT", imageUrl: gitIcon },
  { name: "React", imageUrl: reactIcon },
  { name: "Node js", imageUrl: nodeJsIcon },
  { name: "Express js", imageUrl: expressIcon },
  { name: "C++", imageUrl: cppIcon },
  { name: "Mongo DB", imageUrl: mongodbIcon },
  { name: "TypeScript", imageUrl: tsIcon },
];

export const projects = [
  {
    name: "Get it Done !",
    imageUrl: getItDoneImage,
    description: "A to-do list app to help you organize your tasks!",
    languages: ["TailwindCSS", "JavaScript", "HTML", "CSS"],
    repo: "https://github.com/MohamedAbdel-Azeem/get-it-done",
    demo: "https://mohamedabdel-azeem.github.io/get-it-done/",
  },
  {
    name: "The Last of Us Java",
    imageUrl: lastOfUsImage,
    description:
      "A Simple Fun App Done in the OOP Course, inspired from TLOU Game",
    languages: ["Java", "JavaFX", "CSS"],
    repo: "https://github.com/MohamedAbdel-Azeem/TheLastOfUs-CSEN-401",
    demo: "https://www.linkedin.com/posts/mohamed-abdelazeem-098086244_a-moment-of-pride-im-so-thrilled-and-activity-7086098033410531328-MpvJ?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Student Admin Portal",
    imageUrl: advisingStudentImage,
    description:
      "A portal for the DB Course for Admins , Advising Students and Advisors to manage Courses, Exams and Instructors.",
    languages: ["MS SQL", "ASP . NET", "CSS & JS"],
    repo: "https://github.com/MohamedAbdel-Azeem/Advising_Students_System",
  },
  {
    name: "Tic-Tac-Toe Game",
    imageUrl: ticTacToeImage,
    description: "A Fancy looking Tic Tac Toe Game",
    languages: ["HTML", "JavaScript", "TailwindCSS"],
    repo: "https://github.com/MohamedAbdel-Azeem/Tic-Tac-Toe",
    demo: "https://mohamedabdel-azeem.github.io/Tic-Tac-Toe/",
  },
];
