// Importation des modules nécessaires
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

// Déclaration du composant fonctionnel Login
const Login = () => {
  return (
    <div className="safe-area">
      <div className="login-container">
      {/* Titre de la page */}
        <h1 className="title">Espace Professeur</h1>
        {/* Sous-titre de la page */}
        <p className="subtitle">Connectez-vous et notez l'assiduité de vos groupes</p>
        {/* Champ d'entrée pour l'identifiant */}
        <div className="input-container">
          <i className="icon alternate-email-icon"></i>
          <input className="input-field" type="text" placeholder="Identifiant" />
        </div>
        {/* Champ d'entrée pour le mot de passe */}
        <div className="input-container">
          <i className="icon lock-icon"></i>
          <input className="input-field" type="password" placeholder="Password" />
          {/* Bouton pour mot de passe oublié */}
          <button className="forgot-password">Forgot?</button>
        </div>
        {/* Lien vers la page de tableau de bord */}
        <Link to="/dashboard" className="login-button">Se connecter</Link>
        <div className="image-container">
        {/* Image affiché*/}
          <img className="image" src={require('../../assets/ShatibiPic.png')} alt="ShatibiPic" />
        </div>
      </div>
    </div>
  );
};

// Exportation du composant Login comme composant par défaut
export default Login;