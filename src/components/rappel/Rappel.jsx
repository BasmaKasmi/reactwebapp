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
      <div className="card-s" onClick={handleClick}>
      <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <p>Absence(s) : 3</p>
          </div>
          <div className="b-container">
            <button
            className="ap-b"
            >
            AP 
            </button>
            <button
            className="ai-b"
            >
            AI
            </button>
            </div>
          </div>
      </div>  
      
      <div className="card-s" onClick={handleClick}>
      <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <p>Absence(s) : 3</p>
          </div>
          <div className="b-container">
            <button
            className="ap-b"
            >
            AP 
            </button>
            <button
            className="ai-b"
            >
            AI
            </button>
            </div>
          </div>
      </div>
      <div className="card-s" onClick={handleClick}>
      <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <p>Absence(s) : 3</p>
          </div>
          <div className="b-container">
            <button
            className="ap-b"
            >
            AP 
            </button>
            <button
            className="ai-b"
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
              <button className="ap-button" onClick={handleShowAp}>Déclarer AP</button>
              <button className="ann-button">Annuler</button>
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
            <div className='date-card-cont'>
            <div className="date-card">
            <h3>01/02/2023</h3>
            </div>
            <div className="date-card">
            <h3>01/02/2023</h3>
            </div>
            <div className="date-card">
            <h3>01/02/2023</h3>
            </div>
            <div className="date-card">
            <h3>14/07/2023</h3>
            </div>
            <div className="date-card">
            <h3>14/07/2023</h3>
            </div>
            </div>
              <div className="buttons-row">
                <button className="validate-button" onClick={handleConfirmationClick}>Valider</button>
                <button className="cancel-button">Annuler</button>
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
              <button className="valider-button">Valider</button>
              <button className="annuler-button">Annuler</button>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
  )
}

export default Rappel;