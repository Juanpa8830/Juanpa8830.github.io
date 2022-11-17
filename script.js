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

const projects = [
  {
    id: 'project1',
    name: 'project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featImage: './images/lap1.svg',
    technologies: ['HTML', 'JavaScript', 'Ruby on Rails'],
    liveLink: 'https://juanpa8830.github.io/',
    sourceLink: 'https://github.com/Juanpa8830/Juanpa8830.github.io',
  },

  {
    id: 'project2',
    name: 'project2 name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featImage: './images/lap2.svg',
    technologies: ['HTML/CSS', 'Bootstrap', 'JavaScript'],
    liveLink: 'https://juanpa8830.github.io/',
    sourceLink: 'https://github.com/Juanpa8830/Juanpa8830.github.io',
  },

  {
    id: 'project3',
    name: 'project3 name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featImage: './images/lap3.svg',
    technologies: ['HTML', 'Bootstrap', 'JavaScript'],
    liveLink: 'https://juanpa8830.github.io/',
    sourceLink: 'https://github.com/Juanpa8830/Juanpa8830.github.io',
  },

  {
    id: 'project4',
    name: 'project4 name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featImage: './images/lap4.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    liveLink: 'https://juanpa8830.github.io/',
    sourceLink: 'https://github.com/Juanpa8830/Juanpa8830.github.io',
  },

  {
    id: 'project5',
    name: 'project5 name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ulabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featImage: './images/lap5.svg',
    technologies: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    liveLink: 'https://juanpa8830.github.io/',
    sourceLink: 'https://github.com/Juanpa8830/Juanpa8830.github.io',
  },
];

// generate technologies buttons
function generateTechButtons(technologies){
  const ButtonList = document.createElement('ul');
  for (let j = 0; j < technologies.length; j += 1) {
    const Button = document.createElement('button');
    Button.className = 'sbutton';
    Button.textContent = technologies[j];
    ButtonList.appendChild(Button);
  }
  return ButtonList.innerHTML;
}

// generate mobile cards dynamically

const projectsList = document.getElementById('projects-mobile');
projectsList.innerHTML+='<h2 class="show_mobile" style="display:block">Projects</h2>';

for (let i = 0; i < projects.length; i += 1) {
  let cardMobileTemplate=`
  
  <section class="show_mobile ${projects[i].id}">
      <img class="lap1" src="${projects[i].featImage}" alt="">
        <div class="projects1b3">

           <h3 class="tittle3">${projects[i].name}</h3>

          <ul class="b3">${generateTechButtons(projects[i].technologies)}
          </ul>
          <button class="start1" onclick="showpopup('mobile',${projects[i].id})">See this project →</button>

        </div>
  </section>`;

  projectsList.innerHTML+=cardMobileTemplate;
}

// Generate Desktop Cards Dynamically

const projectDeskList = document.querySelector('#projects-desktop');
const projectdeskcards =`
  <div class="div1">
  <h2 class="deskt1">Projects</h2>
  </div>

  <div class="div2"><img class="deskdots1" src="./images/image_dots.svg" alt=""></div>
  <div class="div3">
  <div class="projects1b3">
      <div>
          <h3 class="tittle3">${projects[0].name}</h3>

          <div class="b3">
          ${generateTechButtons(projects[0].technologies)}
          </div>
          <button class="start1" onclick="showpopup('mobile',${projects[0].id})">See this project →</button>
      </div>
  </div>
  </div>

  <div class="div4"><img class="desklap2" src="./images/desclap2.svg" alt=""></div>
  <div class="div5"><img class="desklap3" src="./images/desklap3.svg" alt=""></div>
  <div class="div6"><img class="deskgeometry1" src="./images/deskgeometry1.svg" alt=""></div>
  <div class="div7"><img class="deskgeometry2" src="./images/deskgeometry2.svg" alt=""></div>

  <div class="div9">
  <div class="projects1b39">
      <div>
          <h3 class="tittle39">${projects[1].name}</h3>

          <div class="b39">
          ${generateTechButtons(projects[1].technologies)}
          </div>
          
          <button class="start1" onclick="showpopup('mobile',${projects[1].id})">See this project →</button>
      </div>
  </div>
  </div>

  <div class="div10"><img class="desklap4" src="${projects[1].featImage}" alt=""></div>
  <div class="div11"><img class="deskgeometry3" src="./images/deskgeometry3.svg" alt=""></div>
  <div class="div12"><img class="deskgeometry4" src="./images/deskgeometry4.svg" alt=""></div>
  <div class="div13"><img class="desklap5" src="./images/desklap5.svg" alt=""></div>
  <div class="div14"><img class="deskgeometry5" src="./images/deskgeometry5.svg" alt=""></div>
`
projectDeskList.innerHTML+=projectdeskcards;

