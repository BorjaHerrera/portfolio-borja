import './resume.css';

export const resume = () => {
  const resumeElement = document.querySelector('#resume');
  resumeElement.innerHTML = `
    <div id="about">
    </div>
    <section id="education"></section>
    <section id="experience"></section>
    <section id="projects"></section>
  `;
};
