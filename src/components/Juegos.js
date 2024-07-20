import React from 'react';
import { Link } from 'react-router-dom';
import './Juegos.css'; // Asegúrate de que este archivo CSS está vinculado correctamente

const games = [
  { id: 'quiz-game', name: 'Juego de Preguntas', link: '/game2' },
  { id: 'memory-match', name: 'Juego de Memoria', link: '/game3' },
  { id: 'drag-drop-puzzle', name: 'Rompecabezas de Arrastrar y Soltar', link: '/game4' },
  { id: 'character-quiz', name: 'Trivia de Personajes', link: '/game5' },
  { id: 'condor-flight', name: 'Vuelo del Cóndor', link: 'https://ricoding.com/Shunku/Juegos/Condor/', external: true }
];

const Juegos = () => {
  return (
    <div className="juegos-container">
      {games.map(game => (
        game.external ? (
          <a key={game.id} href={game.link} className="game-card" target="_blank" rel="noopener noreferrer">
            <div className="game-name">{game.name}</div>
          </a>
        ) : (
          <Link key={game.id} to={game.link} className="game-card">
            <div className="game-name">{game.name}</div>
          </Link>
        )
      ))}
    </div>
  );
};

export default Juegos;
