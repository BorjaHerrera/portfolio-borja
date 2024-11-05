import { skillsArray } from '../skillsArray/skillsArray';
import { logos } from '../skillsLogos/skillsLogos';
import './skills.css';

export const skills = () => {
  const ul = document.querySelector('#skills');

  skillsArray.forEach((skill, index) => {
    logos(ul, skill.img, skill.href, index);
  });
};
