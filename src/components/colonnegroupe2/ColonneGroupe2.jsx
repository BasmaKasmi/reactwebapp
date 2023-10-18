import React, { useState, useEffect } from 'react';
import './ColonneGroupe2.css';
import ShowModal from '../showmodal/ShowModal';


const ColonneGroupe2 = (props) => {
  // Utilisation de l'état local pour suivre l'état de la carte active
  const [activeCard, setActiveCard] = useState(null);
  const { selectedCard } = props;

  useEffect(() => {
    if (props.selectedCard) {
      setActiveCard(props.selectedCard.title); 
    }
  }, [props.selectedCard]);

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleCloseShowModal = () => {
    setShowModal(false);
  };
   // la div "modal-overlay" pour fermer la popup
   const handleOverlayClick = (e) => {
    const isOverlay = e.target.classList.contains('modal-overlay');
    const isCancel = e.target.classList.contains('an');
  
    if (isOverlay || isCancel) {
      handleCloseShowModal();
    }
  };

  const students = [
    { name: 'Nom de l’étudiant', absences: 3 },
  ];

  return (
    <div>
      <div className="groupe">
        {/* Entête de la colonne */}
        <div className="column-head">
          {activeCard && <h3>{activeCard}</h3>}
          {selectedCard && <p className='day'>{selectedCard.date}</p>}
        </div>
        <div className='card-container' style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
        { /*
            Route : Récupération des infos de l'étudiant
            URL : Idem précédente
            Informations transmises :
                Identifiant de l'étudiant
            Informations attendues (sous forme de card):
                Nom & prénom de l'étudiant
                Nb d'absences de l'étudiant (AP+AI)
            */}
        {students.map((student, index) => (
            <div key={index} className="nom-stu" onClick={handleClick}>
              <h3>{student.name}</h3>
              <p className='abs'>Absence(s) : {student.absences}</p>
              { /*
           Route : Récupération des infos de l'étudiant
           URL : Idem précédente
           Informations transmises :
               Identifiant de l'étudiant
           Informations attendues (sous forme de card):
               Nom & prénom de l'étudiant
               Nb d'absences de l'étudiant (AP+AI)
           */}
            </div>
          ))}
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

export default ColonneGroupe2;