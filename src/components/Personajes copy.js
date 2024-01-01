// src/components/Personajes.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Personajes.css'; // Make sure to create this CSS file

import PintagImage from '../assets/pintag.png';
// Use the correct relative path from the current file to the assets/images folder

// Repeat for other character images...

const characters = [
  { id: 'pintag', name: 'Pintag', image: PintagImage },
  // ... other characters
];

const Personajes = () => {
  return (
    <div className="characters-container">
      {characters.map((character) => (
        <Link key={character.id} to={`/personajes/${character.id}`} className="character-card">
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Personajes;
