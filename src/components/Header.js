import React, { useState } from 'react';
import '../styles/Header.css';
import resume from "../assets/Resume.pdf"
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div id='header-wrapper'>
        <div className='logo'>
          <h1>Hassan</h1>
        </div>
        <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about-wrapper">About</a></li>
            <li><a href="https://11a55an.medium.com/">Blog</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work-wrapper">Work</a></li>
            <li><a className='resume' href={resume}>Resume</a></li>
          </ul>
        </div>
        <div className='toggle-button' onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
