// Importation des modules nécessaires
import React from 'react';
import { Link } from 'react-router-dom';
import './NewPassword.css';

// Déclaration du composant fonctionnel NewPassword
const NewPassword = () => {
  return (
    <div className="safe-area">
      <div className="newpassword-container">
      {/* Titre de la page */}
        <h1 className="title">Nouveau mot de passe</h1>
        {/* Sous-titre de la page */}
        <p className="subtitle">Créer votre nouveau mot de passe afin de pouvoir se connecter</p>
        {/* Champ d'entrée pour nouveau mot de passe */}
        <div className="input-container">
          <input className="input-field" type="password" placeholder=" Entrer nouveau mot de passe " />
        </div>
        {/* Champ d'entrée pour confirmer nouveau mot de passe */}
        <div className="input-container">
          <input className="input-field" type="password" placeholder=" Confirmer nouveau mot de passe " />
        </div>
        {/* Lien vers la page de tableau de bord */}
        <Link to="/" className="newpassword-button">Changer</Link>
        <div className="image-container">
        {/* Image affiché*/}
          <img className="image" src={require('../../assets/logo shatibi.png')} alt="ShatibiPic" />
        </div>
      </div>
    </div>
  );
};

// Exportation du composant NewPassword comme composant par défaut
export default NewPassword;