import './style.css';
import { header } from './src/components/header/header';
import { resume } from './src/components/resume/resume';
import { about } from './src/components/about/about';
import { education } from './src/components/education/education';
import { experience } from './src/components/experience/experience';
import { projects } from './src/components/projects/projects';

const divApp = document.querySelector('#app');

divApp.innerHTML = `
<main id="main">
  <header id="header"></header>
  <section id="resume"></section>
</main>
`;
header();
resume();
about();
education();
experience();
projects();
