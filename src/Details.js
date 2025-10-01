// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import spring from "./assets/techstack/spring.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import node from "./assets/techstack/node.png";
import mysql from "./assets/techstack/mysql.png";
import mongodb from "./assets/techstack/mongodb.png";
import express from "./assets/techstack/express.png";
import laragon from "./assets/techstack/laragon.png";
import intellij from "./assets/techstack/intellij.png";

// Porject Images
// import projectImage1 from "./assets/projects/project1.jpg";
// import projectImage2 from "./assets/projects/project2.jpg";
// import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
// import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import cararayan from "./assets/projects/cararayan.png";
import holink from "./assets/projects/holink.png";
import raja from "./assets/projects/raja.png";
import weather from "./assets/projects/weather.png";


// Enter your Personal Details here
export const personalDetails = {
  name: "Alexander Espinas",
  tagline: "From web apps to software systems, I make it work.",
  img: profile,
  about: `I am a passionate software and web developer with experience building dynamic, user-friendly applications. I specialize in creating efficient, scalable solutions using modern technologies, and I thrive in collaborative environments where I can solve complex problems and continuously learn. With a keen eye for detail and a commitment to delivering high-quality code, I aim to build products that make an impact and drive results.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
    linkedin: "https://linkedin.com/in/alexander-espinas",
  github: "https://github.com/ft-Alexander",
  instagram: "https://www.instagram.com/ft_alxndr/",
};

// Enter your Work Experience here
export const workDetails = [
    {
        Position: "Salesforce Developer",
        Company: `The SmartBridge`,
        Location: "Telangana, India",
        Type: "Internship",
        Duration: "March 2025 - May 2025",
    },
    {
        Position: "Full Stack Developer",
        Company: `Holink`,
        Location: "Libmanan, Philippines",
        Type: "Part-Time",
        Duration: "June 2023 - June 2025",
    },
    {
        Position: "Web Developer",
        Company: `Raja`,
        Location: "Naga City, Philippines",
        Type: "Full Time",
        Duration: "Jan 2023 - Jan 2024",
    },
    {
        Position: "Enrollment Counselor",
        Company: `University of Nueva Caceres`,
        Location: "Naga City, Philippines",
        Type: "Part-Time",
        Duration: "July 2022 - Sept 2022",
    },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Science In Information technology",
    Company: "University of Nueva Caceres",
    Location: "Naga City, Philippines",
    Type: "Full Time",
    Duration: "June 2025",
  },
  {
    Position: "Associate in Computer Technology",
    Company: `University of Nueva Caceres`,
    Location: "Naga City, Philippines",
    Type: "Full Time",
    Duration: "June 2023",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  git: git,
  github: github,
  figma: figma,
    spring: spring,
    node:node,
    mysql:mysql,
    mongodb:mongodb,
    express:express,
    laragon:laragon,
    intellij:intellij,
};

// Enter your Project Details here
export const projectDetails = [
    {
        title: "Gas Station System",
        image: projectImage6,
        description: `Gas Station System is a full-stack web application built using React for the front-end, Node.js and Express for the back-end, 
  and MySQL for database management. The system allows users to manage fuel inventory, track sales, and generate reports through a responsive, interactive interface. 
  Building this project helped me strengthen my skills in integrating React front-end components with back-end APIs, 
  designing relational databases with MySQL, and creating scalable, full-stack applications.`,
        techstack: "React, Node.js, Express, MySQL",
        previewLink: "",
        githubLink: "",
    },
    {
        title: "Gym Membership System",
        image: projectImage4,
        description: `Gym Membership System is a full-stack web application built using React for the front-end, Node.js for server-side logic, 
  Spring WebFlux for reactive back-end services, and Redux for state management. 
  The system enables users to register, manage memberships, and track fitness activities through a responsive and interactive interface. 
  Working on this project strengthened my skills in building scalable, reactive applications, integrating front-end React components with back-end APIs, 
  and managing complex state effectively with Redux.`,
        techstack: "React, Node.js, Spring WebFlux, Redux",
        previewLink: "",
        githubLink: "",
    },
    {
        title: "Holink Initial Website",
        image: holink,
        description: `Holink Initial Website is a full-stack project developed using Flutter for front-end interfaces and PHP for the back-end. 
  The project features dynamic content management, responsive design, and interactive user experiences. 
  Building this website strengthened my skills in connecting front-end Flutter components with PHP-based back-end services, 
  handling APIs, and creating a polished full-stack application.`,
        techstack: "Flutter, PHP",
        previewLink: "https://holinkims.com/",
        githubLink: "",
    },
    {
        title: "Raja Website",
        image: raja,
        description: `Weather Website is a project I built to practice working with APIs and dynamic content using HTML, CSS, and JavaScript. 
  It fetches real-time weather data from an external API and displays it in a clean, responsive interface. 
  Through this project, I learned how to handle asynchronous requests, manipulate the DOM, and create interactive, user-friendly web applications, 
  strengthening my front-end development skills.`,
        techstack: "MERN",
        previewLink: "https://rajanagacity.com/",
        githubLink: "",
    },
    {
        title: "Weather Website",
        image: weather,
        description: `Weather Website is a project I built to practice working with APIs and dynamic content using HTML, CSS, and JavaScript. 
  It fetches real-time weather data from an external API and displays it in a clean, responsive interface. 
  Through this project, I learned how to handle asynchronous requests, manipulate the DOM, and create interactive, user-friendly web applications, 
  strengthening my front-end development skills.`,
        techstack: "HTML,CSS,JavaScript",
        previewLink: "https://ft-alexander.github.io/Weather-Website/",
        githubLink: "https://github.com/ft-Alexander/Weather-Website",
    },
    {
        title: "Cararayan Website",
        image: cararayan,
        description: `Cararayan Website is my first project using HTML, CSS, PHP, and JavaScript. 
  I built it while learning the fundamentals of web development, focusing on creating a responsive and user-friendly layout. 
  This project helped me understand core front-end concepts, structuring content, styling with CSS, and adding interactivity with JavaScript, 
  laying the foundation for my journey as a web developer.`,
        techstack: "HTML,CSS,PHP,JavaScript",
        previewLink: "https://ft-alexander.github.io/Cararayan-Website/",
        githubLink: "https://github.com/ft-Alexander/Cararayan-Website",
    },

];

// Enter your Contact Details here
export const contactDetails = {
  email: "alexanderespinas01@gmail.com",
  phone: "+63 929 9631 857 / +63 916 5636 569",
};
