// Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <div className="vertical-line"></div>
        <div className="hero-text">
          <h1>Soportamos y optimizamos procesos de negocio, ofreciendo servicios de software, construidos con 
            <span className="highlight"> pasión y calidad superior.</span>
          </h1>
          <div className="cta-container">
            <a href="#contacto" className="cta-button">Hablemos de negocios <span className="arrow">»</span></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;