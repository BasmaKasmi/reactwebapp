import React from 'react';
import './Dashboard.css'; // Importe les styles pour le composant Dashboard

// Définition d'un composant fonctionnel Dashboard
const Dashboard = () => {
  // Retourne du JSX qui va être rendu dans l'application
  return (
    <div className="dashboard">
      <div className="column">
        <div className="column-header orange-bg"> 
          <h2>Emargements non faits</h2> 
        </div>
        <h1>Jeudi 15 Dec 2022</h1> 
        <div className="card white-bg">
          <h3>Sciences islamiques 2ème année</h3>
          <p>Jeu 18h00 à 12h00</p> 
        </div>
      </div>
      <div className="column">
        <div className="column-header orange-bg">
          <h2>Mes emargements</h2>
        </div>
        <h1>Samedi 17 Dec 2022</h1>
        <div className="card white-bg">
          <h3>Sciences islamiques 2ème année</h3>
          <p>Jeu 18h00 à 12h00</p>
        </div>
      </div>
      <div className="column">
        <div className="column-header orange-bg">
          <h2>Mon agenda</h2>
        </div>
        <h1>Samedi 17 Dec 2022</h1>
        <div className="card white-bg">
          <h3>Sciences islamiques 2ème année</h3>
          <p>Jeu 18h00 à 12h00</p>
        </div>
        <div className="card white-bg">
          <h3>Sciences islamiques 1ére année</h3>
          <p>Jeu 18h00 à 12h00</p>
        </div>
        <h1>Samedi 19 Dec 2022</h1>
        <div className="card white-bg">
          <h3>Sciences islamiques 2ème année</h3>
          <p>Jeu 18h00 à 12h00</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; // Exporte le composant Dashboard pour être utilisé aille