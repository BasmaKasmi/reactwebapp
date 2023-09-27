import React, { useState } from 'react';
import status from '../../assets/statusup.svg';
import stu from '../../assets/2 User.png';
import cldr from '../../assets/calendar.svg';
import st from '../../assets/student.svg';
import user from '../../assets/useredit.svg';
import './RecapPopup.css';

const RecapPopup = () => {
  const [showModal, setShowModal] = useState(false);
  const[showAp, setshowAp] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false);

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
        <h2>Sciences islamiques</h2>
        <h3>Date du cours</h3>
        </div>
        <div className="recap-row">
        <img src={status} alt='' />
        <h3> Récapitulatif du groupe : </h3>
        </div>
      <div className="c">
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
          <div className='col'>
            <h3>2/32</h3>
            <p className="description">Progression</p>
          </div>
        </div>
      </div>
      <div className="stu-row">
        <img src={stu} alt='' />
        <h3> Nombre d’étudiants : 22 </h3>
      </div>
      <div className='group-card-cont'>
      <div className="group-card" onClick={handleShowAp}>
      <div className='col'>
      <h3>Nom de l'étudiant</h3>
      <span>Absence(s) : 3</span>
      </div>
      </div>
      <div className="group-card" onClick={handleShowAp}>
      <div className='col'>
      <h3>Nom de l'étudiant</h3>
        <span>Absence(s) : 3</span>
      </div>
      </div>  
      <div className="group-card" onClick={handleShowAp}>
      <div className='col'>
      <h3>Nom de l'étudiant</h3>
      <span>Absence(s) : 3</span>
      </div>
      </div>  
      <div className="group-card" onClick={handleShowAp}>
      <div className='col'>
      <h3>Nom de l'étudiant</h3>
      <span>Absence(s) : 3</span>
      </div>
      </div>     
      <div className="group-card" onClick={handleShowAp}>
      <div className='col'>
      <h3>Nom de l'étudiant</h3>
      <span>Absence(s) : 3</span>
      </div>
      </div> 
      <div className="group-card" onClick={handleShowAp}>
      <div className='col'>
      <h3>Nom de l'étudiant</h3>
      <span>Absence(s) : 3</span>
      </div>
      </div>    
      </div>
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
          className={`date-card ${selectedDates.includes('17/02/2023') ? 'selected' : ''}`}
          onClick={() => handleDateCardClick('17/02/2023')}
        >
            <h3>17/02/2023</h3>
            </div>
            <div
          className={`date-card ${selectedDates.includes('13/07/2023') ? 'selected' : ''}`}
          onClick={() => handleDateCardClick('13/07/2023')}
        >
            <h3>13/07/2023</h3>
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

export default RecapPopup;