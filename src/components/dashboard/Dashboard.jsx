import React from 'react';
import './Dashboard.css'; // Importe les styles pour le composant Dashboard

// Définition d'un composant fonctionnel Dashboard
const Dashboard = () => {
  // Retourne du JSX qui va être rendu dans l'application
  return (
    <div className="dashboard">
      <div className="column-Enf">
        <div className="column-header">
          <h2>Emargements non faits</h2> 
        </div>
        <h1 className='date'>Jeudi 15 Dec 2022</h1> 
        <div className="card">
          <h3>Sciences islamiques 2ème année</h3>
          <div className='row'>
          <p className='day'>Jeu 18h00 à 12h00</p>
          <p className='session'>11/32</p>
          </div> 
        </div>
      </div>
      <div className="pink-box">
        <div className="title">
          <h2>Emargement(s) non fait(s)</h2>
        </div>
        <div className="content">
          <div className="entry">
            <h3>Sciences islamiques 2ème année</h3>
            <div className="details">
              <p className="date">Samedi 10 Déc 2022</p>
              <p className="count">11/32</p>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="column-header orange-bg">
          <h2>Mes emargements</h2>
        </div>
        <h1 className='date'>Samedi 17 Dec 2022</h1>
        <div className="card">
          <h3>Sciences islamiques 2ème année</h3>
          <div className='row'>
          <p className='day'>Jeu 18h00 à 12h00</p>
          <p className='session'>11/32</p>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="column-header orange-bg">
          <h2>Mon agenda</h2>
        </div>
        <h1 className='date'>Samedi 17 Dec 2022</h1>
        <div className="card">
          <h3>Sciences islamiques 2ème année</h3>
          <div className='row'>
          <p className='day'>Jeu 18h00 à 12h00</p>
          <p className='session'>11/32</p>
          </div>
        </div>
        <div className="card">
          <h3>Sciences islamiques 1ére année</h3>
          <div className='row'>
          <p className='day'>Jeu 18h00 à 12h00</p>
          <p className='session'>11/32</p>
          </div>
        </div>
        <h1 className='date'>Samedi 19 Dec 2022</h1>
        <div className="card white-bg">
          <h3>Sciences islamiques 2ème année</h3>
          <div className='row'>
          <p className='day'>Jeu 18h00 à 12h00</p>
          <p className='session'>11/32</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; // Exporte le composant Dashboard pour être utilisé aille