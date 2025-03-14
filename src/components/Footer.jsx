// Footer.jsx
import React from 'react';
import './Footer.css';
import logo from '../assets/DSJTECH2.svg'; // el logo de DSJ Tech Solutions

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="DSJ Tech Solutions Logo" />
            <div className="logo-text">
              <h3>DSJ TECH</h3>
              <p>SOLUTIONS</p>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Enlaces rápidos</h4>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#quienes-somos">Quiénes Somos</a></li>
                <li><a href="#mision-vision">Misión y Visión</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#servicios">Desarrollo de Software</a></li>
                <li><a href="#servicios">Arquitectura Tecnológica</a></li>
                <li><a href="#servicios">Metodologías Ágiles</a></li>
                <li><a href="#servicios">Integración de Sistemas</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contáctanos</h4>
              <ul className="contact-list">
                <li><i className="fas fa-envelope"></i> vivialexxa@gmail.com</li>
                <li><i className="fas fa-phone"></i> +57 300 7897419</li>
                <li><i className="fas fa-map-marker-alt"></i> Medellin, Colombia</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DSJ Tech Solutions. Todos los derechos reservados.</p>
          {/* <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;