// generar pop-up window mobile
const popUpList = document.querySelector('body section');
const PopWinMobile = popUpList.querySelector('div.hide_mobile');

for (let i = 0; i < projects.length; i += 1) {
  const clonedPopWinMobile = PopWinMobile.cloneNode(true);
  clonedPopWinMobile.id = projects[i].id;
  const h2PopWinMobile = clonedPopWinMobile.querySelector('.poph2');
  h2PopWinMobile.textContent = projects[i].name;

  const project3Buttons = clonedPopWinMobile.querySelector('.b3pop');

  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    const Button = document.createElement('button');
    Button.className = 'sbuttonpop';
    Button.textContent = projects[i].technologies[j];
    project3Buttons.appendChild(Button);
  }

  const projectImage = clonedPopWinMobile.querySelector('.popmain');
  projectImage.src = projects[i].featImage;
  const pPopWinMobile = clonedPopWinMobile.querySelector('.popp1');
  pPopWinMobile.textContent = projects[i].description;
  const b1PopWinMobile = clonedPopWinMobile.querySelector('.popb1');
  b1PopWinMobile.setAttribute('onclick', `window.location.href='${projects[i].liveLink}';`);
  const b2PopWinMobile = clonedPopWinMobile.querySelector('.popb2');
  b2PopWinMobile.setAttribute('onclick', `window.location.href='${projects[i].sourceLink}';`);
  popUpList.appendChild(clonedPopWinMobile);
}
const s1SeeProject = document.querySelector('.show_mobile.project1');
const b1SeeProject = s1SeeProject.querySelector('.start1');
const popup1 = document.getElementById('project1');
const MobileSec1 = document.querySelector('body div.show_mobile');

b1SeeProject.addEventListener('click', () => {
  popup1.classList.replace('hide_mobile', 'show_mobile');
  MobileSec1.classList.replace('show_mobile', 'hide_mobile');
});
const s2SeeProject = document.querySelector('.show_mobile.project2');
const b2SeeProject = s2SeeProject.querySelector('.start1');
const popup2 = document.getElementById('project2');
const MobileSec2 = document.querySelector('body div.show_mobile');

b2SeeProject.addEventListener('click', () => {
  popup2.classList.replace('hide_mobile', 'show_mobile');
  MobileSec2.classList.replace('show_mobile', 'hide_mobile');
});
const s3SeeProject = document.querySelector('.show_mobile.project3');
const b3SeeProject = s3SeeProject.querySelector('.start1');
const popup3 = document.getElementById('project3');
const MobileSec3 = document.querySelector('body div.show_mobile');

b3SeeProject.addEventListener('click', () => {
  popup3.classList.replace('hide_mobile', 'show_mobile');
  MobileSec3.classList.replace('show_mobile', 'hide_mobile');
});

const s4SeeProject = document.querySelector('.show_mobile.project4');
const b4SeeProject = s4SeeProject.querySelector('.start1');
const popup4 = document.getElementById('project4');
const MobileSec4 = document.querySelector('body div.show_mobile');

