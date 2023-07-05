// Importation des modules nécessaires
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaUserCircle } from 'react-icons/fa';
import { BiLock } from 'react-icons/bi';

// Déclaration du composant fonctionnel Login
const Login = () => {
  return (
    <center className="safe-area">
      <div className="login-container">
      {/* Titre de la page */}
        <h1 className="title">Espace Professeur</h1>
        {/* Sous-titre de la page */}
        <p className="subtitle">Connectez-vous et notez l'assiduité de vos groupes</p>
        {/* Champ d'entrée pour l'identifiant */}
        <div className="input-container">
          <FaUserCircle className="icon alternate-email-icon"/>
          <input className="input-field" type="text" placeholder="Identifiant" />
        </div>
        {/* Champ d'entrée pour le mot de passe */}
        <div className="input-container">
          <BiLock className="icon lock-icon"/>
          <input className="input-field" type="password" placeholder="Password" />
          {/* Bouton pour mot de passe oublié */}
        </div>
        {/* Lien vers la page de tableau de bord */}
        <Link to="/dashboard" className="login-button">Se connecter</Link>
        <div className="image-container">
        {/* Image affiché*/}
          <img className="image" src={require('../../assets/logo shatibi.png')} alt="ShatibiPic" />
        </div>
      </div>
    </center>
  );
};

// Exportation du composant Login comme composant par défaut
export default Login;