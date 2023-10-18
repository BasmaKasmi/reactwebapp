import React, { useState } from 'react';
import './DeclareAp.css';
import st from '../../assets/student.svg';
import cldr from '../../assets/calendar.svg';
import user from '../../assets/2 User.png';
import ShowConfirmation from '../showconfirmation/ShowConfirmation';

const DeclareAp =  (props)  => {
  const [startDate, setStartDate] = useState('');
  const[declareAp, setdeclareAp] = useState(false);
  const [endDate, setEndDate] = useState('');
  const [currentPopup, setCurrentPopup] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSearchClick = () => {
    };
    const handleCloseConfirmation = () => {
      setShowConfirmation(false);
    };
    const handleConfirmationClick = () => {
      setShowConfirmation(true);
    };
  
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateCardClick = (date) => {
    if (selectedDates.includes(date)) {
      setSelectedDates(selectedDates.filter(d => d !== date));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };
  const handleCloseDeclareAp = () => {
    setdeclareAp(false);
    setCurrentPopup(null); 
  };

      const dates = ['01/02/2023', '17/02/2023', '13/07/2023', '15/07/2023'];


  return (
    <div>
    {!showConfirmation  && (
        <div className="modal-overlay" onClick={handleCloseDeclareAp}>
        <div className="mod-desktop">
            <h2>Nom de l'étudiant</h2>
            {/*
                Route : Récupération du nom de l'étudiant
                URL :
                Informations transmises :
                    ID de l'étudiant
                Informations attendues (sous forme de card):
                    Nom & prénom de l'étudiant
            */}
            <div className="blok-sc">
            <div className="cldr-row">
              <img src={cldr} alt='' />
                <h3>Choisir dates :</h3>
            </div>
               {/*
                    Route : Récupération de la plage de date automatiquement avec possibilité de changer
                    URL (POST) : https://base-shatibi.iela.fr/api-v1/teacher/attendance/group/student
                    Informations transmises :
                        ID du groupe
                        ID de l'étudiant
                        Date de début (format : yyyy-mm-dd)
                        Date de fin (format : yyyy-mm-dd) ou null si la date n'est pas transmise
                    Attendu dans le corps de la requête : ATTENTION, CETTE API EST UTILISÉE DANS LES ÉMARGEMENTS, IL FAUT AJOUTER LA DATE DE FIN
                        {
                            "group_id": 486,
                            "student_id": 2439,
                            "start_date": "2022-10-21",
                            "end_date": "2022-11-30"
                        }
                    Informations attendues :
                        définir automatique les dates des inputs (4 prochaines semaines de cours)
                    Retour = {
                        'status': (string) "fail" ou "success",
                        'error': (string) "" si status success, "no_request" si requête pas interprétée,
                                                                "no_year" si pas d'année scolaire trouvée avec la date,
                                                                "no_group" si pas de groupe trouvé ou pas dans l'année,
                                                                "no_attendance" si pas d'émargement trouvé,
                        'result': (array) vide si status fail, sinon [
                            (string) date au format "yyyy-mm-dd",
                            (string) date au format "yyyy-mm-dd",
                            (string) date au format "yyyy-mm-dd",
                            etc.
                        ]
                    }
                */}
            <div className="time-inputs">
            <input type="text" placeholder="01/01/2023" value={startDate} onChange={(e) => setStartDate(e.target.value)} onClick={(e) => e.stopPropagation()} />
            <input type="text" placeholder="28/01/2023" value={endDate} onChange={(e) => setEndDate(e.target.value)} onClick={(e) => e.stopPropagation()} />
                    <button onClick={handleSearchClick}>
                      <img src={st} alt='' />
                    </button>
            </div>
            </div>
            <div className="blok-ap">
            <div className="ap-line">
              <img src={user} alt='' />
                <h3>Sélectionner les AP :</h3>
                 {/* 
                    Route : Récupération des prochaines date de cours de l'étudiant"
                    URL : Idem précédente
                    Informations transmises :
                        ID du groupe
                        ID de l'étudiant
                    Informations attendues :
                        Les 4 prochaines dates de cours de cet étudiant au format JJ/MM/AAAA )
                */}
            </div>
            <div className="time-cards-cont">
              {dates.map((date, index) => (
              <div
              key={index}
              className={`time-card ${selectedDates.includes(date) ? 'selected' : ''}`}
              onClick={() => handleDateCardClick(date)}
              >
                <h3>{date}</h3>
              </div>
              ))}
            </div>
            </div>
              <div className="buttons-row">
                <button className="v-button" onClick={handleConfirmationClick}>Valider</button>
                <button className="cancel-button" onClick={props.onCancel}>Annuler</button>
              </div>
          </div>
        </div>

    )}
    {showConfirmation && <ShowConfirmation onClose={handleCloseConfirmation} />}
    </div>

  );
};

export default DeclareAp;