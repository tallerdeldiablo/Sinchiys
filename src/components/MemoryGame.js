import React, { useState, useEffect } from 'react';
import './MemoryGame.css'; // Asegúrate de crear este archivo para tus estilos

const MemoryGame = () => {
  // Inicializa un estado para las tarjetas. Ejemplo: ['A', 'A', 'B', 'B']
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);

  useEffect(() => {
    // Aquí deberías mezclar tus tarjetas y establecerlas en el estado 'cards'
  }, []);

  const onCardClick = (index) => {
    setFlippedIndices([...flippedIndices, index]);
    // Aquí deberías añadir la lógica para verificar si dos tarjetas coinciden
  };

  return (
    <div className="memory-game">
      {cards.map((card, index) => (
        <div key={index} onClick={() => onCardClick(index)}>
          {flippedIndices.includes(index) ? card : " "}
        </div>
      ))}
    </div>
  );
};

export default MemoryGame;
