// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Asegúrate de crear este archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} SinchiyAwka - Todos los derechos reservados.</p>
      {/* Puedes agregar más contenido aquí, como enlaces o información de contacto */}
    </footer>
  );
};

export default Footer;
