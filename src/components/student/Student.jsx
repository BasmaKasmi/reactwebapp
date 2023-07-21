import React, { useState } from 'react';
import classNames from 'classnames';
import './Student.css';
import status from '../../assets/statusup.svg';
import st from '../../assets/student.svg';
import cldr from '../../assets/calendar.svg';
import user from '../../assets/2 User.png';


const Student = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeButtonId, setActiveButtonId] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const[showAp, setshowAp] = useState(false);


  const handleClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowAp = () => {
    setshowAp(true)
  }
  const handleCloseShowAp = () => {
    setshowAp(false);
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
    document.body.classList.add('modal-open');
  };
  

  const handleOverlayClick = () => {
    setShowConfirmation(false);
    document.body.classList.remove('modal-open');
  };
  

  return (
    <div className='Emargements'>
      <div className="groups">
        <div className="column-head">
          <h3>{selectedTitle}</h3>
          <p className='day'>{selectedDay}</p>
        </div>
        <div className='card-container'>
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
        <div className={classNames('std', { 'active': activeButtonId })} onClick={handleClick}>
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
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal">
            <h2>Nom de l'étudiant</h2>
            <div className="recap-row">
              <img src={status} alt='' />
              <h3> Récapitulatif du groupe : </h3>
            </div>
            <div className='row'>
              <div className='col'>
                <h3>17</h3>
                <p className="description">Inscrits</p>
              </div>
              <div className='col'>
                <h3>2</h3>
                <p className="description">Abandon(s)</p>
              </div>
              <div className='col'>
                <h3>65%</h3>
                <p className="description">Présence</p>
              </div>
            </div>
            <div className="buttons-row">
              <button className="ap-button" onClick={handleShowAp}>Déclarer AP</button>
              <button className="an-button">Annuler</button>
            </div>
          </div>
        </div>
      )}
      {showAp && (
        <div className="modal-overlay" onClick={handleCloseShowAp}>
          <div className="modal">
            <h2>Nom de l'étudiant</h2>
            <div className="agenda-row">
              <img src={cldr} alt='' />
                <h3>Choisir dates :</h3>
            </div>
            <div className="date-inputs">
              <input type="text" placeholder="01/01/2023" />
              <input type="text" placeholder="28/01/2023" />
              <img src={st} alt='' />
            </div>
            <div className="ap-row">
              <img src={user} alt='' />
                <h3>Sélectionner les AP :</h3>
            </div>
            <div className="date-card">
            <h3>01/02/2023</h3>
            </div>
            <div className="date-card">
            <h3>14/07/2023</h3>
            </div>
              <div className="buttons-row">
                <button className="validate-button" onClick={handleConfirmationClick}>Valider</button>
                <button className="cancel-button">Annuler</button>
              </div>
          </div>
        </div>
)}
    </div>
  );
}

export default Student;