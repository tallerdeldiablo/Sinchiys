// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import portadaImage from '../assets/img/portada.png'; // Import the image

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src={portadaImage} alt="Cover" className="hero-image" />
      </div>

      <div className="menu-container">
        <Link to="/personajes" className="menu-item">Personajes</Link>
        {/* Uncomment and add links to other sections like Juegos and Videos */}
        {/* <Link to="/juegos" className="menu-item">Juegos</Link> */}
        {/* <Link to="/videos" className="menu-item">Videos</Link> */}
      </div>
    </div>
  );
};

export default HomePage;
