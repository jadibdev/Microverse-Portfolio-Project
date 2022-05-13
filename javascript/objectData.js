const getProjectListParentDiv = document.getElementById('portfolio');
const projectList = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'nature-35.png',
    technologies: ['html-label.png', 'css-label.png', 'javascript-label.png'],
    live: '#',
    source: '#',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'multi-post-stories2.png',
    technologies: ['html-label.png', 'css-label.png', 'javascript-label.png'],
    live: '#',
    source: '#',
  },
  {
    name: 'Facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'Snapshoot-Portfolio.png',
    technologies: ['html-label.png', 'css-label.png', 'javascript-label.png'],
    live: '#',
    source: '#',
  },
  {
    name: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'multi-post-stories.png',
    technologies: ['html-label.png', 'css-label.png', 'javascript-label.png'],
    live: '#',
    source: '#',
  },

];

const createMainElements = (elem, classes) => {
  const mainElem = document.createElement(elem);
  if (classes !== '') {
    const classesList = classes.split(' ');
    mainElem.classList.add(...classesList);
  }
  return mainElem;
};

for (let index = 0; index < projectList.length; index += 1) {
  const mainDiv = createMainElements('div', 'card');

  const image = createMainElements('img', 'project-pic');
  image.src = projectList[index].featured_image;
  image.alt = `Project ${index + 1} image`;

  const h2 = createMainElements('h2', 'project-title');
  h2.textContent = projectList[index].name;

  const subtitleMain = createMainElements('div', 'project-subtitle');

  const subtitleChildleft = createMainElements('div', 'project-subtitle-left');
  subtitleChildleft.textContent = 'CANOPY';

  const subtitleChildright = createMainElements('div', 'project-subtitle-right');

  const subtitleChildrightImage = createMainElements('img', 'dot');
  subtitleChildrightImage.src = 'Counter.png';
  subtitleChildrightImage.alt = 'dot image';

  const subtitleChildrightPOne = createMainElements('p', '');
  subtitleChildrightPOne.textContent = 'Back End Dev';
  const subtitleChildrightPTwo = createMainElements('p', '');
  subtitleChildrightPTwo.textContent = '2015';
  subtitleChildright.appendChild(subtitleChildrightImage);
  subtitleChildright.appendChild(subtitleChildrightPOne);
  subtitleChildright.appendChild(subtitleChildrightImage);
  subtitleChildright.appendChild(subtitleChildrightPTwo);

  subtitleMain.appendChild(subtitleChildleft);
  subtitleMain.appendChild(subtitleChildright);

  const projectDescDiv = createMainElements('div', 'project-description');
  const projectDesc = createMainElements('p', '');
  projectDesc.textContent = projectList[index].description;
  projectDescDiv.appendChild(projectDesc);

  const technologies = createMainElements('ul', 'project-labels');
  for (let i = 0; i < projectList[index].technologies.length; i += 1) {
    const li = createMainElements('li', '');
    const skillimg = createMainElements('img', '');
    skillimg.src = projectList[index].technologies[i];
    li.appendChild(skillimg);
    technologies.appendChild(li);
  }

  const button = createMainElements('button', 'see-project-button see-close-project');
  button.type = 'button';
  button.id = `project-${index + 1}`;
  button.setAttribute('data-project-index', index);
  button.textContent = 'See Project';

  mainDiv.appendChild(image);
  mainDiv.appendChild(h2);
  mainDiv.appendChild(subtitleMain);
  mainDiv.appendChild(projectDescDiv);
  mainDiv.appendChild(technologies);
  mainDiv.appendChild(button);

  getProjectListParentDiv.append(mainDiv);
}
