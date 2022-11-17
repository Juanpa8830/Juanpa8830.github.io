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


// generar cards al cargar
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
  clonedprojectTemplate.className = `show_mobile ${projects[i].id}`;
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
// generar pop-up window mobile
const popUpList = document.querySelector('body section');
const PopWinMobile = popUpList.querySelector('div.hide_mobile');

  for (let i=0; i<projects.length; i++){
  const clonedPopWinMobile = PopWinMobile.cloneNode(true);
  clonedPopWinMobile.id = projects[i].id;
  const h2PopWinMobile = clonedPopWinMobile.querySelector('.poph2');
  h2PopWinMobile.textContent = projects[i].name;

  const project3Buttons= clonedPopWinMobile.querySelector('.b3pop');


  for (let j=0; j<projects[i].technologies.length; j++){
    const Button = document.createElement('button');
    Button.className="sbuttonpop";
    Button.textContent=projects[i].technologies[j];
    project3Buttons.appendChild(Button);
  }

  const projectImage = clonedPopWinMobile.querySelector('.popmain');
  projectImage.src = projects[i].featImage;
  const pPopWinMobile = clonedPopWinMobile.querySelector('.popp1');
  pPopWinMobile.textContent=projects[i].description;
  const b1PopWinMobile = clonedPopWinMobile.querySelector('.popb1');
  b1PopWinMobile.setAttribute('onclick',`window.location.href=\'${projects[i].liveLink}\';`);
  const b2PopWinMobile = clonedPopWinMobile.querySelector('.popb2');
  b2PopWinMobile.setAttribute('onclick',`window.location.href=\'${projects[i].sourceLink}\';`);
   popUpList.appendChild(clonedPopWinMobile);
}
const s1SeeProject=document.querySelector('.show_mobile.project1');
const b1SeeProject = s1SeeProject.querySelector('.start1');
const popup1 = document.getElementById('project1');
const MobileSec1 = document.querySelector('body div.show_mobile');

b1SeeProject.addEventListener('click', () => {

  popup1.classList.replace('hide_mobile', 'show_mobile');
  MobileSec1.classList.replace('show_mobile', 'hide_mobile');
});
const s2SeeProject=document.querySelector('.show_mobile.project2');
const b2SeeProject = s2SeeProject.querySelector('.start1');
const popup2 = document.getElementById('project2');
const MobileSec2 = document.querySelector('body div.show_mobile');

b2SeeProject.addEventListener('click', () => {

  popup2.classList.replace('hide_mobile', 'show_mobile');
  MobileSec2.classList.replace('show_mobile', 'hide_mobile');
});
const s3SeeProject=document.querySelector('.show_mobile.project3');
const b3SeeProject = s3SeeProject.querySelector('.start1');
const popup3 = document.getElementById('project3');
const MobileSec3 = document.querySelector('body div.show_mobile');

b3SeeProject.addEventListener('click', () => {

  popup3.classList.replace('hide_mobile', 'show_mobile');
  MobileSec3.classList.replace('show_mobile', 'hide_mobile');
 });

const s4SeeProject=document.querySelector('.show_mobile.project4');
const b4SeeProject = s4SeeProject.querySelector('.start1');
const popup4 = document.getElementById('project4');
const MobileSec4 = document.querySelector('body div.show_mobile');

b4SeeProject.addEventListener('click', () => {

  popup4.classList.replace('hide_mobile', 'show_mobile');
  MobileSec4.classList.replace('show_mobile', 'hide_mobile');
});

const s5SeeProject=document.querySelector('.show_mobile.project5');
const b5SeeProject = s5SeeProject.querySelector('.start1');
const popup5 = document.getElementById('project5');
const MobileSec5 = document.querySelector('body div.show_mobile');

b5SeeProject.addEventListener('click', () => {

  popup5.classList.replace('hide_mobile', 'show_mobile');
  MobileSec5.classList.replace('show_mobile', 'hide_mobile');
});
// create event for close 'x' buttons of popups
const closebutton1 = document.querySelector('#popwinmobile #project1 .popx');
const closebutton2 = document.querySelector('#popwinmobile #project2 .popx');
const closebutton3 = document.querySelector('#popwinmobile #project3 .popx');
const closebutton4 = document.querySelector('#popwinmobile #project4 .popx');
const closebutton5 = document.querySelector('#popwinmobile #project5 .popx');

const listclosebuttons = [closebutton1, closebutton2, closebutton3, closebutton4, closebutton5];
const listpopups = [popup1,popup2,popup3,popup4,popup5];
const listMobileSecs = [MobileSec1,MobileSec2,MobileSec3,MobileSec4,MobileSec5];
for (let i=0; i<listclosebuttons.length;i++){
  listclosebuttons[i].addEventListener('click', () => {

    listpopups[i].classList.replace('show_mobile','hide_mobile');
    listMobileSecs[i].classList.replace('hide_mobile', 'show_mobile');
});
}


// Generate Desktop Cards Dynamically
// First project
const project1Desk = document.querySelector('#projects-desktop div.projects1b3 div');
const project1DeskTitle = project1Desk.querySelector('.tittle3');
project1DeskTitle.textContent = projects[0].name;

