import { jobs } from '../experienceArray/experienceArray';
import './expDescription.css';

export const expDescription = (index) => {
  const jobsInfo = document.querySelector('.jobs-info');
  const jobsDescription = document.querySelector('.jobs-description');

  jobsDescription.innerHTML = '';

  const descriptionSelected = jobs[index];

  const positionSelected = document.createElement('h4');
  const companySelected = document.createElement('h4');
  const yearSelected = document.createElement('p');
  const infoSelected = document.createElement('p');

  positionSelected.textContent = descriptionSelected.position;
  companySelected.textContent = descriptionSelected.company;
  yearSelected.textContent = descriptionSelected.year;
  infoSelected.textContent = descriptionSelected.info;

  jobsInfo.appendChild(jobsDescription);
  jobsDescription.append(
    positionSelected,
    companySelected,
    yearSelected,
    infoSelected
  );
};
