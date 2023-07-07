import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <div className="app-container">
      {/* Small navbar for small screens */}
      <nav className="navbar-small">
        <div className="navbar-small-title">
          <h1>Tableau de Bord</h1>
        </div>
      </nav>

      {/* Full-size navbar for desktop screens */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1> Bonjour Professeur, </h1>
          <p>Bienvenue dans votre espace personnel</p>
        </div>
        <div className="navbar-right">
          <Link to="/">Se déconnecter</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
