import React from 'react';
import { Link } from 'react-router-dom';
import './GamesList.css';

const GamesList = () => {
  return (
    <div className="games-list-container">
      <h1>Juegos Disponibles</h1>
      <ul>
        <li><Link to="/juegos/trivia">Trivia sobre Cultura Inca y Ecuatoriana</Link></li>
        <li><Link to="/juegos/memoria">Juego de Memoria</Link></li>
        <li><Link to="/juegos/GuessCharacterGame">Juego adivinar</Link></li>
        {/* Otros juegos aquí */}
      </ul>
    </div>
  );
};

export default GamesList;
