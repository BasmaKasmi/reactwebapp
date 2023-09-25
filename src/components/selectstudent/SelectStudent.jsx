import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SelectStudent.css';
import status from '../../assets/statusup.svg';
import user from '../../assets/2 User.png';
import DeclareAp from '../declareap/DeclareAp';



const SelectStudent = () => {
    const [selectStudent, setselectStudent] = useState(false);
    const[declareAp, setdeclareAp] = useState(false);
    const [isAnyPopupOpen, setIsAnyPopupOpen] = useState(false);
    const navigate = useNavigate(); // Utilisation le hook useNavigate de React Router

    const handleCloseSelectStudent = () => {
      setIsAnyPopupOpen(false); // Le pop-up est fermé
      setselectStudent(false);
    };
    const handleselectStudent = () => {
      setdeclareAp(true);
      setIsAnyPopupOpen(true); // Le pop-up est ouvert
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
      handleCloseSelectStudent();
      handleCloseDeclareAp(false);
    }
  };
  

  return (
    <div>
              {!declareAp && !isAnyPopupOpen && (
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
     {declareAp && <DeclareAp handleCloseDeclareAp={handleCloseDeclareAp}/>}
    </div>

  );
};

export default SelectStudent;