import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import bgImg from '../assets/images/pp1.jpeg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="page-wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="availability">Open to new opportunities</span>
            <p className="eyebrow">Full-stack developer · Canada</p>
            <h1 className="display-title">Building useful things for <span>the web.</span></h1>
            <p className="lead-copy">I’m Bryan, a developer who enjoys turning complex problems into clear, thoughtful digital experiences, from polished interfaces to dependable integrations.</p>
            <div className="hero-actions"><Link className="button-primary" to="/Portfolio">Explore my work <FaArrowRight aria-hidden="true" /></Link><Link className="button-secondary" to="/Contact">Get in touch</Link></div>
            <div className="hero-meta" aria-label="Areas of focus"><div><strong>React</strong><span>Interface development</span></div><div><strong>JavaScript</strong><span>Product engineering</span></div><div><strong>APIs</strong><span>Systems integration</span></div></div>
          </div>
          <div className="hero-photo-wrap"><img className="hero-photo" src={bgImg} alt="Bryan Peens, full-stack developer" /><span className="photo-caption">DESIGN-MINDED. DETAIL-DRIVEN.</span></div>
        </div>
      </div>
      <div className="page-wrap"><a className="text-link" href="#selected-work"><FaArrowDown aria-hidden="true" /> Scroll to explore</a></div>
    </section>
  );
};

export default Hero;
