// Header.jsx
import React, { useState } from 'react';
import './Styles/Header.css';
import logo from '../assets/DSJTECH4.svg'; // el logo de DSJ Tech Solutions

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="DSJ Tech Solutions Logo" className="logo" />
        <div className="logo-text">
          <h1>DSJ TECH</h1>
          <p>SOLUTIONS</p>
        </div>
      </div>
      
      <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#quienes-somos">Quiénes Somos</a></li>
          <li><a href="#mision-vision">Misión y Visión</a></li>
          <li><a href="#contacto" className="contact-button">Contáctanos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;