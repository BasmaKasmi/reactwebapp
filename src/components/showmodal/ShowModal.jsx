import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ShowModal.css';
import status from '../../assets/statusup.svg';
import DeclareAp from '../declareap/DeclareAp';


const ShowModal = () => {
    const [showModal, setShowModal] = useState(false);
    const[declareAp, setdeclareAp] = useState(false);
    const [isAnyPopupOpen, setIsAnyPopupOpen] = useState(false);
    const navigate = useNavigate(); // Utilisation le hook useNavigate de React Router

    const handleCloseShowModal = () => {
      setIsAnyPopupOpen(false); // Le pop-up est fermé
      setShowModal(false);
    };
    const handleShowModal = () => {
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
      handleCloseShowModal();
      handleCloseDeclareAp(false);
    }
  };
  

  return (
    <div>
      {!declareAp && !isAnyPopupOpen && (
          <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="model-desktop">
            <h2>Nom de l'étudiant</h2>
            <div className="recap-row">
              <img src={status} alt='' />
              <h3> Récapitulatif du groupe : </h3>
            </div>
            <div className="bloc-pop">
            <div className='row'>
              <div className='colonne-pop'>
                <h3>17</h3>
                <p className="text">Inscrits</p>
              </div>
              <div className='colonne-pop'>
                <h3>2</h3>
                <p className="text">Abandon(s)</p>
              </div>
              <div className='colonne-pop'>
                <h3>65%</h3>
                <p className="text">Présence</p>
              </div>
            </div>
            </div>
            <div className="buttons-row">
              <button className="ap" onClick={handleDeclareAp}>Déclarer AP</button>
              <button className="an" onClick={handleCloseShowModal}>Annuler</button>
            </div>
          </div>
     </div>
      )}
     {declareAp && <DeclareAp handleCloseDeclareAp={handleCloseDeclareAp}/>}
    </div>

  );
};

export default ShowModal;