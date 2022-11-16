const hbutton = document.querySelector('.hamb');
const mobileMenu = document.querySelector('#mobile_menu');
const closeMenu = document.querySelector('.topx');
const headerMenu = document.querySelector('.menu');
const libutton1 = document.querySelector('.top-a1');
const libutton2 = document.querySelector('.top-a2');
const libutton3 = document.querySelector('.top-a3');
const libutton4 = document.querySelector('.top-a4');

hbutton.addEventListener('click', () => {
  mobileMenu.classList.replace('hide_menu', 'show_menu');
  headerMenu.classList.replace('show_menu', 'hide_menu');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
  headerMenu.classList.replace('hide_menu', 'show_menu');
});

libutton1.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
  headerMenu.classList.replace('hide_menu', 'show_menu');
});

libutton2.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
  headerMenu.classList.replace('hide_menu', 'show_menu');
});

libutton3.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
  headerMenu.classList.replace('hide_menu', 'show_menu');
});

libutton4.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
  headerMenu.classList.replace('hide_menu', 'show_menu');
});


let projects = [
 {
  id:"project1",
  name:"project name goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor  et dolore\
   magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  Ut aliquip ex ea commodo consequat. \
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Ut\
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi." ,
  featImage: "./images/lap1.svg",
  technologies: ["HTML","Ruby on Rails","JavaScript"],
  liveLink: "https://juanpa8830.github.io/",
  sourceLink: "https://github.com/Juanpa8830/Juanpa8830.github.io"
},

{
  id:"project2",
  name:"project2 name goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor  et dolore\
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  Ut aliquip ex ea commodo consequat. \
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Ut\
   enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi." ,
  featImage: "./images/lap2.svg",
  technologies: ["HTML","Ruby on Rails","JavaScript"],
  liveLink: "https://juanpa8830.github.io/",
  sourceLink: "https://github.com/Juanpa8830/Juanpa8830.github.io"
},

{
  id:"project3",
  name:"project3 name goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor  et dolore\
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  Ut aliquip ex ea commodo consequat. \
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Ut\
   enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi." ,
  featImage: "./images/lap3.svg",
  technologies: ["HTML","Ruby on Rails","JavaScript"],
  liveLink: "https://juanpa8830.github.io/",
  sourceLink: "https://github.com/Juanpa8830/Juanpa8830.github.io"
},

{
  id:"project4",
  name:"project4 name goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor  et dolore\
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  Ut aliquip ex ea commodo consequat. \
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Ut\
   enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi." ,
  featImage: "./images/lap4.svg",
  technologies: ["HTML","Ruby on Rails","JavaScript"],
  liveLink: "https://juanpa8830.github.io/",
  sourceLink: "https://github.com/Juanpa8830/Juanpa8830.github.io"
},

{
  id:"project5",
  name:"project5 name goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor  et dolore\
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  Ut aliquip ex ea commodo consequat. \
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Ut\
   enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi." ,
  featImage: "./images/lap5.svg",
  technologies: ["HTML","Ruby on Rails","JavaScript"],
  liveLink: "https://juanpa8830.github.io/",
  sourceLink: "https://github.com/Juanpa8830/Juanpa8830.github.io"
}
];

let projectTemplate = document.getElementById('Projects');
let projectsList = document.getElementById('projects-mobile');




for (let i=0; i<projects.length; i++){
  let clonedprojectTemplate = projectTemplate.cloneNode(true);
  let projectImage = clonedprojectTemplate.getElementsByTagName('img');
  let projectTitle = clonedprojectTemplate.querySelector('.tittle3');
  let project3Buttons= clonedprojectTemplate.querySelector('.b3');
  
  clonedprojectTemplate.id = projects[i].id;
  clonedprojectTemplate.className = "show_mobile";
  projectImage.sourceLink = projects[i].featImage;
  projectTitle.textContent = projects[i].name;
  
  for (let j=0; j<projects[i].technologies.length; j++){
    let Button=document.createElement('button');
    Button.className="sbutton";
    Button.textContent=projects[i].technologies[j];
    project3Buttons.appendChild(Button);
  }
  console.log(clonedprojectTemplate);
}
