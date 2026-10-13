import React from 'react';

const Card = ({ title, image, demoLink, codeLink }) => (
  <article className="project-card">
    <div className="project-image-wrap"><img src={image} alt={`${title} project preview`} className="project-image" loading="lazy" /></div>
    <div className="project-card-body">
      <div className="project-card-top">
        <h3>{title}</h3>
        <div className="project-card-links">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} live demo`}>Live ↗</a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code`}>Code ↗</a>
        </div>
      </div>
    </div>
  </article>
);

export default Card;
