import './about.css';

export const about = () => {
  const aboutElement = document.querySelector('#about');
  const h2 = document.createElement('h2');
  h2.textContent = 'About';
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `
<p>I started the Full Stack Developer course just two days before my second child was born and, even though is challenging at times, it is one of the best decisions I have ever made. My only regret is not doing it earlier in life, because I cannot be happier wih it! Each time I finish a project or even a tiny task, I feel happier than with any other job I have eve done.</p>

<p>About myself: I work at a voiceover agency that also provides translation, subtitling, and video editing services. During these years, I have contributed to building its brand recognition, increasing its digital presence, creating new business opportunities with different services and establishing strategic agreements with new and existing clients.</p>

<p>And, with a diverse background spanning marketing, storytelling, journalism, and localization project management, I can offer a unique blend of creativity and strategic thinking.</p>
`;

  aboutElement.append(h2, paragraph);
};
