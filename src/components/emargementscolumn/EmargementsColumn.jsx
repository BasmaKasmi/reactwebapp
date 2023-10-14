import React, { useState, useEffect } from 'react';
import classnames from 'classnames'; // importation de la bibliothèque 'classnames'
import cldr from '../../assets/calendar.svg'; 
import st from '../../assets/student.svg'; 
import './EmargementsColumn.css'; 
import Emarg2 from '../emarg2/Emarg2';

const EmargementsColumn = (props) => {

   // Utilisation de l'état local pour suivre l'état de la carte active
   const [activeCard, setActiveCard] = useState(null);
   const [emargementId, setEmargementId] = useState(null);
   const { selectedCard } = props;
 
   useEffect(() => {
     if (props.selectedCard) {
      setEmargementId(null)
       setActiveCard(props.selectedCard.title); 
     }

   }, [props.selectedCard]);

  if (emargementId !== null) {
   return (
     <Emarg2
     emargementId={emargementId}
     setEmargementId={setEmargementId}
     activeCard={activeCard}
     />
   );
 }

  return (
    <div> 
      <div className='groupe'>
        {/* Div pour l'en-tête de colonne */}
        <div className="column-head">
          {activeCard && <h3>{activeCard}</h3>}
          {selectedCard && <p className='day'>{selectedCard.date}</p>}
        </div>
        <div className="agenda-info">
          <img src={cldr} alt=''/>
          <span>Choisir dates :</span>
              {/*
                Route : Récupération de la plage de date automatiquement avec possibilité de changer
                URL (POST) : https://base-shatibi.iela.fr/api-v1/teacher/attendance/group/student
                Informations transmises :
                    ID du groupe
                    ID de l'étudiant
                    Date de début (format : yyyy-mm-dd)
                Attendu dans le corps de la requête :
                    {
                        "group_id": 486,
                        "student_id": 2439,
                        "start_date": "2022-10-21"
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
                        (string) date au format "yyyy-mm-dd"
                    ]
                }
            */}
        </div>
        {/* Div pour les entrées de date */}
        <div className="d-inputs">
            <input type="text" placeholder="01/01/2023" />
            <input type="text" placeholder="28/01/2023" />
            <img src={st} alt=''/>
        </div>
        { /*
                Route : Récupération de la liste des émargements d'un groupe
                URL (GET) : https://base-shatibi.iela.fr/api-v1/teacher/{ID du groupe}/attendance/list/{ID du professeur}/group
                Informations transmises :
                    ID du groupe
                    ID du professeur
                Informations attendues :
                    Liste des émargements du groupe de semaine n-1 à semaine +3 soit 5 dates ou selon date saisies par le prof.
                Retour = {
                    'status': (string) "fail" ou "success",
                    'error': (string) "" si status success, "no_request" si requête pas interprétée,
                                                            "no_attendance" si pas d'émargement trouvé,
                    'result': (array) vide si status fail, sinon [
                        {
                            'id': (int) identifiant de l'émargement,
                            'date': (string) date au format "yyyy-mm-dd",
                            'validate': (bool) émargement validé
                        },
                        {
                            etc.
                        }
                    ]
                }
            */}
        {[
         {id : 'emargementId1', status: 'FAIT', date : '12/12/2022'},
         {id : 'emargementId2', status: 'NON FAIT', date: '10/12/2022'},
       ].map(({id, status, date}) => (
         <div key={id} className='c' onClick={() => setEmargementId(id)}>
           <div className='row'>
             <h3>Emargement : {date}</h3>
             <span className={status === 'FAIT' ? 'status-f' : 'status-n'}>
               {status}
             </span>
             { /*
                    Route : Récupération des infos sur l'émargement
                    URL (GET) : https://base-shatibi.iela.fr/api-v1/teacher/{ID de l'émargement}/attendance/{ID du professeur}/status
                    Informations transmises :
                        ID de l'émargement
                        ID du professeur
                    Informations attendues :
                        Date de l'émargement et son statut (non fait ou fait)
                    Retour = {
                        'status': (string) "fail" ou "success",
                        'error': (string) "" si status success, "no_request" si requête pas interprétée,
                                                                "no_attendance" si pas d'émargement trouvé,
                        'result': (array) vide si status fail, sinon [
                            'date': (string) date au format "yyyy-mm-dd",
                            'validate': (bool) émargement validé
                        ]
                    }
                */}
           </div>
         </div>
       )
       )
       }

      </div>
  
    </div>
  );
}

export default EmargementsColumn;