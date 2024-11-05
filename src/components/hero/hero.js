import { navArray } from '../navArray/navArray';
import { links } from '../navLinks/navLinks';
import './hero.css';
import './nav.css';

export const hero = () => {
  const titleDiv = document.querySelector('#hero');

  const h1 = titleDiv.querySelector('h1');
  h1.textContent = 'Borja Herrera';
  const h2 = titleDiv.querySelector('h2');
  h2.textContent = 'Full Stack Developer';
  const titleP = titleDiv.querySelector('p');
  titleP.textContent =
    'I build and enhance websites, focusing on clean, responsive design to create smooth, user-friendly experiences.';

  const navContainer = document.querySelector('#nav');
  const ul = document.createElement('ul');
  navContainer.appendChild(ul);

  for (const element of navArray) {
    links(ul, element.text, element.href);
  }
};
