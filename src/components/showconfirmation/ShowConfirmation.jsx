import React, { useState } from 'react';
import './ShowConfirmation.css';

const ShowConfirmation = (props) => {
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [isValidationDone, setIsValidationDone] = useState(false);

  const handleOverlayClick = () => {
    setShowConfirmation(false);
    props.onClose();

  };

  const handleConfirmationClick = () => {
    setIsValidationDone(true);
    setShowConfirmation(false); 
    props.onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
    <div className="confirmation-card">
    <div className="icon-container">
          <i className="fas fa-check-circle"></i>
        </div>
      <div className="confirmation-content">
        <h3>Absences prévues le :</h3>
        <div className="confirmation-details">
         <p>14/01/2023</p>
         <p>21/01/2023</p>
           {/* 
                    Route : Récupération du nombre d'étudiants présent et absents (renseigner par le prof.)"
                    URL (POST) : https://base-shatibi.iela.fr/api-v1/teacher/attendance/group/list
                    Informations transmises :
                        ID du groupe
                        ID de l'étudiant
                        Date du cours (format : yyyy-mm-dd)
                    Attendu dans le corps de la requête :
                        {
                            "group_id": 486,
                            "student_id": 2439,
                            "date": "2022-10-21"
                        }
                    Informations attendues :
                        Le nb d'absents et de présent pour la séance du jour
                    Retour = {
                        'status': (string) "fail" ou "success",
                        'error': (string) "" si status success, "no_request" si requête pas interprétée,
                                                                "no_year" si pas d'année scolaire trouvée avec la date,
                                                                "no_attendance" si pas d'émargement trouvé,
                        'result': (array) vide si status fail, sinon [
                            {
                                'name': (string) nom et prénom de l'étudiant,
                                'nb_absent': (int) nombre d'absents,
                                'nb_present': (int) nombre de présents
                            }
                        ]
                    }
                */}
        </div>
        
        <div className="confirmation-buttons">
          <button className="valider-button" onClick={handleConfirmationClick}>Valider</button>
          <button className="annuler-button" onClick={handleOverlayClick}>Annuler</button>
        </div>
      </div>
    </div>
  </div>

  );
};

export default ShowConfirmation;