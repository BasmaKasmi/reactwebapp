import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; //Importons useLocation du module 'react-router-dom'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import classNames from 'classnames';
import './Student.css';
import status from '../../assets/statusup.svg';
import st from '../../assets/student.svg';
import cldr from '../../assets/calendar.svg';
import user from '../../assets/2 User.png';


const Student = () => {
  // Utilisons useLocation pour récupérer les données passées dans l'URL
  const location = useLocation();
  const { title, day } = location.state || {}; // Utilisons la déstructuration avec une valeur par défaut {}
  const [activeCard, setActiveCard] = useState(null);
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
  const [ai5ButtonActive, setAi5ButtonActive] = useState(false);
  const [ap5ButtonActive, setAp5ButtonActive] = useState(false);
  const [ai6ButtonActive, setAi6ButtonActive] = useState(false);
  const [ap6ButtonActive, setAp6ButtonActive] = useState(false);

  const navigate = useNavigate(); // Utilisation le hook useNavigate de React Router
  const [isValidationDone, setIsValidationDone] = useState(false);

  // Gèrer le clic sur le bouton "Retour"
  const handleRetourClick = () => {
    navigate(-1); // // Utilisation la fonction navigate pour revenir à la page précédente
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



  const handleCardClick = (cardId) => {
    setActiveCard(cardId);

  };
  const handleConfirmationClick = () => {
    setShowConfirmation(true);
    setIsValidationDone(true);

  navigate('/dashboard');
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
    <div className='groups'>
        <div className="column-head">
          <h3>Sciences islamiques 2ème année</h3>
          <p className='day'>Jeu 18h00 à 12h00</p>
        </div>
        <div className="list-container">
          <div className='std-container'>
          <div className={`std ${ap1ButtonActive ? 'ap-active' : ''} ${ai1ButtonActive ? 'ai-active' : ''}`}>
        <div className='row'>
        <div className="col" onClick={handleClick} style={{flexBasis: '70%'}}>
        <h4>Nom de l'étudiant</h4>
        <span> Absences : 3</span>
        </div>
        <div className="student-buttons" style={{flexBasis: '15%'}}>
        <button
            className={`ap-bu ${ap1ButtonActive ? 'active' : ''}` }
            onClick={() => {
              setAp1ButtonActive(!ap1ButtonActive);
              setAi1ButtonActive(false);
              }}
            >
            AP 
        </button>
        </div>
        <div className="student-buttons" style={{flexBasis: '15%'}}>
        <button
            className={`ai-bu ${ai1ButtonActive ? 'active' : ''}`}
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
        <div className="col" onClick={handleClick} style={{flexBasis: '70%'}}>
        <h4>Nom de l'étudiant</h4>
        <span> Absences : 3</span>
        </div>
        <div className="student-buttons" style={{flexBasis: '15%'}}>
        <button
            className={`ap-bu ${ap2ButtonActive ? 'active' : ''}` }
            onClick={() => {
              setAp2ButtonActive(!ap2ButtonActive);
              setAi2ButtonActive(false);
              }}
            >
            AP 
        </button>
        </div>
        <div className="student-buttons" style={{flexBasis: '15%'}}>
        <button
            className={`ai-bu ${ai2ButtonActive ? 'active' : ''}`}
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

      <div className={`std ${ap3ButtonActive ? 'ap-active' : ''} ${ai3ButtonActive ? 'ai-active' : ''}`}>
        <div className='row'>
        <div className="col" onClick={handleClick} style={{flexBasis: '70%'}}>
        <h4>Nom de l'étudiant</h4>
        <span> Absences : 3</span>
        </div>
        <div className="student-buttons" style={{flexBasis: '15%'}}>
        <button
            className={`ap-bu ${ap3ButtonActive ? 'active' : ''}` }
            onClick={() => {
              setAp3ButtonActive(!ap3ButtonActive);
              setAi3ButtonActive(false);
              }}
            >
            AP 
        </button>
        </div>
        <div className="student-buttons" style={{flexBasis: '15%'}}>
        <button
            className={`ai-bu ${ai3ButtonActive ? 'active' : ''}`}
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
        <div className="col" onClick={handleClick} style={{flexBasis: '70%'}}>
        <h4>Nom de l'étudiant</h4>
        <span> Absences : 3</span>
        </div>
        <div className="student-buttons" style={{flexBasis: '15%'}}>
        <button
            className={`ap-bu ${ap4ButtonActive ? 'active' : ''}` }
            onClick={() => {
              setAp4ButtonActive(!ap4ButtonActive);
              setAi4ButtonActive(false);
              }}
            >
            AP 
        </button>
        </div>
        <div className="student-buttons" style={{flexBasis: '15%'}}>
        <button
            className={`ai-bu ${ai4ButtonActive ? 'active' : ''}`}
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

      <div className={`std ${ap5ButtonActive ? 'ap-active' : ''} ${ai5ButtonActive ? 'ai-active' : ''}`}>
        <div className='row'>
        <div className="col" onClick={handleClick} style={{flexBasis: '70%'}}>
        <h4>Nom de l'étudiant</h4>
        <span> Absences : 3</span>
        </div>
        <div className="student-buttons" style={{flexBasis: '15%'}}>
        <button
            className={`ap-bu ${ap5ButtonActive ? 'active' : ''}` }
            onClick={() => {
              setAp5ButtonActive(!ap5ButtonActive);
              setAi5ButtonActive(false);
              }}
            >
            AP 
        </button>
        </div>
        <div className="student-buttons" style={{flexBasis: '15%'}}>
        <button
            className={`ai-bu ${ai5ButtonActive ? 'active' : ''}`}
            onClick={() => {
              setAi5ButtonActive(!ai5ButtonActive);
              setAp5ButtonActive(false);
              }}
            >
            AI
        </button>
        </div>
        </div>
      </div>
      <div className={`std ${ap6ButtonActive ? 'ap-active' : ''} ${ai6ButtonActive ? 'ai-active' : ''}`}>
        <div className='row'>
        <div className="col" onClick={handleClick} style={{flexBasis: '70%'}}>
        <h4>Nom de l'étudiant</h4>
        <span> Absences : 3</span>
        </div>
        <div className="student-buttons" style={{flexBasis: '15%'}}>
        <button
            className={`ap-bu ${ap6ButtonActive ? 'active' : ''}` }
            onClick={() => {
              setAp6ButtonActive(!ap6ButtonActive);
              setAi6ButtonActive(false);
              }}
            >
            AP 
        </button>
        </div>
        <div className="student-buttons" style={{flexBasis: '15%'}}>
        <button
            className={`ai-bu ${ai6ButtonActive ? 'active' : ''}`}
            onClick={() => {
              setAi6ButtonActive(!ai6ButtonActive);
              setAp6ButtonActive(false);
              }}
            >
            AI
        </button>
        </div>
        </div>
      </div>

        </div>

        </div>
        <div className='button-container'>
        <button className="fem-button" onClick={handleValidationClick}>
          Valider la feuille d'émargement
        </button>
        <button className="an-button" onClick={handleRetourClick}>Annuler</button>        {showValidation && (
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
              <button className="valider-button" onClick={handleConfirmationClick}>Valider</button>
              <button className="annuler-button">Annuler</button>
         </div>
          </div>
        </div>
      </div>
    )}
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

export default Student;