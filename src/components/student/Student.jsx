import React, { useState } from 'react';
import './Student.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ShowModal from '../showmodal/ShowModal';
import ShowValidation from '../showvalidation/ShowValidation';



const Student = () => {
  // Utilisons useLocation pour récupérer les données passées dans l'URL
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [ai1ButtonActive, setAi1ButtonActive] = useState(false);
  const [ap1ButtonActive, setAp1ButtonActive] = useState(false);
  

  const navigate = useNavigate(); 

  const handleRetourClick = () => {
    navigate(-1); 
  };

  const handleClick = () => {
    setShowModal(true);
  };
  const handleCloseShowModal = () => {
    setShowModal(false);
  };

  const handleValidationClick = () => {
    setShowValidation(true);
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
    <div className='Emargements'>
      <div className="groups">
        <div className="column-head">
          <h3>Sciences islamiques   2ème année</h3> 
          <p className='day'>Jeu 18h00 à 12h00</p>
           { /*
            Route : Récupération du nom du groupe sélectionné et de son horaire
            URL :
            Informations transmises :
                Identifiant du groupe
            Informations attendues :
                Nom du groupe (h3)
                Horaire du groupe (p)
            */}
        </div>
        <div className="list-container"> 
        { /*
            Route : Récupération de la liste des étudiants du groupe sélectionné
            URL :
            Informations transmises :
                Identifiant du groupe
            Informations attendues :
                Liste des étudiants
            */}
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
        </div>
        
        <div className='button-container'>
        <button className="fem-button" onClick={handleValidationClick}>
          Valider la feuille d'émargement
           {/*
            Valider une feulle d'émargement
            */}
        </button>
        <button className="an-button" onClick={handleRetourClick}>Annuler</button>
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

export default Student;