import React, { useState } from 'react';
import classNames from 'classnames';
import './Student.css';

const Student = ({ title, day }) => {
  const [activeButtonId, setActiveButtonId] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleButtonClick = (buttonId) => {
    setActiveButtonId((prevState) => (prevState === buttonId ? null : buttonId));
  };

  const handleConfirmationClick = () => {
    setShowConfirmation(true);
    document.body.classList.add('modal-open');
  };

  const handleOverlayClick = () => {
    setShowConfirmation(false);
    document.body.classList.remove('modal-open');
  };

  

  return (
    <div className='Emargements'>
      <div className="groupes">
        <div className="column-head">
        <h3>{title}</h3>
        <p className="day">{day}</p>
        </div>
        <div className='card-container'>
        <div className={classNames('std', { 'active': activeButtonId })}>
          <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
            <div className="student-buttons">
            <button
            className={`ap-button ${activeButtonId === 'ap' ? 'active' : ''}`}
            onClick={() => handleButtonClick('ap')}
            >
            AP 
            </button>
            <button
            className={`ai-button ${activeButtonId === 'ai' ? 'active' : ''}`}
            onClick={() => handleButtonClick('ai')}
            >
            AI
            </button>
            </div>
          </div>
        </div>
        <div className={classNames('std', { 'active': activeButtonId })}>
          <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
            <div className="student-buttons">
            <button
            className={`ap-button ${activeButtonId === 'ap' ? 'active' : ''}`}
            onClick={() => handleButtonClick('ap')}
            >
            AP 
            </button>
            <button
            className={`ai-button ${activeButtonId === 'ai' ? 'active' : ''}`}
            onClick={() => handleButtonClick('ai')}
            >
            AI
            </button>
            </div>
          </div>
        </div>
        </div>
        <div className='card-container'>
        <div className={classNames('std', { 'active': activeButtonId })}>
          <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
            <div className="student-buttons">
            <button
            className={`ap-button ${activeButtonId === 'ap' ? 'active' : ''}`}
            onClick={() => handleButtonClick('ap')}
            >
            AP 
            </button>
            <button
            className={`ai-button ${activeButtonId === 'ai' ? 'active' : ''}`}
            onClick={() => handleButtonClick('ai')}
            >
            AI
            </button>
            </div>
          </div>
        </div>
        <div className={classNames('std', { 'active': activeButtonId })}>
          <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
            <div className="student-buttons">
            <button
            className={`ap-button ${activeButtonId === 'ap' ? 'active' : ''}`}
            onClick={() => handleButtonClick('ap')}
            >
            AP 
            </button>
            <button
            className={`ai-button ${activeButtonId === 'ai' ? 'active' : ''}`}
            onClick={() => handleButtonClick('ai')}
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
    </div>
  );
}

export default Student;