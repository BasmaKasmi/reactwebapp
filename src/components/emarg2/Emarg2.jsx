import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Emarg2.css';
import classNames from 'classnames';
import status from '../../assets/statusup.svg';
import st from '../../assets/student.svg';
import cldr from '../../assets/calendar.svg';
import user from '../../assets/2 User.png';
import ShowModal from '../showmodal/ShowModal';
import ShowValidation from '../showvalidation/ShowValidation';

const Emarg2 = (props) => {
  const { title, date } = useParams(); // Récupérer les paramètres d'URL

  // Utilisation de l'état local pour suivre l'état de la carte active
  const [activeCard, setActiveCard] = useState(null);
  const { selectedCard } = props;

  useEffect(() => {
    if (props.selectedCard) {
      setActiveCard(props.selectedCard.title); 
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

    // Déclaration d'une fonction de gestion de clic pour la confirmation
    const handleConfirmationClick = () => {
      // Affichage de la fenêtre modale de confirmation
      setShowConfirmation(true);
      // Ajout d'une classe au corps du document pour désactiver le défilement lorsque la fenêtre modale est ouverte
      document.body.classList.add('modal-open');
      // Affichage le contenu de la colonne "groupes" après avoir cliqué sur "Valider la feuille d'émargement"
    };

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
  const handleCloseShowModal = () => {
    setShowModal(false);
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
    setIsValidationDone(true);

  navigate('/dashboard');
  };
  
  const handleValidationClick = () => {
    setShowValidation(true);
  };


  const navigate = useNavigate(); // Utilisation le hook useNavigate de React Router
  const [isValidationDone, setIsValidationDone] = useState(false);

  // Gèrer le clic sur le bouton "Retour"
  const handleRetourClick = () => {
    navigate(-1); // // Utilisation la fonction navigate pour revenir à la page précédente
  };
     // Ajoutez le gestionnaire d'événement onClick à la div "modal-overlay" pour fermer la popup
     const handleOverlayClick = (e) => {
      const isOverlay = e.target.classList.contains('modal-overlay');
      const isCancel = e.target.classList.contains('an');
      const isCancelButton = e.target.classList.contains('annuler-button');

    
      if (isOverlay || isCancel || isCancelButton) {
        handleCloseShowModal();
        setShowValidation(false);

      }
    };

  return (
    <div>
      <div className="groupes">
          {/* Div pour l'en-tête de colonne */}
          <div className="column-head">
          {/* Affiche le titre sélectionné */}
          {activeCard && <h3>{title}</h3>}
          {/* Affiche le jour sélectionné */}
          {selectedCard && <p className='day'>{date}</p>}
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
        <button className="an-butt" onClick={handleRetourClick}>Annuler</button>        
        {showValidation && (
          <div className="modal-overlay" onClick={handleOverlayClick}>
          <ShowValidation handleOverlayClick={handleOverlayClick} />
        </div>
        )}
      </div>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <ShowModal handleOverlayClick={handleOverlayClick} />
        </div>
      )}
    </div>
  );
}

export default Emarg2;