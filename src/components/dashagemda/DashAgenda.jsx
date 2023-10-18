import React from 'react';
import './DashAgenda.css';
import { Link } from 'react-router-dom';

const DashAgenda = () => {

   const coursDate17 = [
    {id: 1, title: 'Sciences islamiques 1ère année', day: 'Jeu 18h00 à 12h00', session: '11/32'},
    {id: 2, title: 'Sciences islamiques 2ème année', day: 'Jeu 18h00 à 12h00', session: '11/32'},
  ];

  const coursDate19 = [
    {id: 2, title: 'Sciences islamiques 3ème année', day: 'Sam 10h00 à 14h00', session: '5/32'},
  ];

  return (
    <div>
      <div className="column">
          {/* En-tête de la colonne avec arrière-plan orange */}
        <div className="column-header orange-bg">
          <h2>Mon agenda</h2>
         {/*

          Rubrique MON AGENDA : 
            - Afficher les 3 prochains cours du professeur et leur date (peuvent être sur plusieurs jours)

        */}
        </div>
        <div className='dash-block'>
        <h1 className='date'>Samedi 17 Dec 2022</h1>
        { /*
            Route : Récupération de la/les date.s des 3 prochains cours
            URL (GET) : https://base-shatibi.iela.fr/api-v1/teacher/attendance/next/agenda
            Informations attendues :
                Date.s des prochains cours
            Retour = {
                'status': (string) "fail" ou "success",
                'error': (string) "" si status success, "no_request" si requête pas interprétée,
                                                        "no_group" si pas de groupe trouvé,
                                                        "no_attendance" si pas d'émargement trouvé,
                'result': (array) vide si status fail, sinon {
                    (string) date au format "yyyy-mm-dd" : [
                        'id': (int) ID du groupe,
                        'name': (string) description du groupe,
                        'slot': (string) créneau du groupe,
                        'classroom': (string) nom de la salle,
                        'start_time': (string) heure de début au format "18h30",
                        'end_time': (string) heure de fin au format "20h30",
                        'session': (string) numéro de la session au format "10/35"
                    ],
                    (string) date au format "yyyy-mm-dd" : [
                        etc.
                    ],
                    etc
                }
            }
        */}
        { /*
            Route : Récupération de la liste de.s cours du jour
            URL : Idem précédente
            Informations transmises :
                Identifiant du prof
                Date du jour
                ID du groupe
            Informations attendues :
                Liste de.s cours du jour
            */}
        
            {coursDate17.map((coursItem) => (
          <Link to='/agenda' key={coursItem.id}>
            <div className="card">
              <h3>{coursItem.title}</h3>
              <div className='row'>
                <p className='day'>{coursItem.day}</p>
                <p className='session'>{coursItem.session}</p>
                { /*
            Route : Récupération des infos sur le cours
            URL : Idem précédente
            Informations transmises :
                Identifiant du prof
                ID du groupe
                Date du cours
            Informations attendues (sous forme de group):
                Nom du groupe
                horaire du cours
                Numéro de la séance
            */}
              </div>
            </div>
          </Link>
        ))}
        </div>
        <div className='dash-block'>
        <h1 className='date'>Samedi 19 Dec 2022</h1>
        
        {coursDate19.map((coursItem) => (
          <Link to='/agenda' key={coursItem.id}>
            <div className="card">
              <h3>{coursItem.title}</h3>
              <div className='row'>
                <p className='day'>{coursItem.day}</p>
                <p className='session'>{coursItem.session}</p>
                { /*
            Route : Récupération des infos sur le cours
            URL : Idem précédente
            Informations transmises :
                Identifiant du prof
                ID du groupe
                Date du cours
            Informations attendues (sous forme de group):
                Nom du groupe
                horaire du cours
                Numéro de la séance
            */}
              </div>
            </div>
          </Link>
        ))}
        </div>
      </div>
        
    </div>
  );
};

export default DashAgenda; 