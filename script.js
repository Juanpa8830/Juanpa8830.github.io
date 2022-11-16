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
  technologies: ["HTML","JavaScript","Ruby on Rails"],
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
  technologies: ["HTML/CSS","Bootstrap","JavaScript"],
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
  technologies: ["HTML","Bootstrap","JavaScript"],
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
  technologies: ["HTML/CSS","Ruby on Rails","JavaScript"],
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
  technologies: ["HTML","CSS","Ruby on Rails","JavaScript"],
  liveLink: "https://juanpa8830.github.io/",
  sourceLink: "https://github.com/Juanpa8830/Juanpa8830.github.io"
}
];

const projectsTitle = document.querySelector('#projects-mobile h2');
projectsTitle.removeAttribute('class');
projectsTitle.style.display = 'block';
const projectsList = document.getElementById('projects-mobile');
const projectTemplate = document.querySelector('#projects-mobile section');

for (let i=0; i<projects.length; i++){
  const clonedprojectTemplate = projectTemplate.cloneNode(true);
  const projects1b3= clonedprojectTemplate.querySelector('.projects1b3')
  const projectImage = clonedprojectTemplate.querySelector('img');
  const projectTitle = clonedprojectTemplate.querySelector('.tittle3');
  const project3Buttons= clonedprojectTemplate.querySelector('.b3');
  const SeeButton = document.createElement('button');
  SeeButton.className="start1";
  SeeButton.textContent = "See this project →"
  SeeButton.setAttribute('data-target', "#".concat(projects[i].id));
  projects1b3.appendChild(SeeButton);
  clonedprojectTemplate.className = "show_mobile";
  projectImage.src = projects[i].featImage;
  projectTitle.textContent = projects[i].name;

  for (let j=0; j<projects[i].technologies.length; j++){
    const Button = document.createElement('button');
    Button.className="sbutton";
    Button.textContent=projects[i].technologies[j];
    project3Buttons.appendChild(Button);
  }
  projectsList.appendChild(clonedprojectTemplate);
}
