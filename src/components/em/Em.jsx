import React, { useState } from 'react';
import './Em.css';
import classNames from 'classnames';
import status from '../../assets/statusup.svg';
import st from '../../assets/student.svg';
import cldr from '../../assets/calendar.svg';
import user from '../../assets/2 User.png';

const Em = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeButtonId, setActiveButtonId] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const[declareAp, setdeclareAp] = useState(false);
  const [showValidation, setShowValidation] = useState(false); 
  

  const [ai1ButtonActive, setAi1ButtonActive] = useState(false);
  const [ap1ButtonActive, setAp1ButtonActive] = useState(false);
  const [ai2ButtonActive, setAi2ButtonActive] = useState(false);
  const [ap2ButtonActive, setAp2ButtonActive] = useState(false);
  const [ai3ButtonActive, setAi3ButtonActive] = useState(false);
  const [ap3ButtonActive, setAp3ButtonActive] = useState(false);
  const [ai4ButtonActive, setAi4ButtonActive] = useState(false);
  const [ap4ButtonActive, setAp4ButtonActive] = useState(false);
  
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateCardClick = (date) => {
    // Vérifier si la date est déjà sélectionnée
    if (selectedDates.includes(date)) {
      // Si elle est sélectionnée, la retirer de la liste
      setSelectedDates(selectedDates.filter(d => d !== date));
    } else {
      // Si elle n'est pas sélectionnée, l'ajouter à la liste
      setSelectedDates([...selectedDates, date]);
    }
  };


  const handleClick = () => {
    setShowModal(true);
  };
 
  const handleCardClick = (cardId, cardTitle, cardDay) => {
    setActiveCard(cardId);
    setSelectedTitle(cardTitle);
    setSelectedDay(cardDay);
  };
  const handleButtonClick = (buttonId) => {
    setActiveButtonId((prevState) => (prevState === buttonId ? null : buttonId));
  };

  const handleConfirmationClick = () => {
    setShowConfirmation(true);
  };
  const handleValidationClick = () => {
    setShowValidation(true);
  };
  const handleOverlayClick = () => {
    setShowConfirmation(false);
    setShowValidation(false);
    document.body.classList.remove('modal-open');
  };
  
  

  return (
    <div>
      <div className="groupes">
        <div className="column-head">
          <h3>{selectedTitle}</h3>
          <p className='day'>{selectedDay}</p>
        </div>
       
        <div className='card-container'>
        <div className={`std ${ap1ButtonActive ? 'ap-active' : ''} ${ai1ButtonActive ? 'ai-active' : ''}`}>
        <div className='row'>
        <div className='col' onClick={handleClick}>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
          <div className="student-buttons">
          <button
            className={`ap-b ${ap1ButtonActive ? 'active' : ''}`}
            onClick={() => {
              setAp1ButtonActive(!ap1ButtonActive);
              setAi1ButtonActive(false);
              }}
            >
            AP 
            </button>
           <button
            className={`ai-b ${ai1ButtonActive ? 'active' : ''}`}
            onClick={() => {
              setAi1ButtonActive(!ai1ButtonActive);
              setAp1ButtonActive(false);
              }}
            >
            AI
            </button>
            </div>
          </div>
      </div>
      <div className={`std ${ap2ButtonActive ? 'ap-active' : ''} ${ai2ButtonActive ? 'ai-active' : ''}`}>
        <div className='row'>
        <div className='col' onClick={handleClick}>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
          <div className="student-buttons">
          <button
            className={`ap-b ${ap2ButtonActive ? 'active' : ''}`}
            onClick={() => {
              setAp2ButtonActive(!ap2ButtonActive);
              setAi2ButtonActive(false);
              }}
            >
            AP 
            </button>
           <button
            className={`ai-b ${ai2ButtonActive ? 'active' : ''}`}
            onClick={() => {
              setAi2ButtonActive(!ai2ButtonActive);
              setAp2ButtonActive(false);
              }}
            >
            AI
            </button>
            </div>
          </div>
      </div> 
        </div>
        <div className='card-container'>
        <div className={`std ${ap3ButtonActive ? 'ap-active' : ''} ${ai3ButtonActive ? 'ai-active' : ''}`}>
        <div className='row'>
        <div className='col' onClick={handleClick}>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
          <div className="student-buttons">
          <button
            className={`ap-b ${ap3ButtonActive ? 'active' : ''}`}
            onClick={() => {
              setAp3ButtonActive(!ap3ButtonActive);
              setAi3ButtonActive(false);
              }}
            >
            AP 
            </button>
           <button
            className={`ai-b ${ai3ButtonActive ? 'active' : ''}`}
            onClick={() => {
              setAi3ButtonActive(!ai3ButtonActive);
              setAp3ButtonActive(false);
              }}
            >
            AI
            </button>
            </div>
          </div>
      </div>
      <div className={`std ${ap4ButtonActive ? 'ap-active' : ''} ${ai4ButtonActive ? 'ai-active' : ''}`}>
        <div className='row'>
        <div className='col' onClick={handleClick}>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
          <div className="student-buttons">
          <button
            className={`ap-b ${ap4ButtonActive ? 'active' : ''}`}
            onClick={() => {
              setAp4ButtonActive(!ap4ButtonActive);
              setAi4ButtonActive(false);
              }}
            >
            AP 
            </button>
           <button
            className={`ai-b ${ai4ButtonActive ? 'active' : ''}`}
            onClick={() => {
              setAi4ButtonActive(!ai4ButtonActive);
              setAp4ButtonActive(false);
              }}
            >
            AI
            </button>
            </div>
          </div>
      </div>
        </div>
        <div className='butt-container'>
        <button className="fem-butt" onClick={handleValidationClick}>
          Valider la feuille d'émargement
        </button>
        <button className="an-butt">Annuler</button>
        {showValidation && (
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="confirmation-card">
            <div className="icon-container">
              <i className="fas fa-check-circle"></i>
            </div>
          <div className="confirmation-content">
            <h3>Vous avez déclarez avoir :</h3>
            <div className="confirmation-details">
              <p> 17 présents </p>
              <p> 5 Absents </p>
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

export default Em;