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
      
      Route : Récupération de la liste des étudiants du groupe sélectionné
      URL (GET) : https://base-shatibi.iela.fr/api-v1/teacher/{ID du groupe}/student/list/group
      Informations transmises :
          ID du groupe
      Informations attendues :
          Liste des étudiants (nom + nb absence (AP+AI))
      Retour = {
          'status': (string) "fail" ou "success",
          'error': (string) "" si status success, "no_request" si requête pas interprétée, "no_student" si pas d'étudiant trouvé,
          'result': (array) vide si status fail, sinon [
              {
                  'name': (string) nom et prénom de l'étudiant,
                  'nb_ap': (int) nombre d'absences prévues (AP),
                  'nb_ai': (int) nombre d'absences injustifiées (AI)
              },
              {
                  etc.
              }
          ]
      }
      */
  }
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