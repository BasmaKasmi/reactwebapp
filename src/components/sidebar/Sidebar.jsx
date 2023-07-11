import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import D from "../../assets/dashboard.svg";
import G from "../../assets/groupes.svg";
import E from "../../assets/emargements.svg";
import A from "../../assets/agenda.svg";
import Ev from "../../assets/evaluations.svg";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const sidebarRef = useRef(null);

  const handleToggle = () => {
    setActive(!isActive);

    // Mettre le focus sur la barre latérale lorsqu'elle est ouverte
    if (!isActive) {
      sidebarRef.current.focus();
    }
    if (window.innerWidth <= 768) {
      const sidebar = sidebarRef.current;
      sidebar.classList.toggle("small-screen-sidebar");
    }
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
          <img className="image" src={G}  alt=""/>
            <span>Mes groupes</span>
          </Link>
        </li>
        <li>
          <Link to="/émargements">
          <img className="image" src={E}  alt=""/>
            <span>Mes émargements</span>
          </Link>
        </li>
        <li>
          <Link to="/agenda">
          <img className="image" src={A}  alt=""/>
            <span>Mon agenda</span>
          </Link>
        </li>
        <li>
          <Link to="/évaluations">
          <img className="image" src={Ev} alt=""/>
            <span>Mes évaluations</span>
          </Link>
        </li>
        <div className="sidebar-button-mobile">
          <Link to="/">Se déconnecter</Link>
        </div>
      </ul>
      <button className="declare-button">Déclarer AP</button>
      </div>
      {isActive && <div className="dashboard-overlay" />}
    </div>
  );
};

export default Sidebar;