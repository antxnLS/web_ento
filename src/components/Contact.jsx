import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      <form className="contact-form">
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
}

export default Contact;
