import React, { useState, useEffect } from 'react';
import './EcuadorCultureMatchGame.css'; // Create a CSS file for styling

const icons = [
  { name: 'Rumiñahui', image: 'rumiñahui.png' },
  { name: 'Inti', image: 'inti.png' }, // Inti - Sun God
  // ... more icons
];

// Shuffle function
const shuffleArray = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

const EcuadorCultureMatchGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    // Double each icon for matching and shuffle
    setCards(shuffleArray([...icons, ...icons]));
  }, []);

  const flipCard = (index) => {
    // Game logic here
    // ...
  };

  return (
    <div className="game-container">
      <h2>Match the Icons of Ecuador</h2>
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="card" 
            onClick={() => flipCard(index)}
          >
            {/* Show card image or back based on state */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcuadorCultureMatchGame;
