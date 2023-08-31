import React, { useState } from 'react';
import status from '../../assets/statusup.svg';
import stu from '../../assets/2 User.png';
import cldr from '../../assets/calendar.svg';
import st from '../../assets/student.svg';
import user from '../../assets/useredit.svg';
import './Rappel.css';

const Rappel = () => {
  const [showModal, setShowModal] = useState(false);
  const[showAp, setshowAp] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false);
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
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowAp = () => {
    setshowAp(true)
  }
  const handleCloseShowAp = () => {
    setshowAp(false);
  };
  const handleConfirmationClick = () => {
    setShowConfirmation(true);
  };
  const handleOverlayClick = () => {
    setShowConfirmation(false);
    document.body.classList.remove('modal-open');
  };


  return (
    <div className='Recap'>
        <div className='header'>
        <div className='R-head'>
        <h1>Rappel</h1>
        </div>
        <h2>Sciences islamiques</h2>
        <h3>Date du cours</h3>
        </div>
        <div className="stu-row">
        <img src={stu} alt='' />
        <h3> Nombre d’étudiants : 22 </h3>
        </div>
        <div className='container-r'>
        <div className={`card-s ${ap1ButtonActive ? 'ap-active' : ''} ${ai1ButtonActive ? 'ai-active' : ''}`}>
        <div className='row'>
        <div className='col' onClick={handleClick}>
          <h3>Nom de l'étudiant</h3>
          <p>Absence(s) : 3</p>
          </div>
          <div className="b-container">
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
      
      <div className={`card-s ${ap2ButtonActive ? 'ap-active' : ''} ${ai2ButtonActive ? 'ai-active' : ''}`}>
        <div className='row'>
        <div className='col' onClick={handleClick}>
          <h3>Nom de l'étudiant</h3>
          <p>Absence(s) : 3</p>
          </div>
          <div className="b-container">
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

      <div className={`card-s ${ap3ButtonActive ? 'ap-active' : ''} ${ai3ButtonActive ? 'ai-active' : ''}`}>
        <div className='row'>
        <div className='col' onClick={handleClick}>
          <h3>Nom de l'étudiant</h3>
          <p>Absence(s) : 3</p>
        </div>
          <div className="b-container">
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
      </div>
      
      <button className="val-button" onClick={handleConfirmationClick}>Valider la feuille d'émargement</button>
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="mod">
            <h2>Nom de l'étudiant</h2>
            <div className="recap-row">
              <img src={status} alt='' />
              <h3> Récapitulatif du groupe : </h3>
            </div>
            <div className='block-modal'>
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
            </div>
            <div className="buttons-ro">
              <button className="dec-button" onClick={handleShowAp}>Déclarer AP</button>
              <button className="ca-button">Annuler</button>
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
            <input
            type="text"
            placeholder="01/01/2023"
            onClick={(e) => e.stopPropagation()} // Empêcher la propagation du clic
            />
            <input
            type="text"
            placeholder="28/01/2023"
            onClick={(e) => e.stopPropagation()} // Empêcher la propagation du clic
            />
            <img src={st} alt='' />
            </div>
            <div className="ap-row">
              <img src={user} alt='' />
                <h3>Sélectionner les AP :</h3>
            </div>
            <div className='date-card-cont' onClick={(e) => e.stopPropagation()}>
            <div
          className={`date-card ${selectedDates.includes('01/02/2023') ? 'selected' : ''}`}
          onClick={() => handleDateCardClick('01/02/2023')}
        >
            <h3>01/02/2023</h3>
            </div>
            <div
          className={`date-card ${selectedDates.includes('02/02/2023') ? 'selected' : ''}`}
          onClick={() => handleDateCardClick('02/02/2023')}
        >
            <h3>02/02/2023</h3>
            </div>
            <div
          className={`date-card ${selectedDates.includes('14/07/2023') ? 'selected' : ''}`}
          onClick={() => handleDateCardClick('14/07/2023')}
        >
            <h3>14/07/2023</h3>
            </div>
            <div
          className={`date-card ${selectedDates.includes('15/07/2023') ? 'selected' : ''}`}
          onClick={() => handleDateCardClick('15/07/2023')}
        >
            <h3>15/07/2023</h3>
            </div>
            </div>
              <div className="buttons-row">
                <button className="validat-button" onClick={handleConfirmationClick}>Valider</button>
                <button className="cancell-button">Annuler</button>
              </div>
          </div>
        </div>
)}
{showConfirmation && (
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="confirmation-card">
            <div className="icon-container">
              <i className="fas fa-check-circle"></i>
            </div>
          <div className="confirmation-content">
            <h3>Absence(s) prévue(s) le :</h3>
            <div className="confirmation-details">
              <p>14/01/2023</p>
              <p>21/01/2023</p>
            </div>
            <div className="confirmation-buttons">
              <button className="valid-button">Valider</button>
              <button className="anu-button">Annuler</button>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
  )
}

export default Rappel;