import './skillsLogos.css';

export const logos = (parentElement, imgSrc, href, index) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const img = document.createElement('img');

  a.href = href;

  if (index === 0) {
    a.target = '_blank';
  }

  img.src = imgSrc;

  a.appendChild(img);
  li.appendChild(a);
  parentElement.appendChild(li);
};
