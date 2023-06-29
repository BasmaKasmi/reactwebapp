import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import D from "../../assets/dashboard.svg";
import G from "../../assets/groupes.svg";
import E from "../../assets/emargements.svg";
import A from "../../assets/agenda.svg";
import Ev from "../../assets/evaluations.svg";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <button className="sidebar-toggle" onClick={handleToggle}>
        {isActive ? "<" : ">"}
      </button>
      <h2 className="sidebar-title">Espace professeur</h2>
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
      </ul>
      <button className="declare-button">Déclarer AP</button>
    </div>
  );
};

export default Sidebar;
