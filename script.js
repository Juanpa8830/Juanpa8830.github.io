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

// generate cards technologies buttons
function generateTechButtons(technologies) {
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
projectsList.innerHTML += '<h2 class="show_mobile" style="display:block">Projects</h2>';

for (let i = 0; i < projects.length; i += 1) {
  const cardMobileTemplate = `
  
  <section class="show_mobile ${projects[i].id}">
      <img class="lap1" src="${projects[i].featImage}" alt="">
        <div class="projects1b3">

           <h3 class="tittle3">${projects[i].name}</h3>

          <ul class="b3">${generateTechButtons(projects[i].technologies)}
          </ul>
          <button class="start1" onclick="showpopup('mobile','${projects[i].id}')">See this project →</button>

        </div>
  </section>`;

  projectsList.innerHTML += cardMobileTemplate;
}

// Generate Desktop Cards Dynamically

const projectDeskList = document.querySelector('#projects-desktop');
const projectdeskcards = `
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
          <button class="start1" onclick="showpopup('desktop','${projects[0].id}');">See this project →</button>
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
          
          <button class="start1" onclick="showpopup('desktop','${projects[1].id}')">See this project →</button>
      </div>
  </div>
  </div>

  <div class="div10"><img class="desklap4" src="${projects[1].featImage}" alt=""></div>
  <div class="div11"><img class="deskgeometry3" src="./images/deskgeometry3.svg" alt=""></div>
  <div class="div12"><img class="deskgeometry4" src="./images/deskgeometry4.svg" alt=""></div>
  <div class="div13"><img class="desklap5" src="./images/desklap5.svg" alt=""></div>
  <div class="div14"><img class="deskgeometry5" src="./images/deskgeometry5.svg" alt=""></div>
`;
projectDeskList.innerHTML += projectdeskcards;

function getproject(id) {
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].id === id) {
      return projects[i];
    }
  }
  return false;
}

// generate popups technologies buttons
function generatepopTechButtons(technologies) {
  const ButtonList = document.createElement('ul');
  for (let j = 0; j < technologies.length; j += 1) {
    const Button = document.createElement('button');
    Button.className = 'sbuttonpop';
    Button.textContent = technologies[j];
    ButtonList.appendChild(Button);
  }
  return ButtonList.innerHTML;
}

// generar pop-up windows mobile/desktop
function showpopup(version, id) {
  const project = getproject(id);
  const popuptemplates = {
    mobile: `
    <div class="hide_mobile" id="${project.id}">
        <a class="popx" href="#" onclick="closepopup('mobile','${project.id}');">
        <img src="./images/popupx.svg" alt=""></a>
        <h2 class="poph2">${project.name}</h2>

        <div class="projects1b3pop">
            <ul class="b3pop">
            ${generatepopTechButtons(project.technologies)}
            </ul>

            <img class="popmain" src="${project.featImage}" alt="">
            <ul class="ima4pop">
                <img class="little" src="./images/smalllappop.svg" alt="">
                <img class="little" src="./images/smalllappop.svg" alt="">
                <img class="little" src="./images/smalllappop.svg" alt="">
                <img class="little" src="./images/smalllappop.svg" alt="">
            </ul>

            <p class="popp1">${project.description}</p>
            <p class="popp2">Description of projects features and details.</p>

            <button class="popb1" onclick="window.location.href='${project.liveLink}';">See Live</button>
            <button class="popb2" onclick="window.location.href='${project.sourceLink}';">See Source</button>

        </div>
    </div>`,
    desktop: `
      <div class="interndesk hide_desktop id="${project.id}">
          <div class="topdesk">
            <h2 class="poph2desk">${project.name}</h2>
            <a class="popxdesk" href="#" onclick="closepopup('desktop','${project.id}');"><img src="./images/deskcross.svg" alt=""></a>
          </div>

      <div class="projects1b3popdesk">
          <ul class="b3popdesk">
          ${generatepopTechButtons(project.technologies)}
          </ul>

          <img class="popmaindesk" src="${project.featImage}" alt="">
          <ul class="ima4popdesk">
              <img class="littledesk" src="./images/littledesk.svg" alt="">
              <img class="littledesk" src="./images/littledesk.svg" alt="">
              <img class="littledesk" src="./images/littledesk.svg" alt="">
              <img class="littledesk" src="./images/littledesk.svg" alt="">
          </ul>

          <p class="popp1desk">${project.description}</p>
          <p class="popp2desk">Description of projects features and details.</p>
          <div class="deskbuttons">
              <button class="popb1desk" onclick="window.location.href='${project.liveLink}';">See Live</button>
              <button class="popb2desk" onclick="window.location.href='${project.sourceLink}';">See Source</button>
          </div>
          <div class="deskbottomanchors">
              <a class="anch1desk" href="#">previous project</a>
              <a class="anch2desk" href="#">Next project</a>
          </div>

      </div>
    </div>`,
  };
  const popUpmobileList = document.querySelector('body section');
  const popUpDeskList = document.querySelector('#popwindesktop');
  const contentSection = document.querySelector('body div.show_mobile');

  contentSection.classList.replace('show_mobile', 'hide_mobile');
  if (version === 'mobile') {
    popUpmobileList.innerHTML += popuptemplates.mobile;
    const projectpopupmobile = document.querySelector(`#${project.id}`);
    projectpopupmobile.classList.replace('hide_mobile', 'show_mobile');
  } else {
    popUpDeskList.innerHTML += popuptemplates.desktop;
    const projectpopupdesktop = document.querySelector('#popwindesktop .interndesk');
    projectpopupdesktop.classList.replace('hide_desktop', 'show_desktop');
    const activepopupdesktop = document.querySelector('body div.hide_desktop');
    activepopupdesktop.classList.replace('hide_desktop', 'show_desktop');
  }
}
showpopup();

// create event for close 'x' buttons of popups
function closepopup(version, id) {
  const contentSection = document.querySelector('body div.hide_mobile');
  contentSection.classList.replace('hide_mobile', 'show_mobile');
  if (version === 'mobile') {
    const projectpopupmobile = document.querySelector(`#${id}`);
    projectpopupmobile.classList.replace('show_mobile', 'hide_mobile');
    projectpopupmobile.parentNode.removeChild(projectpopupmobile);
  } else {
    const projectpopupdesktop = document.querySelector('#popwindesktop .show_desktop');
    projectpopupdesktop.parentNode.removeChild(projectpopupdesktop);
    const activepopupdesktop = document.querySelector('body div.show_desktop');
    activepopupdesktop.classList.replace('show_desktop', 'hide_desktop');
  }
}
closepopup();