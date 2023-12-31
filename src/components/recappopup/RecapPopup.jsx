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
    </div>
  )
}

export default RecapPopup;