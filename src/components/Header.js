import React, { useState } from 'react';
import '../styles/Header.css';

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
            <li><a href="">About</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Work</a></li>
            <li><a className='resume' href="">Resume</a></li>
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
