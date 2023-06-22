import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="safe-area">
      <div className="login-container">
        <h1 className="title">Espace Professeur</h1>
        <p className="subtitle">Connectez-vous et notez l'assiduité de vos groupes</p>
        <div className="input-container">
          <i className="icon alternate-email-icon"></i>
          <input className="input-field" type="text" placeholder="Identifiant" />
        </div>
        <div className="input-container">
          <i className="icon lock-icon"></i>
          <input className="input-field" type="password" placeholder="Password" />
          <button className="forgot-password">Forgot?</button>
        </div>
        <Link to="/dashboard" className="login-button">Se connecter</Link>
        <div className="image-container">
          <img className="image" src={require('../../assets/ShatibiPic.png')} alt="ShatibiPic" />
        </div>
      </div>
    </div>
  );
};

export default Login;