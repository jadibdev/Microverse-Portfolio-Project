import * as projectObj from './objectData.js';

const toggleMenuButton = document.querySelectorAll('.toggle-mobile-menu');
const seeCloseProjectButton = document.querySelectorAll('.see-close-project');

const toggleDisplay = (section) => {
  section.classList.toggle('display-none');
};

const getSkillsList = (skillArray) => skillArray.map((item) => `<li><img alt="html label" src="${item}" /></li>`).join(' ');

const setDataInMobilePopUp = (ev) => {
  const projectIndex = ev.target.getAttribute('data-project-index');
  if (projectIndex !== null) {
    const project = projectObj.default.projectList[projectIndex];
    const title = document.getElementById('mobile-popup-title');
    title.innerText = project.name;

    const image = document.getElementById('mobile-popup-image');
    image.src = project.featured_image;

    const description = document.getElementById('mobile-popup-project-descritption');
    description.innerText = project.description;

    const skills = document.getElementById('mobile-popup-skill-list');
    skills.innerHTML = getSkillsList(project.technologies);

    const liveButton = document.getElementById('mobile-popup-view-live');
    const srcButton = document.getElementById('mobile-popup-view-src');
    liveButton.href = project.live;
    srcButton.href = project.source;
  }
};

const setDataInDesktopPopUp = (ev) => {
  const projectIndex = ev.target.getAttribute('data-project-index');
  if (projectIndex !== null) {
    const project = projectObj.default.projectList[projectIndex];

    const title = document.getElementById('dektop-modal-title-text');
    title.innerText = project.name;

    const image = document.getElementById('modal-image-desktop');
    image.src = project.featured_image;

    const description = document.getElementById('desktop-modal-project-desc');
    description.innerText = project.description;

    const skills = document.getElementById('dekstop-modal-skills-list');
    skills.innerHTML = getSkillsList(project.technologies);

    const liveButton = document.getElementById('desktop-modal-view-live');
    const srcButton = document.getElementById('desktop-modal-view-source');
    liveButton.href = project.live;
    srcButton.href = project.source;
  }
};

function togglePopUp(ev) {
  let div = document.querySelector('#mobile-popup');
  setDataInMobilePopUp(ev);
  if (window.innerWidth >= 768) {
    div = document.querySelector('#desktop-pop-up');
    setDataInDesktopPopUp(ev);
  }
  toggleDisplay(div);
}

function toggleMobileMenuView() {
  const section = document.querySelector('#mobile-menu');
  toggleDisplay(section);
}

toggleMenuButton.forEach((item) => {
  item.addEventListener('click', toggleMobileMenuView);
});

seeCloseProjectButton.forEach((item) => {
  item.addEventListener('click', togglePopUp);
});

const form = document.getElementById('form');
const email = document.getElementById('email');
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    submitButton.setCustomValidity('All emails must be in lower case!!');
    event.preventDefault();
  }
});

email.addEventListener('input', () => {
  submitButton.setCustomValidity('');
});
