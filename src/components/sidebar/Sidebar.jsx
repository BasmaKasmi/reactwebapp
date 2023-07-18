import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import D from "../../assets/dashboard.svg";
import G from "../../assets/groupes.svg";
import E from "../../assets/emargements.svg";
import A from "../../assets/agenda.svg";
import Ev from "../../assets/evaluations.svg";
import cldr from '../../assets/calendar.svg';
import st from '../../assets/student.svg';
import user from '../../assets/2 User.png';


const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const sidebarRef = useRef(null);
  const[showAp, setshowAp] = useState(false);


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


  return (
    <div>
      <button className="sidebar-toggle" onClick={handleToggle}>
        {isActive ? ">" : "<"}
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
          <div className="modal">
            <h2> Déclarer une AP </h2>
            <div className="agenda-row">
              <img src={cldr} alt='' />
                <h3>Choisir dates :</h3>
            </div>
            <div className="date-input">
              <input type="text" placeholder=" Saisir un nom d’étudiant " />
              <img src={st} alt='' />
            </div>
            <div className="ap-row">
              <img src={user} alt='' />
                <h3>Rechercher par groupe :</h3>
            </div>
            <div className="g">
            <h3>Sciences islamiques 1ére année</h3>
            <div>
            <p className='d'>Jeu 18h00 à 12h00</p>
            </div>
          </div>
          <div className="g">
            <h3>Sciences islamiques 1ére année</h3>
            <div>
            <p className='d'>Jeu 18h00 à 12h00</p>
            </div>
          </div>
          <div className="g">
            <h3>Sciences islamiques 1ére année</h3>
            <div>
            <p className='d'>Jeu 18h00 à 12h00</p>
            </div>
          </div>
          <button className="cancel-button">Annuler</button>
          </div>
        </div>
)}
    </div>
  );
};

export default Sidebar;
