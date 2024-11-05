import { jobs } from '../experienceArray/experienceArray';
import { expDescription } from '../expDescription/expDescription';

import './expTitle.css';

export const expTitle = () => {
  const jobsInfo = document.querySelector('.jobs-info');
  const jobsNameContainer = document.querySelector('.jobs-name');

  jobs.forEach((job, index) => {
    const jobTitle = document.createElement('h4');
    jobTitle.textContent = job.title;

    jobTitle.addEventListener('click', () => expDescription(index));
    jobsNameContainer.appendChild(jobTitle);
  });

  jobsInfo.appendChild(jobsNameContainer);
};
