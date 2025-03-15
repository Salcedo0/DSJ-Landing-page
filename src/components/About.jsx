// About.jsx
import React from 'react';
import './Styles/About.css';
import logo from '../assets/DSJTECH3.svg';

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
          <div className="about-image">
            <img src={logo} alt="DSJ Tech Solutions Logo" className='imagen-dsj' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;