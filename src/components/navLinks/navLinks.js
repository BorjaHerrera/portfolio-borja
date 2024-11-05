import './navLinks.css';

export const links = (parentElement, text, href) => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.textContent = text;
  a.href = href;

  li.appendChild(a);
  parentElement.appendChild(li);
};
