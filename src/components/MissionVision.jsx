// MissionVision.jsx
import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision" id="mision-vision">
      <div className="container">
        <div className="mv-content">
          <div className="mv-card mission">
            <div className="mv-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h2>Misión</h2>
            <p>
              Diseñar, implementar y gestionar soluciones tecnológicas innovadoras que optimicen los procesos 
              empresariales. A través de metodologías ágiles y un enfoque arquitectónico sólido, garantizamos 
              el desarrollo eficiente y escalable de software, impulsando la transformación digital de nuestros 
              clientes.
            </p>
          </div>
          
          <div className="mv-card vision">
            <div className="mv-icon">
              <i className="fas fa-binoculars"></i>
            </div>
            <h2>Visión</h2>
            <p>
              Ser líderes en la creación de soluciones tecnológicas de alto impacto, reconocidos por nuestra 
              excelencia en arquitectura de software y metodologías ágiles. Aspiramos a transformar la industria
              mediante la innovación, la eficiencia y el compromiso con la calidad, contribuyendo al éxito y 
              crecimiento sostenible de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;