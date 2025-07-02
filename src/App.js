import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      {/* Puedes añadir un footer aquí si lo deseas */}
    </div>
  );
}

export default App;