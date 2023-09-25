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
import ShowAp from "../showap/ShowAp";
// l'icone de menu
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser } from '@fortawesome/free-solid-svg-icons';




const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const sidebarRef = useRef(null);
  const[showAp, setshowAp] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
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
  const handleOverlayClick = (e) => {
    const isOverlay = e.target.classList.contains('modal-overlay');
    const isCancel = e.target.classList.contains('an');
    const isCancelButton = e.target.classList.contains('annuler-button');

  
    if (isOverlay || isCancel || isCancelButton) {
      handleCloseShowAp();
      setShowValidation(false);

    }
  };

  const handleConfirmationClick = () => {
    setShowConfirmation(true);
    document.body.classList.add('modal-open');
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
        <div className="declare-button" onClick={handleShowAp}>
          <Link> Déclarer une AP</Link>
        </div>
        <div className="sidebar-button-mobile">
          <Link to="/">Se déconnecter</Link>
        </div>
      </div>
      {showAp && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <ShowAp handleOverlayClick={handleOverlayClick} />
        </div>
      )}
    </div>
  );
  
};

export default Sidebar;