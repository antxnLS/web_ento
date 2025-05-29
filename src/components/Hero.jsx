import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>Explora el mundo con nosotros</h1>
      <p>Viajes inolvidables a destinos increíbles.</p>
      <Link to="/destinos">
        <button>Descubrir ahora</button>
      </Link>
    </section>
  );
}

export default Hero;
