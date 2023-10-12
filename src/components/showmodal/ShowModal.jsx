import React, { useState } from 'react';
import './ShowModal.css';
import status from '../../assets/statusup.svg';
import DeclareAp from '../declareap/DeclareAp';


const ShowModal = (props) => {
    const [showModal, setShowModal] = useState(false);
    const[declareAp, setDeclareAp] = useState(false);
    const [isAnyPopupOpen, setIsAnyPopupOpen] = useState(false);

    const handleCloseShowModal = () => {
      setShowModal(false);
      setDeclareAp(false);
    };
    const handleDeclareAp = () => {
        setDeclareAp(true)
      }
      const handleCloseDeclareAp = () => {
        setDeclareAp(false);
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
              {/* Route : Récupération du nom de l'étudiant suite au clique sur la card d'un étudiant
                      URL :
                      Informations transmises :
                      Identifiant du groupe
                      Identifiant de l'étudiant (nom de l'étudiant)
                      Informations attendues :
                      Nom de l'étudiant %*/}
              <div className="recap-row">
                <img src={status} alt='' />
                <h3> Récapitulatif de l'étudiant : </h3> {/* Information statique%*/}
              </div> 
              <div className="bloc-pop">
              <div className='row'>
                <div className='colonne-pop'>
                  <h3>4</h3>
                  <p className="des">Abs. prévues</p>
                  {/* Route : Récupération du nombre d'absences prévues (AP) de l'étudiant
                      URL : 
                      Informations transmises :
                      Identifiant du groupe
                      Identifiant de l'étudiant (nom de l'étudiant)
                      Informations attendues :
                      Nb d'AP de l'étudiant*/}
                </div>
                <div className='colonne-pop'>
                  <h3>2</h3>
                  <p className="des">Abs. injustifiées</p>
                  {/* Route : Récupération du nombre d'absences injustifiée (AI) de l'étudiant
                      URL : 
                      Informations transmises :
                      Identifiant du groupe
                      Identifiant de l'étudiant (nom de l'étudiant)
                      Informations attendues :
                      Nb d'AI de l'étudiant*/}
                </div>
                <div className='colonne-pop'>
                  <h3>65%</h3>
                  <p className="des">Présence</p>
                   {/* Route : Récupération du taux de présence moyen de l'étudiant % pour le cours en question
                      URL :
                      Informations transmises :
                      Identifiant du groupe
                      Identifiant de l'étudiant (nom de l'étudiant)
                      Informations attendues :
                      Taux de présence moyen de l'étudiant (pour ce cours) %*/}
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
      {declareAp && <DeclareAp onCancel={handleCloseDeclareAp} />}
    </div>

  );
};

export default ShowModal;