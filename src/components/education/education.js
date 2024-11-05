import './education.css';
import { eduTitle } from '../eduTitle/eduTitle';
import { eduDescription } from '../eduDescription/eduDescription';

export const education = () => {
  const educationElement = document.querySelector('#education');

  educationElement.innerHTML = `
  <h2>Education</h2>
  <section class="course-info">
    <div class="course-name"></div>
    <div class="course-description"></div>
  </section>
`;
  eduTitle();
  eduDescription(0);
};
