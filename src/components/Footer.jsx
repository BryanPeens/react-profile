import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Bryan Peens</span>
        <span className="footer-note">Designed & built with care.</span>
        <div className="footer-socials">
          <a href="https://github.com/BryanPeens" target="_blank" rel="noopener noreferrer" aria-label="Bryan Peens on GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/bryan-peens-558113204/" target="_blank" rel="noopener noreferrer" aria-label="Bryan Peens on LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}