import React from 'react';
import './MainContent.css'; // Crearemos este archivo CSS

function MainContent() {
  return (
    <main className="main-content">
      <div className="hero-section">
        {/* Asegúrate de poner tu imagen principal en la carpeta `public` */}
        <img src="/main-image.jpg" alt="Personas saludando" className="hero-image" />
        <div className="hero-overlay">
          {/* Aquí podrías agregar un título o texto si lo deseas, como en tu imagen */}
          {/* <h1 className="hero-title">Un Nuevo Comienzo</h1> */}
        </div>
      </div>
      <div className="text-section">
        <h2>Bienvenidos a Nuestro Sitio</h2>
        <p>
          Aquí encontrarás información relevante sobre nuestra misión y los servicios que ofrecemos a la comunidad.
          Estamos comprometidos con el desarrollo y el bienestar de todos.
        </p>
        {/* Puedes añadir más texto o componentes aquí */}
      </div>
    </main>
  );
}

export default MainContent;