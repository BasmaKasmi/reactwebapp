import React, { useState } from 'react';
import './SelectStudent.css';
import user from '../../assets/2 User.png';
import DeclareAp from '../declareap/DeclareAp';



const SelectStudent = (props) => {
    const [selectStudent, setselectStudent] = useState(false);
    const[declareAp, setdeclareAp] = useState(false);
    const [isAnyPopupOpen, setIsAnyPopupOpen] = useState(false);

    const handleCloseSelectStudent = () => {
      setIsAnyPopupOpen(false); 
      setselectStudent(false);
    };
    const handleDeclareAp = () => {
        setdeclareAp(true)
      }
      const handleCloseDeclareAp = () => {
        setdeclareAp(false);
      };

  const studentsData = [
    { name: 'Nom de létudiant', absences: 3 },
    { name: 'Nom de létudiant', absences: 3 },
    { name: 'Nom de létudiant', absences: 3 },
    { name: 'Nom de létudiant', absences: 3 }
  ];

  return (
            <div>
              {!declareAp && !isAnyPopupOpen && (
                <div className="modal-overlay" onClick={handleCloseSelectStudent}>
                <div className="mod-desktop">
                <div className="pop-up-title">
                <h2> Sciences islamiques </h2>
                <h3>Date et heure du cours</h3>
                {/* Route : Récupération du nom du cours sélectionné et son horaires au format "Jeu 18h à 21h"
                    URL :
                    Informations transmises :
                    identifiant/nom de l'étudiant 
                    ID du professeur (afin de faire matcher l'etudiant avec un des groupes du prof)
                    Informations attendues :
                    Nom du cours sélectionné et son horaire format "Jeu 18h à 21h"*/}
                </div>
                  <div className="blok-sc">
                  <div className="ap-line">
                    <img src={user} alt='' />
                      <h3>Rechercher par groupe :</h3>
                  </div>
                  <div className="gr-cont">
                    {studentsData.map((student, index) => (
                    <div className="gr" onClick={handleDeclareAp} key={index}>
                      <h3>{student.name}</h3>
                        {/* Route : Récupération du nom de l'étudiant"
                    URL :
                    Informations transmises :
                    ID de l'étudiant
                    Informations attendues :
                    Nom et prénom de l'étudiant )*/}
                    <div>
                      <p className='jr'>Absence(s): {student.absences}</p>
                       {/* Route : Récupération du nom de l'étudiant et nb de ses absences"
                    URL :
                    Informations transmises :
                    ID de l'étudiant
                    Informations attendues :
                    Nom et prénom + Nb absences (AP+AI) )*/}
                    </div>
                  </div>
                  ))}
                  </div>
                  </div>
                  <button className="c-button" onClick={props.onCancel}> Annuler</button>
                </div>
              </div>
              )}
      {declareAp && <DeclareAp onClick={handleCloseDeclareAp} />}
    </div>

  );
};

export default SelectStudent;