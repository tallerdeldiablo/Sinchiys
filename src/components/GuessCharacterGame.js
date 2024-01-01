import React, { useState, useEffect } from 'react';
import charactersData from '../characterData'; // Asegúrate de tener un archivo con los datos de los personajes
import './GuessCharacterGame.css'; // Crea un archivo CSS para los estilos

const GuessCharacterGame = () => {
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    if (charactersData.length > 0) {
      const randomIndex = Math.floor(Math.random() * charactersData.length);
      setCurrentCharacter(charactersData[randomIndex]);
    }
  }, []);
  

  const handleSubmit = () => {
    if (selectedOption === currentCharacter.name) {
      // Manejar la respuesta correcta
    } else {
      // Manejar la respuesta incorrecta
    }
  };

  if (!currentCharacter) return <div>Cargando...</div>;

  return (
    <div className="guess-character-game">
      <img src={currentCharacter.image} alt={currentCharacter.name} />
      {/* Opciones de respuesta */}
      {/* ... */}
      <button onClick={handleSubmit}>Enviar Respuesta</button>
    </div>
  );
};

export default GuessCharacterGame;
