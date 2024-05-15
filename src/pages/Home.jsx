import React from "react";
import "../assets/hero_section.css";
import image from "../assets/images/pp1.jpeg";
import Skills from "../components/skills";

export default function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-image">
          <img src={image} alt="Developer" />
        </div>
        <div className="hero-details">
          <h1>Bryan Peens</h1>
          <h2>React Developer</h2>
          <p>
            Passionate about building responsive and user-friendly web
            applications using React.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}
