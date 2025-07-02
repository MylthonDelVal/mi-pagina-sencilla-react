import React from 'react';
import './Header.css'; // Crearemos este archivo CSS

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Mi Logo" className="logo-img" /> {/* Asegúrate de poner tu logo en la carpeta `public` */}
        <span className="logo-text">Guia de viajes</span>
      </div>
      <nav className="nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
        <a href="#transparencia">Transparencia</a>
      </nav>
    </header>
  );
}

export default Header;