// Footer.jsx
import React from 'react';
import './Styles/Footer.css';
import logo from '../assets/DSJTECH4.svg'; // el logo de DSJ Tech Solutions


//hacer cambios al footer, para que se vea mejor y arreglar la parte de los enlaces para linkear las redes sociales
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
                <li><i className="fas fa-envelope"></i>contacto@dsjtechsolutions.com</li>
                <li><i className="fas fa-phone"></i> +57 300 7897419</li>
                <li><i className="fas fa-map-marker-alt"></i> Medellin, Colombia</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DSJ Tech Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;