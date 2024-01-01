import React from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetailPage.css';
import characterData from '../characterData';

const CharacterDetailPage = () => {
  const { characterId } = useParams();
  const character = characterData[characterId.toLowerCase()] || {};

  return (
    <div className="character-detail-page">
      <h1 className="character-title">{character.name}</h1> {/* Título movido aquí */}
      <div className="character-detail-container">
        <img src={character.image} alt={character.name} className="character-detail-image" />
        <div className="text-description">
          <p className="character-description">{character.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPage;
