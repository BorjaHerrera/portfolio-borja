import { projectsArray } from '../projectsArray/projectsArray';
import './projectsImg.css';
import './projectData.css';

export const printProjects = () => {
  const projectsArticle = document.querySelector('.projects-article');

  for (const project of projectsArray) {
    const eachProjectContainer = document.createElement('div');
    eachProjectContainer.classList.add('each-project');

    const projectImg = document.createElement('div');
    projectImg.classList.add('project-img');

    const link = document.createElement('a');
    link.href = project.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'link-container';

    const projectData = document.createElement('div');
    projectData.classList.add('project-data');
    const img = document.createElement('img');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const ul = document.createElement('ul');

    img.src = project.img;
    h4.textContent = project.title;
    p.textContent = project.description;

    for (const tool of project.tools) {
      const li = document.createElement('li');
      li.textContent = tool;
      ul.appendChild(li);
    }

    projectImg.appendChild(img);
    projectData.append(h4, p, ul);
    link.appendChild(projectImg);
    link.appendChild(projectData);
    eachProjectContainer.appendChild(link);
    projectsArticle.appendChild(eachProjectContainer);
  }
};
