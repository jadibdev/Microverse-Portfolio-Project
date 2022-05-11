const getProjectListParentDiv = document.getElementById('project-lists');
const projectList = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'nature-35.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'nature-35.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: 'nature-35.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
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

/* <div class="card">
        <img class="project-pic" alt="tonic pic" src="nature-35.png" />
        <h2 class="project-title">Tonic</h2>
        <div class="project-subtitle">
          <div class="project-subtitle-left">CANOPY</div>
          <div class="project-subtitle-right">
            <img alt="dot image" class="dot" src="Counter.png" />
            <p>Back End Dev</p>
            <img alt="dot image" class="dot" src="Counter.png" />
            <p>2015</p>
          </div>
        </div>
        <div class="project-description">
          <p>
            A daily selection
            of privately personalized reads; no accounts or sign-ups required.
          </p>
        </div>

        <ul class="project-labels">
          <li>
            <img alt="html label" src="html-label.png" />
          </li>
          <li>
            <img alt="css label" src="css-label.png" />
          </li>
          <li>
            <img alt="javascript label" src="javascript-label.png" />
          </li>
        </ul>
        <button onclick="window.location.href = 'https://github.com/jadibdev/Portfolio_Site'" type="button"
          class="see-project-button">
          See Project
        </button>
      </div> */

for (let index = 0; index < projectList.length; index += 1) {
  const mainDiv = createMainElements('div', 'card');

  const imageContainer = createMainElements('div', 'image-container');

  const image = createMainElements('img', '');
  image.src = projectList[index].featured_image;
  image.alt = `Project ${index + 1} image`;
  imageContainer.appendChild(image);

  const projectDesc = createMainElements('div', 'project-description text-center');

  const title = createMainElements('h3', 'title-header');
  title.textContent = projectList[index].name;

  const technologies = createMainElements('ul', 'category-list');
  for (let i = 0; i < projectList[index].technologies.length; i += 1) {
    const li = createMainElements('ul', 'category-items');
    li.textContent = projectList[index].technologies[i];
    technologies.appendChild(li);
  }

  const button = createMainElements('button', 'button text-center see-close-project');
  button.type = 'button';
  button.id = `project-${index + 1}`;
  button.dataProjectIndex = index;
  button.textContent = 'See Project';

  projectDesc.appendChild(title);
  projectDesc.appendChild(technologies);
  projectDesc.appendChild(button);

  mainDiv.appendChild(imageContainer);
  mainDiv.appendChild(projectDesc);

  getProjectListParentDiv.append(mainDiv);
}