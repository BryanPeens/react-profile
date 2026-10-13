import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavTabs = () => {
  const currentPage = useLocation().pathname;
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav((isOpen) => !isOpen);
  const closeMenu = () => setNav(false);
  const links = [['Home', '/'], ['About', '/About'], ['Portfolio', '/Portfolio'], ['Resume', '/Resume']];

  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Main navigation">
        <Link to="/" className="brand" onClick={closeMenu} aria-label="Bryan Peens, home"><span className="brand-mark">BP</span><span>Bryan Peens</span></Link>
        <button className="menu-toggle" type="button" onClick={handleClick} aria-label={nav ? 'Close navigation' : 'Open navigation'} aria-expanded={nav}>{nav ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}</button>
        <ul className={`nav-links${nav ? ' nav-open' : ''}`}>
          {links.map(([label, path]) => <li key={path}><Link to={path} onClick={closeMenu} className={currentPage === path ? 'nav-link active' : 'nav-link'}>{label}</Link></li>)}
          <li><Link to="/Contact" onClick={closeMenu} className="nav-contact">Let’s talk <span aria-hidden="true">↗</span></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavTabs;
