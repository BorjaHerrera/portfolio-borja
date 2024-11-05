import { expDescription } from '../expDescription/expDescription';
import { expTitle } from '../expTitle/expTitle';
import './experience.css';

export const experience = () => {
  const experienceElement = document.querySelector('#experience');

  experienceElement.innerHTML = `
<h2>Experience</h2>
<section class="jobs-info">
  <div class="jobs-name"></div>
  <div class="jobs-description"></div>
</section>
`;
  expTitle();
  expDescription(0);
};
