import React, { useState } from 'react';
import './DashEm.css';
import { Link } from 'react-router-dom';

// importation de l'icone de validation
import iconeValidation from '../../assets/valid.svg'; 
import classNames from 'classnames'; 


// Définition du Dashboard

const DashEm = () => {
  // Utilisation de useState pour gérer l'état local du composant.
  const [selectedTitle, setSelectedTitle] = useState('');  
  const [selectedDay, setSelectedDay] = useState(''); 
    const [isEmargementValide, setIsEmargementValide] = useState(false); 

  //lorsque l'utilisateur clique sur un bouton de validation
  const validerEmargement = () => {
    setIsEmargementValide(true);
  };


  const groupes = [
    {
      id: 1,
      groupName: 'Sciences islamiques 2ème année',
      schedule: 'Jeu 18h00 à 12h00',
      session: '11/32',
    },
  ];

  return (
    <div>
        <div className="column-Enf">
        <div className="column-header orange-bg">
            {/* Titre de l'en-tête */}
          <h2>Mes emargements</h2>
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

          Rubrique MES EMARGEMENTS : reprends les prochains cours du professeur pour la journée, il est à noter que : 
             - Un professeur peut avoir plus de 3 cours au cours d'une journée (prévoir un glissement)
             - Cette rubrique ne doit proposer que les 3 prochains cours à la fois

        */}
        <div className='dash-block'>
        {/* Titre de la date */}
        <h1 className='date'>Samedi 17 Dec 2022</h1>
        { /*
                Route : Récupération de la date du jour
                URL (GET) : https://base-shatibi.iela.fr/api-v1/teacher/{ID du professeur}/attendance/incoming
                Informations transmises :
                    ID du professeur
                Informations attendues :
                    Date du prochain cours du prof
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
                            'classroom': (string) nom de la salle,
                            'date_list': [
                                {
                                    'date': (string) date au format "yyyy-mm-dd",
                                    'start_time': (string) heure de début au format "18h30",
                                    'end_time': (string) heure de fin au format "20h30",
                                    'session': (int) numéro de la session,
                                    'validate': (bool) émargement validé
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
            {/* div pour prochains cours */}
        { /*
            Route : Récupération de la liste de.s prochain.s cours du professeur
            URL : Idem précédente
            Informations transmises :
                ID du professeur
            Informations attendues :
                Liste de.s cours du prof à cette date (MAX 3 COURS)
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
        <div className={classNames('emargement-validation-desktop', { 'hide-validation': !isEmargementValide })}>
          <img src={iconeValidation} alt="Emargement validé" />
        </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default DashEm;