import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Personajes from './components/Personajes';
import CharacterDetailPage from './components/CharacterDetailPage';
import Videos from './components/Videos';
import TriviaGame from './components/TriviaGame';
import GamesList from './components/GamesList';
import MemoryGame from './components/MemoryGame';
import GuessCharacterGame from './components/GuessCharacterGame';
import Juegos from './components/Juegos';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/juegos" element={<Juegos />} />
          <Route path="/personajes/:characterId" element={<CharacterDetailPage />} />
          <Route path="/juegos" element={<GamesList />} />
          <Route path="/juegos/trivia" element={<TriviaGame />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/juegos/memoria" element={<MemoryGame />} />
          <Route path="/juegos/GuessCharacterGame" element={<GuessCharacterGame />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
