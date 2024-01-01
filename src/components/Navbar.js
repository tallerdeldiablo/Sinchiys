import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this points to the location of your Navbar.css file
import logoImage from '../assets/img/logo.png'; // Update with the correct relative path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoImage} alt="SinchiyAwka" /> {/* Use the imported logo image here */}
        </Link>
      </div>
      <ul className="nav-links">
        {/* Navigation links */}
        <li><Link to="/" className="nav-item">Inicio</Link></li>
        <li><Link to="/personajes" className="nav-item">Personajes</Link></li>
        <li><Link to="/juegos" className="nav-item">Juegos</Link></li>
        <li><Link to="/videos" className="nav-item">Videos</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
