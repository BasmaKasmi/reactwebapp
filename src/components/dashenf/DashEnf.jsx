// Colonne Emargements non fait

import React, { useState } from 'react';
 import { Link } from 'react-router-dom';


const DashEnf = () => {
  const [selectedTitle, setSelectedTitle] = useState('');  
  const [selectedDay, setSelectedDay] = useState(''); 


  const groupes = [
    {id: 1, groupName: 'Sciences islamiques 2ème année', schedule: 'Jeu 18h00 à 12h00', session: '11/32'},
  ];

  return (
    <div>
      <div className="column-Enf">
        {/* En-tête de la colonne */}
        <div className="column-header">
          <h2>Emargements non faits</h2> 
        </div>
        <Link
        to={{
          pathname: '/nomdetudiant',
          state: { title: 'Sciences islamiques 2ème année', day: 'Jeu 18h00 à 12h00' }
          }}
          onClick={() => {
            setSelectedTitle('Sciences islamiques 2ème année');
            setSelectedDay('Jeu 18h00 à 12h00');
            }}
            >
          {/*

          EMARGEMENT NON FAIT : reprends les émargements du professeur qui n'ont pas été faits : 
             - Les émargements peuvent être de jours différents et/ou de cours différents

        */}
        <div className='dash-block'>
        <h1 className='date'>Jeudi 8 Dec 2022</h1>
        { /*
                Route : Récupération de la date de.s émargement.s non fait.s
                URL (GET) : https://base-shatibi.iela.fr/api-v1/teacher/attendance/no/validate
                Informations attendues :
                    Date de l'émargement passé et non validé par le professeur (sous forme de card 'nom du cours et son horaire')
                Retour = {
                    'status': (string) "fail" ou "success",
                    'error': (string) "" si status success, "no_request" si requête pas interprétée,
                                                            "no_group" si pas de groupe trouvé,
                                                            "no_attendance" si pas d'émargement trouvé,
                    'result': (array) vide si status fail, sinon [
                        {
                            'id': (int) ID du groupe,
                            'name': (string) description du groupe,
                            'slot': (string) créneau du groupe,
                            'date_list': [
                                {
                                    'date': (string) date au format "yyyy-mm-dd",
                                    'time': (string) heure au format "18h30",
                                    'session': (int) numéro de la session
                                },
                                {
                                    etc.
                                }
                            ]
                        },
                        {
                            etc.
                        }
                    ]
                }
            */}
           { /*
                Route : Récupération de la liste des émargements du professeur qui n'ont pas été faits
                URL : Idem précédente
                Informations transmises :
                    Identifiant du prof
                    Date du jour
                    ID du groupe
                Informations attendues :
                    Liste des émargements non faits (statut "non validé") (date et heure du cours < date et heure actuelle (+2h au minimum))
                    Un mail de rappel doit être envoyé au prof pour lui rappeler de faire son emargement du jour
            */}
        {groupes.map((emargement) => (
            <div className="card" key={emargement.id}>
              <h3>{emargement.groupName}</h3>
              <div className='row'>
                <p className='day'>{emargement.schedule}</p>
                <p className='session'>{emargement.session}</p>
                { /*
            Route : Récupération des infos sur l'émargement
            URL : Idem précédente
            Informations transmises :
                Identifiant du prof
                ID du groupe
                Date du cours
            Informations attendues (sous forme de card):
                Nom du groupe
                horaire du cours
                Numéro de la séance
            */}
              </div>
            </div>
          ))}
        </div>
        </Link>
      </div>

    </div>
  );
};

export default DashEnf; 