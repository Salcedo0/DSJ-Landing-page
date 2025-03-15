// Contact.jsx
import React, { useState } from 'react';
import './Styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="section-header">
          <h2>Contáctanos</h2>
          <div className="section-divider">
            <span></span>
            <p>Iniciemos una colaboración</p>
            <span></span>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>¿Listo para impulsar tu negocio?</h3>
            <p>
              En DSJ Tech Solutions estamos listos para ayudarte a transformar tus ideas en soluciones
              tecnológicas de alto impacto. Completa el formulario y nuestro equipo se pondrá en contacto
              contigo para iniciar esta colaboración.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>contacto@dsjtechsolutions.com</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>+57 (300) 7897419</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Medellin Antioquia ,Colombia</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Empresa"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="¿Cómo podemos ayudarte?"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;