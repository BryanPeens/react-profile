import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/images/pp1.jpeg';

const facts = [
  ['Based in', 'Canada'],
  ['Focus', 'Full-stack development'],
  ['Education', 'Belgium Campus ITVersity'],
  ['Currently', 'Open to new opportunities'],
];

export default function About() {
  return (
    <>
      <section className="page-intro">
        <div className="page-wrap">
          <span className="eyebrow">A little about me</span>
          <h1 className="display-title">Curious by nature.<br /><span>Developer by craft.</span></h1>
          <p>I care about making technology feel clear, useful, and considered, for the people who rely on it every day.</p>
        </div>
      </section>
      <section className="page-wrap about-grid">
        <img className="about-image" src={pic} alt="Bryan Peens" />
        <div className="about-copy">
          <h2>Hi, I’m Bryan.</h2>
          <p>I’m a full-stack developer with a foundation in front-end craft and hands-on experience building API integrations. I enjoy working across the stack, whether that means shaping a responsive interface or making systems exchange information reliably.</p>
          <p>I studied Information Technology at Belgium Campus ITVersity and have worked with small and large cross-functional teams. Flexibility, collaboration, and continuous learning are part of how I approach every project.</p>
          <p>Outside a job title, I’m someone who likes understanding how things work and finding a simpler way to make them work better. I’m currently looking for a developer role where I can contribute, learn, and build useful products with a thoughtful team.</p>
          <div className="skills-strip" aria-label="Technologies"><span className="skill-chip">React</span><span className="skill-chip">JavaScript</span><span className="skill-chip">Node.js</span><span className="skill-chip">REST APIs</span><span className="skill-chip">MongoDB</span><span className="skill-chip">SQL</span><span className="skill-chip">Tailwind CSS</span><span className="skill-chip">Git</span></div>
          <div className="about-facts">{facts.map(([label, value]) => <div className="about-fact" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
          <Link className="text-link" to="/Contact">Let’s work together <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}