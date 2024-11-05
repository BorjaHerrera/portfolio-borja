import { hero } from '../hero/hero';
import { skills } from '../skills/skills';
import './header.css';

export const header = () => {
  const headerElement = document.querySelector('#header');
  headerElement.innerHTML = `
    <img src="./assets/logo.png" alt="Borja Herrera, Full Stack Developer" />
    <div id="hero">
      <h1>Nombre Completo</h1>
      <h2>Posición</h2>
      <p>Descripción breve o presentación</p>
      <nav id="nav"></nav>  
    </div>
    <ul id="skills"></ul>
  `;
  hero();
  skills();
};
