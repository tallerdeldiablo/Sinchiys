import React from 'react';
import { Link } from 'react-router-dom';
import './GamesList.css'; // Asegúrate de que el archivo CSS esté correctamente vinculado

const GamesList = () => {
  return (
    <div className="games-list-container">
      <h1>Juegos Disponibles</h1>
      <ul>
        <li><Link to="/juegos/trivia">Trivia sobre Cultura Inca y Ecuatoriana</Link></li>
        <li><Link to="/juegos/condor">Vuelo del Cóndor</Link></li>
        <li><Link to="/juegos/adivina-personaje">Adivina el Personaje</Link></li>
        <li><Link to="/juegos/memoria">Memoria</Link></li>
        {/* Agrega aquí otros juegos según sea necesario */}
      </ul>
    </div>
  );
};

export default GamesList;
