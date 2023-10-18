import React, {useState, useRef} from "react";
import {Link} from "react-router-dom";
import "./Sidebar.css";
import D from "../../assets/dashboard.svg";
import G from "../../assets/groupes.svg";
import E from "../../assets/emargements.svg";
import A from "../../assets/agenda.svg";
import Ev from "../../assets/evaluations.svg";
import ShowAp from "../showap/ShowAp";
// l'icone de menu
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faHome, faUser} from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    const [isActive, setActive] = useState(false);
    const sidebarRef = useRef(null);
    const [showAp, setshowAp] = useState(false);
    const [showValidation, setShowValidation] = useState(false);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
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

    const handleToggle = () => {
        setActive(!isActive);
        if (window.innerWidth <= 768) {
            setMobileSidebarOpen(!isMobileSidebarOpen);
            if (!isMobileSidebarOpen) {
                document.body.classList.add("sidebar-open");
            } else {
                document.body.classList.remove("sidebar-open");
            }
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
            {isActive && (
                <div className="sidebar-overlay" onClick={handleToggle}/>
            )}
            <div
                className={`sidebar ${isActive || isMobileSidebarOpen ? "active" : ""}`}
                tabIndex={isActive || isMobileSidebarOpen ? 0 : -1}
                ref={sidebarRef}
            >
                <h2 className="sidebar-title desktop">Espace professeur</h2>
                <div className="sidebar-small-title mobile">
                    <p>Menu</p>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <Link
                            to="/dashboard"
                            className={activeLink === "dashboard" ? "active" : ""}
                            onClick={() => handleLinkClick("dashboard")}
                        >
                            <img className="image" src={D} alt=""/>
                            <span>Tableau de bord</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/groupes"
                            className={activeLink === "groupes" ? "active" : ""}
                            onClick={() => handleLinkClick("groupes")}
                        >
                            <img className="image" src={G} alt=""/>
                            <span>Mes groupes</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/émargements"
                            className={activeLink === "émargements" ? "active" : ""}
                            onClick={() => handleLinkClick("émargements")}
                        >
                            <img className="image" src={E} alt=""/>
                            <span>Mes émargements</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/agenda"
                            className={activeLink === "agenda" ? "active" : ""}
                            onClick={() => handleLinkClick("agenda")}
                        >
                            <img className="image" src={A} alt=""/>
                            <span>Mon agenda</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/évaluations"
                            className={activeLink === "évaluations" ? "active" : ""}
                            onClick={() => handleLinkClick("évaluations")}
                        >
                            <img className="image" src={Ev} alt=""/>
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
        </div>
    );

};

export default Sidebar;
