import React, { useState } from 'react';
import classNames from 'classnames';
import './Em.css';


const Em = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeButtonId, setActiveButtonId] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showGroupesContent, setShowGroupesContent] = useState(false); // Contrôle de l'affichage du contenu dans la colonne "groupes"

  const handleCardClick = (cardId, cardTitle, cardDay) => {
    setActiveCard(cardId);
    setSelectedTitle(cardTitle);
    setSelectedDay(cardDay);
    setShowGroupesContent(true); // Affichage du contenu de la colonne "groupes" après avoir cliqué sur une carte

  };
  const handleButtonClick = (buttonId) => {
    setActiveButtonId((prevState) => (prevState === buttonId ? null : buttonId));
  };
  const handleConfirmationClick = () => {
    setShowConfirmation(true);
    document.body.classList.add('modal-open');
    setShowGroupesContent(true); // Affichage du contenu de la colonne "groupes" après avoir cliqué sur "Valider la feuille d'émargement"
  };
  

  const handleOverlayClick = () => {
    setShowConfirmation(false);
    document.body.classList.remove('modal-open');
  };
  

  return (
    <div className='Emargements'>
      <div className="co">
        <div className="column-header">
          <h2>Mes emargements</h2>
        </div>
        <div className="card-container">
          <div
            className={`card ${activeCard === 'card-1' ? 'clicked' : ''}`}
            onClick={() => handleCardClick('card-1', 'Sciences islamiques 2ème année', 'Ven 18h00 à 21h00')}
          >
            <h3>Sciences islamiques 2ème année</h3>
            <div className='row'>
              <p className='day'>Ven 18h00 à 21h00</p>
              <p className='session'>11/32</p>
            </div>
          </div>
          
          <div
            className={`card ${activeCard === 'card-2' ? 'clicked' : ''}`}
            onClick={() => handleCardClick('card-2', 'Sciences islamiques 1ère année', 'Sam 14h30 à 17h30')}
          >
            <h3>Sciences islamiques 1ère année</h3>
            <div className='row'>
              <p className='day'>Sam 14h30 à 17h30</p>
              <p className='session'>11/32</p>
            </div>
          </div>
          <div
            className={`card ${activeCard === 'card-3' ? 'clicked' : ''}`}
            onClick={() => handleCardClick('card-3', 'Sciences islamiques 3èmee année', 'Sam 14h30 à 17h30')}
          >
            <h3>Sciences islamiques 3ème année</h3>
            <div className='row'>
              <p className='day'>Sam 14h30 à 17h30</p>
              <p className='session'>11/32</p>
            </div>
          </div>
        </div>
      </div>
      { showGroupesContent && (
      <div className="groupes">
        <div className="column-head">
          <h3>{selectedTitle}</h3>
          <p className='day'>{selectedDay}</p>
        </div>
        <div className='card-container'>
        <div className={classNames('std')}>
          <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
          <div className="student-buttons">
            <button
            className="ap-button"
            >
            AP 
            </button>
            <button
            className="ai-button"
            >
            AI
            </button>
            </div>
          </div>
        </div>
        <div className={classNames('std')}>
          <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
          <div className="student-buttons">
            <button
            className="ap-button"
            >
            AP 
            </button>
            <button
            className="ai-button"
            >
            AI
            </button>
            </div>
          </div>
        </div>
        </div>
        <div className='card-container'>
        <div className={classNames('std')}>
          <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
          <div className="student-buttons">
            <button
            className="ap-button"
            >
            AP 
            </button>
            <button
            className="ai-button"
            >
            AI
            </button>
            </div>
          </div>
        </div>
        <div className={classNames('std')}>
          <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
          <div className="student-buttons">
            <button
            className="ap-button"
            >
            AP 
            </button>
            <button
            className="ai-button"
            >
            AI
            </button>
            </div>
          </div>
        </div>
        </div>
        <div className='button-container'>
        <button className="fem-button" onClick={handleConfirmationClick}>
          Valider la feuille d'émargement
        </button>
        <button className="an-button">Annuler</button>
        {showConfirmation && (
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="confirmation-card">
        <div className="icon-container">
              <i className="fas fa-check-circle"></i>
            </div>
          <div className="confirmation-content">
            <h3>Vous déclarez avoir :</h3>
            <div className="confirmation-details">
              <p>Nb Présents</p>
              <p>Nb Absents</p>
            </div>
            <div className="confirmation-buttons">
              <button className="valider-button">Valider</button>
              <button className="annuler-button">Annuler</button>
            </div>
          </div>
        </div>
      </div>
    )}
        </div>
      </div>
      )}
    </div>
  );
}

export default Em;