import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './DeclareAp.css';
import st from '../../assets/student.svg';
import cldr from '../../assets/calendar.svg';
import user from '../../assets/2 User.png';
import status from '../../assets/statusup.svg';
import ShowConfirmation from '../showconfirmation/ShowConfirmation';

const DeclareAp = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const[declareAp, setdeclareAp] = useState(false);
    const [isAnyPopupOpen, setIsAnyPopupOpen] = useState(false);


  
    const handleDeclareAp = () => {
        setdeclareAp(true);
        setIsAnyPopupOpen(true); // Le pop-up est ouvert
      };
      const handleCloseDeclareAp = () => {
        setdeclareAp(false);
        setIsAnyPopupOpen(false); // Le pop-up est fermé
      };


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
    // Définition de la fonction handleConfirmationClick
    const handleConfirmationClick = () => {
        // Affiche la fenêtre de confirmation
        setShowConfirmation(true);
        // Ajoute la classe 'modal-open' au corps du document (utilisé pour les styles de superposition)
        document.body.classList.add('modal-open');
        // Affiche le contenu de la colonne "groupes" après avoir cliqué sur "Valider la feuille d'émargement"
      };


  return (
    <div>
    {!showConfirmation && !isAnyPopupOpen && (
    <div className="modal-overlay" onClick={handleCloseDeclareAp}>
    <div className="declare-model">
      <h2>Nom de l'étudiant</h2>
      <div className="declare-bloc1">
      <div className="cldr-row">
        <img src={cldr} alt='' />
          <h3>Choisir dates :</h3>
      </div>
      <div className="time-inputs">
        <input type="text" placeholder="01/01/2023" onClick={(e) => e.stopPropagation()} />
        <input type="text" placeholder="28/01/2023" onClick={(e) => e.stopPropagation()} />
        <img src={st} alt='' />
      </div>
      </div>
      <div className="blok-ap">
      <div className="ap-line">
        <img src={user} alt='' />
          <h3>Sélectionner les AP :</h3>
      </div>
      <div className='time-card-cont' onClick={(e) => e.stopPropagation()}>
      <div
    className={`time-card ${selectedDates.includes('01/02/2023') ? 'selected' : ''}`}
    onClick={() => handleDateCardClick('01/02/2023')}
  >
      <h3>01/02/2023</h3>
      </div>
      <div
    className={`time-card ${selectedDates.includes('17/02/2023') ? 'selected' : ''}`}
    onClick={() => handleDateCardClick('17/02/2023')}
  >
      <h3>17/02/2023</h3>
      </div>
      <div
    className={`time-card ${selectedDates.includes('13/07/2023') ? 'selected' : ''}`}
    onClick={() => handleDateCardClick('13/07/2023')}
  >
      <h3>13/07/2023</h3>
      </div>
      <div
    className={`time-card ${selectedDates.includes('15/07/2023') ? 'selected' : ''}`}
    onClick={() => handleDateCardClick('15/07/2023')}
  >
      <h3>15/07/2023</h3>
      </div>
      </div>
      </div>
        <div className="buttons-row">
          <button className="v-button" onClick={handleConfirmationClick}>Valider</button>
          <button className="cancel-button">Annuler</button>
        </div>
    </div>
  </div>
    )}
  {showConfirmation && <ShowConfirmation/> }
    </div>

  );
};

export default DeclareAp;
