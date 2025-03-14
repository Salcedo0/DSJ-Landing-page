// About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="quienes-somos">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Quiénes Somos</h2>
            <p>
              En DSJ Tech Solutions, nos especializamos en el diseño y desarrollo de soluciones tecnológicas 
              innovadoras que potencian la eficiencia y escalabilidad de los negocios. A través de metodologías 
              ágiles y una arquitectura de software robusta, garantizamos la implementación de proyectos 
              estratégicos que impulsan la transformación digital de nuestros clientes.
            </p>
            <p>
              Nuestro equipo de expertos en tecnología trabaja con un enfoque colaborativo, asegurando calidad, 
              seguridad y alto rendimiento en cada solución.
            </p>
          </div>
          <div className="hexagon-grid">
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;