// Importation des modules nécessaires
import React from 'react';
import { Link } from 'react-router-dom';
import './Password.css';

// Déclaration du composant fonctionnel Password
const Password = () => {
  return (
    <div className="safe-area">
      <div className="password-container">
      {/* Titre de la page */}
        <h1 className="title">J'ai oublié mon mot de passe</h1>
        {/* Sous-titre de la page */}
        <p className="subtitle">Entrez votre addresse e-mail</p>
        {/* Champ d'entrée pour l'identifiant */}
        <div className="input-container">
          <input className="input-field" type="text" placeholder="Identifiant ou e-mail " />
        </div>
        {/* Lien vers la page de tableau de bord */}
        <Link to="/" className="password-button">Réinitialiser le mot de passe</Link>
        <div className="image-container">
        {/* Image affiché*/}
          <img className="image" src={require('../../assets/logo shatibi.png')} alt="ShatibiPic" />
        </div>
      </div>
    </div>
  );
};

// Exportation du composant Password comme composant par défaut
export default Password;