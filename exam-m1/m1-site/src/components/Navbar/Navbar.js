import React from 'react';
import './Navbar.css'; // Assurez-vous d'ajouter ce fichier CSS pour le style

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li>
          <a href="/dashboard" className="navbar-link">Classement</a>
        </li>
        <li>
          <a href="/authors" className="navbar-link">Auteurs</a>
        </li>
        <li>
          <a href="/books" className="navbar-link">Livres</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
