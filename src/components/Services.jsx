// Services.jsx
import React from 'react';
import './Services.css';
import { FaCode, FaLayerGroup, FaTasks, FaUsers, FaPlug } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Desarrollo de Software a la Medida',
      description: 'Creación de aplicaciones y sistemas adaptados a las necesidades específicas de cada cliente.'
    },
    {
      icon: <FaLayerGroup />,
      title: 'Arquitectura y Consultoría Tecnológica',
      description: 'Diseño de infraestructuras tecnológicas escalables y eficientes.'
    },
    {
      icon: <FaTasks />,
      title: 'Metodologías Ágiles',
      description: 'Implementación de procesos ágiles para optimizar la gestión de proyectos.'
    },
    {
      icon: <FaUsers />,
      title: 'Células Ágiles',
      description: 'Equipos especializados para garantizar la correcta implementación de soluciones.'
    },
    {
      icon: <FaPlug />,
      title: 'Integración de Sistemas',
      description: 'Conectamos plataformas y herramientas para mejorar la eficiencia operativa.'
    }
  ];

  return (
    <section className="services" id="servicios">
      <div className="section-header">
        <h2>Servicios de Tecnología de la información</h2>
        <div className="section-divider">
          <span></span>
          <p>Pasión y calidad superior</p>
          <span></span>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;