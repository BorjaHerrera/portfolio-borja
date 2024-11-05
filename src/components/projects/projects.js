import { printProjects } from '../projectsPrint/printProjects';
import './projects.css';

export const projects = () => {
  const projectsElement = document.querySelector('#projects');

  projectsElement.innerHTML = `
<h2>Projects</h2>
<article class="projects-article">
</article>
`;
  printProjects();
};
