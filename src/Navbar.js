// src/Navbar.js
import { Link, useLocation } from 'react-router-dom';
import './App.css';

function Navbar() {
  const location = useLocation();

  return (
    <ul className="navbar">
      <li>
        <Link className={location.pathname === '/' ? 'active' : ''} to="/">index</Link>
      </li>
      <li>
        <Link className={location.pathname === '/page4' ? 'active' : ''} to="/page4">4</Link>
      </li>
      <li>
        <Link className={location.pathname === '/page5' ? 'active' : ''} to="/page5">5</Link>
      </li>
      <li>
        <Link className={location.pathname === '/page6' ? 'active' : ''} to="/page6">6</Link>
      </li>
    </ul>
  );
}

export default Navbar;
