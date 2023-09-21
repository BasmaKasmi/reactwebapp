import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import D from "../../assets/dashboard.svg";
import G from "../../assets/groupes.svg";
import E from "../../assets/emargements.svg";
import A from "../../assets/agenda.svg";
import Ev from "../../assets/evaluations.svg";
import cldr from '../../assets/calendar.svg';
import nom from '../../assets/nom.svg';
import st from '../../assets/student.svg';
import user from '../../assets/2 User.png';
// l'icone de menu
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser } from '@fortawesome/free-solid-svg-icons';




const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const sidebarRef = useRef(null);
  const[showAp, setshowAp] = useState(false);
  const[selectStudent, setselectStudent] = useState(false);
  const[declareAp, setdeclareAp] = useState(false);
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

  const handleConfirmationClick = () => {
    setShowConfirmation(true);
    document.body.classList.add('modal-open');
  };

  const handleOverlayClick = () => {
    setShowConfirmation(false);
    document.body.classList.remove('modal-open');
  };

  const handleToggle = () => {
    setActive(!isActive);

    if (!isActive) {
      sidebarRef.current.focus();
    }
  };

  const handleShowAp = () => {
    setshowAp(true)
  }
  const handleCloseShowAp = () => {
    setshowAp(false);
  };
  const handleSelectStudent = () => {
    setselectStudent(true)
  }
  const handleCloseSelectStudent = () => {
    setselectStudent(false);
  };

  const handleDeclareAp = () => {
    setdeclareAp(true)
  }
  const handleCloseDeclareAp = () => {
    setdeclareAp(false);
  };


  return (
    <div className="sidebar">
      <button className="sidebar-toggle" onClick={handleToggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {isActive && <div className="sidebar-overlay" onClick={handleToggle} />}
      <div
        className={`sidebar ${isActive ? "active" : ""}`}
        tabIndex={isActive ? 0 : -1}
        ref={sidebarRef}
      >
        <h2 className="sidebar-title desktop">Espace professeur</h2>
        <div className="sidebar-small-title mobile">
          <p>Menu</p>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/dashboard">
              <img className="image" src={D} alt="" />
              <span>Tableau de bord</span>
            </Link>
          </li>
          <li>
            <Link to="/groupes">
              <img className="image" src={G} alt="" />
              <span>Mes groupes</span>
            </Link>
          </li>
          <li>
            <Link to="/émargements">
              <img className="image" src={E} alt="" />
              <span>Mes émargements</span>
            </Link>
          </li>
          <li>
            <Link to="/agenda">
              <img className="image" src={A} alt="" />
              <span>Mon agenda</span>
            </Link>
          </li>
          <li>
            <Link to="/évaluations">
              <img className="image" src={Ev} alt="" />
              <span>Mes évaluations</span>
            </Link>
          </li>
        </ul>
        <div className="declare-button " onClick={handleShowAp}>
          <Link to="">Déclarer une AP</Link>
        </div>
        <div className="sidebar-button-mobile">
          <Link to="/">Se déconnecter</Link>
        </div>
      </div>
      {showAp && (
        <div className="modal-overlay" onClick={handleCloseShowAp}>
          <div className="mod-desktop">
            <h2> Déclarer une AP </h2>
            <div className='blok1'>
            {/* Div pour une ligne de l'agenda */}
            <div className="nom-row">
              {/* Icône d'un calendrier */}
              <img src={nom} alt='' />
                {/* Titre pour choisir les dates */}
                <h3>Rechercher par nom :</h3>
            </div>
             {/* Div pour l'entrée de date */}
             <div className="nom-input" onClick={(e) => e.stopPropagation()}>
              {/* Champ de texte pour saisir le nom d'un étudiant */}
              <input type="text" placeholder="Saisir un nom d’étudiant" />
              {/* Icône d'un étudiant */}
              <img src={st} alt='' />
            </div>
            </div>
            <div className="blok2">
            <div className="ap-line">
              <img src={user} alt='' />
                <h3>Rechercher par groupe :</h3>
            </div>
            <div className="gru-cont">
            <div className="gr" onClick={handleSelectStudent}>
            <h3>Sciences islamiques 1ére année</h3>
            <div>
            <p className='jr'>Jeu 18h00 à 12h00</p>
            </div>
          </div>
          <div className="gr" onClick={handleSelectStudent}>
            <h3>Sciences islamiques 1ére année</h3>
            <div>
            <p className='jr'>Jeu 18h00 à 12h00</p>
            </div>
          </div>
          <div className="gr" onClick={handleSelectStudent}>
            <h3>Sciences islamiques 1ére année</h3>
            <div>
            <p className='jr'>Jeu 18h00 à 12h00</p>
            </div>
          </div>
          <div className="gr" onClick={handleSelectStudent}>
            <h3>Sciences islamiques 1ére année</h3>
            <div>
            <p className='jr'>Jeu 18h00 à 12h00</p>
            </div>
          </div>
            </div>
            </div>
          <button className="A-button">Annuler</button>
          </div>
        </div>
)}
{selectStudent && (
        <div className="modal-overlay" onClick={handleCloseSelectStudent}>
          <div className="mod-desktop">
          <div className="pop-up-title">
          <h2> Sciences islamiques </h2>
          <h3>Date et heure du cours</h3>
          </div>
            <div className="blok-sc">
            <div className="ap-line">
              <img src={user} alt='' />
                <h3>Rechercher par groupe :</h3>
            </div>
            <div className="gr-cont">
            <div className="gr" onClick={handleDeclareAp}>
            <h3>Nom de l'étudiant</h3>
            <div>
            <p className='jr'>Absence(s): 3</p>
            </div>
            </div>
            <div className="gr" onClick={handleDeclareAp}>
            <h3>Nom de l'étudiant</h3>
            <div>
            <p className='jr'>Absence(s): 3</p>
            </div>
            </div>
            <div className="gr" onClick={handleDeclareAp}>
            <h3>Nom de l'étudiant</h3>
            <div>
            <p className='jr'>Absence(s): 3</p>
            </div>
            </div>
            <div className="gr" onClick={handleDeclareAp}>
            <h3>Nom de l'étudiant</h3>
            <div>
            <p className='jr'>Absence(s): 3</p>
            </div>
            </div>
            </div>
            </div>
          <button className="A-button">Annuler</button>
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
  );
};

export default Sidebar;