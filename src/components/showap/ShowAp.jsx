import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ShowAp.css';
import status from '../../assets/statusup.svg';
import nom from '../../assets/nom.svg';
import st from '../../assets/student.svg';
import user from '../../assets/2 User.png';
import SelectStudent from '../selectstudent/SelectStudent';


const ShowAp = () => {
    const [showAp, setshowAp] = useState(false);
    const[selectStudent, setselectStudent] = useState(false);
    const[declareAp, setdeclareAp] = useState(false);
    const [isAnyPopupOpen, setIsAnyPopupOpen] = useState(false);
    const navigate = useNavigate(); // Utilisation le hook useNavigate de React Router

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
      // Gèrer le clic sur le bouton "Retour"
  const handleRetourClick = () => {
    navigate(-1); // // Utilisation la fonction navigate pour revenir à la page précédente
  };
  const handleOverlayClick = (e) => {
    const isOverlay = e.target.classList.contains('modal-overlay');
    const isCancel = e.target.classList.contains('cancel-button');
  
    if (isOverlay || isCancel) {
      handleCloseShowAp();
      handleCloseSelectStudent(false);
    }
  };
  

  return (
    <div>
            {!selectStudent && !isAnyPopupOpen && (
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
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <SelectStudent handleOverlayClick={handleOverlayClick} />
        </div>
      )}
    </div>

  );
};

export default ShowAp;