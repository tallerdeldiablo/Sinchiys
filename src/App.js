import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Personajes from './components/Personajes';
import CharacterDetailPage from './components/CharacterDetailPage';
import Videos from './components/Videos';
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
          <Route path="/personajes/:characterId" element={<CharacterDetailPage />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
