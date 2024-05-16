import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png'; 
import { FaBars, FaTimes } from 'react-icons/fa';

const NavTabs = () => {
  const currentPage = useLocation().pathname;
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed z-10 top-0 left-0 w-full h-32 px-8 bg-transparent text-gray-300">
      <div className="container mx-auto flex items-center justify-between h-full">
        <div>
        <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
          <img src={logo} alt="Logo Image" className="w-16 h-16 rounded-full" />
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
              Resume
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden">
          {!nav ? (
            <FaBars className="text-gray-500 text-2xl" />
          ) : (
            <FaTimes className="text-gray-500 text-2xl" />
          )}
        </div>

        {/* Mobile menu */}
        <ul className={`${nav ? 'fixed top-20 left-0 w-full h-screen bg-[#0a192f]' : 'hidden'} md:hidden flex flex-col justify-center items-center`}>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/About" className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
              Portfolio
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavTabs;
