import React, { useState } from 'react';
import status from '../../assets/statusup.svg';
import stu from '../../assets/2 User.png';
import './RecapEm.css';
import ShowModal from '../showmodal/ShowModal';

const RecapEm = () => {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [ai1ButtonActive, setAi1ButtonActive] = useState(false);
  const [ap1ButtonActive, setAp1ButtonActive] = useState(false);
 

  const handleClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleValidationClick = () => {
    setShowValidation(true);
  };
  const handleOverlayClick = () => {
    setShowConfirmation(false);
    setShowValidation(false);
    document.body.classList.remove('modal-open');
  };

  const etudiants = [
    { id: 1, nom: "Nom de l'étudiant", absences: 3 },
    { id: 2, nom: "Nom de l'étudiant", absences: 3 },
  ];
  const boutons = [
    { id: 'ap', texte: 'AP', active: ap1ButtonActive, setActive: setAp1ButtonActive },
    { id: 'ai', texte: 'AI', active: ai1ButtonActive, setActive: setAi1ButtonActive }
  ];

  return (
    <div className='Recap'>
        <div className='header'>
        <h2>Sciences islamiques</h2>
        <h3>Date du cours</h3>
        </div>
        <div className="recap-row">
        <img src={status} alt='' />
        <h3> Récapitulatif du groupe : </h3>
        </div>
      <div className="c">
        <div className='row'>
          <div className='col'>
            <h3>17</h3>
            <p className="description">Inscrits</p>
          </div>
          <div className='col'>
            <h3>2</h3>
            <p className="description">Abandon(s)</p>
          </div>
          <div className='col'>
            <h3>65%</h3>
            <p className="description">Présence</p>
          </div>
          <div className='col'>
            <h3>2/32</h3>
            <p className="description">Progression</p>
          </div>
        </div>
      </div>
        <div className="stu-row">
        <img src={stu} alt='' />
        <h3> Nombre d’étudiants : 22 </h3>
        </div>
        <div className='container-re'>
  {etudiants.map((etudiant) => (
    <div key={etudiant.id} className={`card-s ${ap1ButtonActive ? 'ap-active' : ''} ${ai1ButtonActive ? 'ai-active' : ''}`}>
      <div className='row'>
        <div className='col' onClick={handleClick}>
          <h3>{etudiant.nom}</h3>
          <p>Absence(s) : {etudiant.absences}</p>
        </div>
        <div className="b-container">
  {boutons.map((bouton) => {
    if ((bouton.id === 'ap' && ai1ButtonActive) || (bouton.id === 'ai' && ap1ButtonActive)) {
      return null;
    }
    return (
      <button
        key={bouton.id}
        className={`${bouton.id}-b ${bouton.active ? 'active' : ''}`}
        onClick={() => {
          bouton.setActive(!bouton.active);
          boutons.forEach((autreBouton) => {
            if (autreBouton.id !== bouton.id && autreBouton.active) {
              autreBouton.setActive(false);
            }
          });
        }}
      >
        {bouton.texte}
      </button>
    );
  })}
</div>
      </div>
    </div>
  ))}
</div>
      <div className="b-c">
        <button className="va-button" onClick={handleValidationClick}>Valider la feuille d'émargement</button>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <ShowModal handleOverlayClick={handleOverlayClick} />
        </div>
      )}
    </div>
  )
}

export default RecapEm;