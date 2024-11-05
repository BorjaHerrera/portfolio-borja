import { courses } from '../educationArray/educationArray';
import './eduDescription.css';

export const eduDescription = (index) => {
  const courseInfo = document.querySelector('.course-info');
  const courseDescription = document.querySelector('.course-description');

  courseDescription.innerHTML = '';

  const descriptionSelected = courses[index];

  const courseSelected = document.createElement('h4');
  const schoolSelected = document.createElement('h4');
  const yearSelected = document.createElement('p');
  const infoSelected = document.createElement('p');

  courseSelected.textContent = descriptionSelected.course;
  schoolSelected.textContent = descriptionSelected.school;
  yearSelected.textContent = descriptionSelected.year;
  infoSelected.textContent = descriptionSelected.info;

  courseInfo.appendChild(courseDescription);
  courseDescription.append(
    courseSelected,
    schoolSelected,
    yearSelected,
    infoSelected
  );
};
