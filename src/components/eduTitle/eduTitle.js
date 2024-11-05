import { courses } from '../educationArray/educationArray';
import { eduDescription } from '../eduDescription/eduDescription';

import './eduTitle.css';

export const eduTitle = () => {
  const courseInfo = document.querySelector('.course-info');
  const courseNameContainer = document.querySelector('.course-name');

  courses.forEach((course, index) => {
    const courseTitle = document.createElement('h4');
    courseTitle.textContent = course.title;

    courseTitle.addEventListener('click', () => {
      eduDescription(index);
    });

    courseNameContainer.appendChild(courseTitle);
  });
  courseInfo.appendChild(courseNameContainer);
};
