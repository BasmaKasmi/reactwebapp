import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Emarg2.css';
import ShowModal from '../showmodal/ShowModal';
import ShowValidation from '../showvalidation/ShowValidation';

const Emarg2 = (props) => {
  const { title, date } = useParams();
  const [activeCard, setActiveCard] = useState(null);
  const [ai1ButtonActive, setAi1ButtonActive] = useState(false);
  const [ap1ButtonActive, setAp1ButtonActive] = useState(false);

  const { selectedCard } = props;

  useEffect(() => {
    if (props.selectedCard) {
      setActiveCard(props.selectedCard.title); 
    }
  }, [props.selectedCard]);

  const [showModal, setShowModal] = useState(false);
  const [showValidation, setShowValidation] = useState(false); 
  

  const handleClick = () => {
    setShowModal(true);
  };
  const handleCloseShowModal = () => {
    setShowModal(false);
  };

  const handleValidationClick = () => {
    setShowValidation(true);
  };

  const handleRetourClick = () => {
    props.setEmargementId(null);
  };

     const handleOverlayClick = (e) => {
      const isOverlay = e.target.classList.contains('modal-overlay');
      const isCancel = e.target.classList.contains('an');
      const isCancelButton = e.target.classList.contains('annuler-button');

    
      if (isOverlay || isCancel || isCancelButton) {
        handleCloseShowModal();
        setShowValidation(false);

      }
    };

    const students = [
      { id: 1, nom: 'Nom de l’étudiant', absences: 3 },
    ];
    const boutons = [
      { id: 'ap', texte: 'AP', active: ap1ButtonActive, setActive: setAp1ButtonActive },
      { id: 'ai', texte: 'AI', active: ai1ButtonActive, setActive: setAi1ButtonActive }
    ];
    
  return (
    <div>
      <div className="groupe">
          {/* Div pour l'en-tête de colonne */}
          <div className="column-head">
          {/* Affiche le titre sélectionné */}
          {props.activeCard && <h3>{props.activeCard}</h3>}
          {/* Affiche le jour sélectionné */}
          {selectedCard && <p className='day'>{date}</p>}
        </div>
        <div className='card-container'  style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
        { /*
            Route : Récupération de la liste des étudiants du groupe sélectionné
            URL :
            Informations transmises :
                Identifiant du groupe
            Informations attendues :
                Liste des étudiants
            */}
    {students.map((student) => (
    <div key={student.id} className={`std ${ap1ButtonActive ? 'ap-active' : ''} ${ai1ButtonActive ? 'ai-active' : ''}`}>
      <div className='row'>
        <div className='col' onClick={handleClick}>
          <h3>{student.nom}</h3>
          <span>Absence(s) : {student.absences}</span>
          { /*
           Route : Récupération des infos de l'étudiant
           URL :
           Informations transmises :
               Identifiant de l'étudiant
           Informations attendues (sous forme de card):
               Nom & prénom de l'étudiant
               Nb d'absences de l'étudiant (AP+AI)
           */}
        </div>
        <div className="student-buttons">
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

        <div className='butt-container'>
        <button className="fem-butt" onClick={handleValidationClick}>
          Valider la feuille d'émargement
        </button>
        <button className="an-butt" onClick={handleRetourClick}>Annuler</button>        
        {showValidation && (
          <div className="modal-overlay" onClick={handleOverlayClick}>
          <ShowValidation handleOverlayClick={handleOverlayClick} />
        </div>
        )}
      </div>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <ShowModal handleOverlayClick={handleOverlayClick} />
        </div>
      )}
    </div>
  );
}

export default Emarg2;