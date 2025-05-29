import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">TravelNow</Link></div>
      <ul className="nav-links">
        <li><Link to="/destinos">Destinos</Link></li>
        <li><Link to="/sobre">Sobre Nosotros</Link></li>
        <li><Link to="/reseñas">Reseñas</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
