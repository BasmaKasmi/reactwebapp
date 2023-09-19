import React, { useState, useEffect } from 'react';
import './Emarg2.css';
import classNames from 'classnames';
import status from '../../assets/statusup.svg';
import st from '../../assets/student.svg';
import cldr from '../../assets/calendar.svg';
import user from '../../assets/2 User.png';

const Emarg2 = (props) => {

  // Utilisation de l'état local pour suivre l'état de la carte active
  const [activeCard, setActiveCard] = useState(null);
  const { selectedCard } = props;

  useEffect(() => {
    // Mettez à jour l'état local lorsque selectedCard dans les props change
    if (props.selectedCard) {
      setActiveCard(props.selectedCard.title); // Mettez à jour activeCard avec le titre
    }
  }, [props.selectedCard]);


  // Déclaration d'une fonction de gestion de clic sur une carte
  const handleCardClick = (cardId, cardTitle, cardDay) => {
    // Mise à jour de l'état de la carte active
    setActiveCard(cardId);
    // Mise à jour de l'état du titre et du jour sélectionnés
    setSelectedTitle(cardTitle);
    setSelectedDay(cardDay);
    // Affichage le contenu de la colonne "groupes" après avoir cliqué sur une carte
    setShowGroupesContent(true); 

    // Déclaration d'une fonction de gestion de clic pour la confirmation
    const handleConfirmationClick = () => {
      // Affichage de la fenêtre modale de confirmation
      setShowConfirmation(true);
      // Ajout d'une classe au corps du document pour désactiver le défilement lorsque la fenêtre modale est ouverte
      document.body.classList.add('modal-open');
      // Affichage le contenu de la colonne "groupes" après avoir cliqué sur "Valider la feuille d'émargement"
      setShowGroupesContent(true); 
    };


    // Vérifie si l'identifiant de la carte est 'card-1', 'card-2' ou 'card-3'
    if (cardId === 'card-1' || cardId === 'card-2' || cardId === 'card-3') {
      // Si l'identifiant correspond à l'une de ces cartes, masque le contenu lié à Emargements
      setShowEmContent(false);
    } else if (cardId === 'card-4') {
      // Si l'identifiant correspond à 'card-4', affiche le contenu lié à Emargements
      setShowEmContent(true);
    } else {
      // Si l'identifiant ne correspond à aucune des cartes mentionnées, masque le contenu lié à Emargements
      setShowEmContent(false);
    }
  };

  const [showGroupesContent, setShowGroupesContent] = useState(false);
  const [showEmContent, setShowEmContent] = useState(false);
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
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeclareAp = () => {
    setdeclareAp(true)
  }
  const handleCloseDeclareAp = () => {
    setdeclareAp(false);
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
          {/* Div pour l'en-tête de colonne */}
          <div className="column-head">
          {/* Affiche le titre sélectionné */}
          {activeCard && <h3>{activeCard}</h3>}
          {/* Affiche le jour sélectionné */}
          {selectedCard && <p className='day'>{selectedCard.date}</p>}
        </div>
        <div className='card-container'  style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
        { /*
            Route : Récupération de la liste des étudiants du groupe sélectionné
            URL :
            Informations transmises :
                Identifiant du groupe
            Informations attendues :
                Liste des étudiants
            */}

        <div className={`std ${ap1ButtonActive ? 'ap-active' : ''} ${ai1ButtonActive ? 'ai-active' : ''}`}>
        <div className='row'>
        <div className='col' onClick={handleClick}>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          { /*
            Route : Récupération des infos de l'étudiant
            URL :
            Informations transmises :
                Identifiant de l'étudiant
            Informations attendues (sous forme de card):
                Nom & prénom de l'étudiant
                Nb d'absences de l'étudiant (AP+AI)
            */}
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
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="mdl">
            <h2>Nom de l'étudiant</h2>
            <div className="recap-row">
              <img src={status} alt='' />
              <h3> Récapitulatif du groupe : </h3>
            </div>
            <div className="bloc-pop">
            <div className='row'>
              <div className='colon'>
                <h3>17</h3>
                <p className="des">Inscrits</p>
              </div>
              <div className='colon'>
                <h3>2</h3>
                <p className="des">Abandon(s)</p>
              </div>
              <div className='colon'>
                <h3>65%</h3>
                <p className="des">Présence</p>
              </div>
            </div>
            </div>
            <div className="buttons-row">
              <button className="ap" onClick={handleDeclareAp}>Déclarer AP</button>
              <button className="an">Annuler</button>
            </div>
          </div>
        </div>
      )}
{declareAp && (
        <div className="modal-overlay" onClick={handleCloseDeclareAp}>
          <div className="mod-desktop">
            <h2>Nom de l'étudiant</h2>
            <div className="blok1">
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
{showConfirmation && (
     <div className="modal-overlay" onClick={handleOverlayClick}>
     <div className="confirmation-card">
     <div className="icon-container">
           <i className="fas fa-check-circle"></i>
         </div>
       <div className="confirmation-content">
         <h3>Absences prévues le :</h3>
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
  );
}

export default Emarg2;