b4SeeProject.addEventListener('click', () => {
  popup4.classList.replace('hide_mobile', 'show_mobile');
  MobileSec4.classList.replace('show_mobile', 'hide_mobile');
});

const s5SeeProject = document.querySelector('.show_mobile.project5');
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
const listpopups = [popup1, popup2, popup3, popup4, popup5];
const listMobileSecs = [MobileSec1, MobileSec2, MobileSec3, MobileSec4, MobileSec5];
for (let i = 0; i < listclosebuttons.length; i += 1) {
  listclosebuttons[i].addEventListener('click', () => {
    listpopups[i].classList.replace('show_mobile', 'hide_mobile');
    listMobileSecs[i].classList.replace('hide_mobile', 'show_mobile');
  });
}



// Generate PopUp Desktop Windows
const popUpDeskList = document.querySelector('#popwindesktop');
const popUpDeskTemplate = popUpDeskList.querySelector('div.interndesk');

for (let i = 0; i < 2; i += 1) {
  const clonedPopUpDesk = popUpDeskTemplate.cloneNode(true);
  clonedPopUpDesk.id = projects[i].id;
  const h2PopDesk = clonedPopUpDesk.querySelector('.poph2desk');
  h2PopDesk.textContent = projects[i].name;

  const project3Buttons = clonedPopUpDesk.querySelector('.b3popdesk');
  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    const Button = document.createElement('button');
    Button.className = 'sbuttonpopdesk';
    Button.textContent = projects[i].technologies[j];
    project3Buttons.appendChild(Button);
  }

  const projectImage = clonedPopUpDesk.querySelector('.popmaindesk');
  projectImage.src = projects[i].featImage;
  const pPopWinDesk = clonedPopUpDesk.querySelector('.popp1desk');
  pPopWinDesk.textContent = projects[i].description;

  const b1PopWinDesk = clonedPopUpDesk.querySelector('.popb1desk');
  b1PopWinDesk.setAttribute('onclick', `window.location.href='${projects[i].liveLink}';`);
  const b2PopWinDesk = clonedPopUpDesk.querySelector('.popb2desk');
  b2PopWinDesk.setAttribute('onclick', `window.location.href='${projects[i].sourceLink}';`);

  popUpDeskList.appendChild(clonedPopUpDesk);
}

const popupdesk1 = document.querySelector('#popwindesktop #project1');
const popupdesk2 = document.querySelector('#popwindesktop #project2');
const hiddendeskpop = document.querySelector('body div.hide_desktop');

SeeButton.addEventListener('click', () => {
  popupdesk1.classList.replace('hide_desktop', 'show_desktop');
  MobileSec1.classList.replace('show_mobile', 'hide_mobile');
  hiddendeskpop.classList.replace('hide_desktop', 'show_desktop');
});

SeeButton2.addEventListener('click', () => {
  popupdesk2.classList.replace('hide_desktop', 'show_desktop');
  MobileSec1.classList.replace('show_mobile', 'hide_mobile');
  hiddendeskpop.classList.replace('hide_desktop', 'show_desktop');
});

// create event for close 'x' buttons of desktop popups
const closedeskbutton1 = popupdesk1.querySelector('.popxdesk');
const closedeskbutton2 = popupdesk2.querySelector('.popxdesk');

const listclosedeskbuttons = [closedeskbutton1, closedeskbutton2];
const listdeskpopups = [popupdesk1, popupdesk2];

for (let i = 0; i < listclosedeskbuttons.length; i += 1) {
  listclosedeskbuttons[i].addEventListener('click', () => {
    listdeskpopups[i].classList.replace('show_desktop', 'hide_desktop');
    MobileSec1.classList.replace('hide_mobile', 'show_mobile');
    hiddendeskpop.classList.replace('show_desktop', 'hide_desktop');
  });
}