const project1Desktop3Buttons= project1Desk.querySelector('.b3');
for (let j=0; j<projects[0].technologies.length; j++){
  const Button = document.createElement('button');
  Button.className="sbutton";
  Button.textContent=projects[0].technologies[j];
  project1Desktop3Buttons.appendChild(Button);
}

const SeeButton = document.createElement('button');
SeeButton.className="start1";
SeeButton.textContent = "See this project →"
SeeButton.setAttribute('data-target', "#".concat(projects[0].id));
project1Desk.appendChild(SeeButton);

// Second project
const project2Desk = document.querySelector('#projects-desktop div.projects1b39 div');
const project2DeskTitle = project2Desk.querySelector('.tittle39');
project2DeskTitle.textContent = projects[1].name;

const project2Desktop3Buttons= project2Desk.querySelector('.b39');
for (let j=0; j<projects[1].technologies.length; j++){
  const Button = document.createElement('button');
  Button.className="sbutton9";
  Button.textContent=projects[1].technologies[j];
  project2Desktop3Buttons.appendChild(Button);
}

const SeeButton2 = document.createElement('button');
SeeButton2.className="start19";
SeeButton2.textContent = "See this project →"
SeeButton2.setAttribute('data-target', "#".concat(projects[1].id));
project2Desk.appendChild(SeeButton2);

const project2DeskImage = document.querySelector('#projects-desktop div.div10 img');
project2DeskImage.src = projects[1].featImage;

// // generar pop-up window en desktop
// const popUpList = document.querySelector('body section');
// const PopWinMobile = popUpList.querySelector('div.hide_mobile');

//   for (let i=0; i<projects.length; i++){
//   const clonedPopWinMobile = PopWinMobile.cloneNode(true);
//   clonedPopWinMobile.id = projects[i].id;
//   const h2PopWinMobile = clonedPopWinMobile.querySelector('.poph2');
//   h2PopWinMobile.textContent = projects[i].name;

//   const project3Buttons= clonedPopWinMobile.querySelector('.b3pop');


//   for (let j=0; j<projects[i].technologies.length; j++){
//     const Button = document.createElement('button');
//     Button.className="sbuttonpop";
//     Button.textContent=projects[i].technologies[j];
//     project3Buttons.appendChild(Button);
//   }

//   const projectImage = clonedPopWinMobile.querySelector('.popmain');
//   projectImage.src = projects[i].featImage;
//   const pPopWinMobile = clonedPopWinMobile.querySelector('.popp1');
//   pPopWinMobile.textContent=projects[i].description;
//   const b1PopWinMobile = clonedPopWinMobile.querySelector('.popb1');
//   b1PopWinMobile.setAttribute('onclick',`window.location.href=\'${projects[i].liveLink}\';`);
//   const b2PopWinMobile = clonedPopWinMobile.querySelector('.popb2');
//   b2PopWinMobile.setAttribute('onclick',`window.location.href=\'${projects[i].sourceLink}\';`);
//    popUpList.appendChild(clonedPopWinMobile);
// }
// const s1SeeProject=document.querySelector('.show_mobile.project1');
// const b1SeeProject = s1SeeProject.querySelector('.start1');
// const popup1 = document.getElementById('project1');
// const MobileSec1 = document.querySelector('body div.show_mobile');

// b1SeeProject.addEventListener('click', () => {

//   popup1.classList.replace('hide_mobile', 'show_mobile');
//   MobileSec1.classList.replace('show_mobile', 'hide_mobile');
// });
// const s2SeeProject=document.querySelector('.show_mobile.project2');
// const b2SeeProject = s2SeeProject.querySelector('.start1');
// const popup2 = document.getElementById('project2');
// const MobileSec2 = document.querySelector('body div.show_mobile');

// b2SeeProject.addEventListener('click', () => {

//   popup2.classList.replace('hide_mobile', 'show_mobile');
//   MobileSec2.classList.replace('show_mobile', 'hide_mobile');
// });
// const s3SeeProject=document.querySelector('.show_mobile.project3');
// const b3SeeProject = s3SeeProject.querySelector('.start1');
// const popup3 = document.getElementById('project3');
// const MobileSec3 = document.querySelector('body div.show_mobile');

// b3SeeProject.addEventListener('click', () => {

//   popup3.classList.replace('hide_mobile', 'show_mobile');
//   MobileSec3.classList.replace('show_mobile', 'hide_mobile');
//  });

// const s4SeeProject=document.querySelector('.show_mobile.project4');
// const b4SeeProject = s4SeeProject.querySelector('.start1');
// const popup4 = document.getElementById('project4');
// const MobileSec4 = document.querySelector('body div.show_mobile');

// b4SeeProject.addEventListener('click', () => {

//   popup4.classList.replace('hide_mobile', 'show_mobile');
//   MobileSec4.classList.replace('show_mobile', 'hide_mobile');
// });

// const s5SeeProject=document.querySelector('.show_mobile.project5');
// const b5SeeProject = s5SeeProject.querySelector('.start1');
// const popup5 = document.getElementById('project5');
// const MobileSec5 = document.querySelector('body div.show_mobile');

// b5SeeProject.addEventListener('click', () => {

//   popup5.classList.replace('hide_mobile', 'show_mobile');
//   MobileSec5.classList.replace('show_mobile', 'hide_mobile');
