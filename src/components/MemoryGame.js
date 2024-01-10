import React, { useState, useEffect } from 'react';
import EloyImage from '../assets/img/eloy.png';
import PintagImage from '../assets/img/pintag.png';
import QuilagoImage from '../assets/img/quilago.png';
import AtahualpaImage from '../assets/img/atahualpa.png';
import RuminahuiImage from '../assets/img/ruminahui.png';
import AntonImage from '../assets/img/anton.png';
import placeholderImage from '../assets/img/card-back.jpg';
import './MemoryGame.css';


const MemoryGame = () => {
  // Define las imágenes de personajes directamente aquí
  const characters = [
    { id: 1, name: "Eloy Alfaro", image: EloyImage },
    { id: 2, name: "Pintag", image: PintagImage },
    { id: 3, name: "Quilago", image: QuilagoImage },
    { id: 4, name: "Atahualpa", image: AtahualpaImage },
    { id: 5, name: "Rumiñahui", image: RuminahuiImage },
    { id: 6, name: "Anton", image: AntonImage },
    // Agrega más personajes según sea necesario
  ];

  // Genera pares de personajes para el juego
  const cards = characters.flatMap((character) => [
    { id: character.id * 2 - 1, character },
    { id: character.id * 2, character },
  ]);

  const [openedCards, setOpenedCards] = useState([]);
  const [matched, setMatched] = useState([]);

  // Función para barajar las cartas
  const shuffleCards = () => {
    const shuffledCards = [...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    return shuffledCards;
  };

  const [cardsList, setCardsList] = useState([]);

  // Efecto de montaje para mezclar las cartas una vez al montar el componente
  useEffect(() => {
    setCardsList(shuffleCards()); // Mezcla las cartas cuando el componente se monta
  }, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente

  const flipCard = (id) => {
    setOpenedCards((opened) => [...opened, id]);
  };

  // Lógica para manejar la coincidencia de tarjetas
  useEffect(() => {
    if (openedCards.length < 2) return;

    const firstMatched = cardsList[openedCards[0]];
    const secondMatched = cardsList[openedCards[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openedCards.length === 2) setTimeout(() => setOpenedCards([]), 1000);
  }, [openedCards, cardsList, matched]);

  return (
    <div className="memory-game">
      {cardsList.map((card, index) => (
        <div
          key={index}
          className={`card ${openedCards.includes(index) ? "flipped" : ""} 
                      ${matched.includes(card.id) ? "matched" : ""}`}
          onClick={() => !matched.includes(card.id) && flipCard(index)}
        >
          {openedCards.includes(index) || matched.includes(card.id) ? (
            <img src={card.character.image} alt={card.character.name} />
          ) : (
            <img src={placeholderImage} alt="Card Back" />
          )}
        </div>
      ))}
    </div>
  );
};

export default MemoryGame;
