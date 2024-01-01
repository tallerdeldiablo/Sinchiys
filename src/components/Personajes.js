import React from 'react';
import { Link } from 'react-router-dom';
import './Personajes.css'; // Asegúrate de que este archivo CSS esté bien diseñado
import characterData from '../characterData';

const Personajes = () => {
  return (
    <div className="personajes-container">
      {Object.keys(characterData).map(characterId => (
        <Link key={characterId} to={`/personajes/${characterId}`} className="character-card">
          <img src={characterData[characterId].image} alt={characterData[characterId].name} className="character-image" />
          <h2 className="character-name">{characterData[characterId].name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Personajes;
