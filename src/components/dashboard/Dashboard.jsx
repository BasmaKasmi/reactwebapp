// version mobile

import React, { useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import st from '../../assets/student.svg';
import nom from '../../assets/nom.svg';
import iconeValidation from '../../assets/valid.svg'; 
import classNames from 'classnames'; 



const Dashboard = () => {
  // Utilisation de useState pour gérer l'état local du composant.
  const[showAp, setshowAp] = useState(false); 
  const [isEmargementValide, setIsEmargementValide] = useState(false); // Pour suivre si l'émargement est validé ou non 

  const validerEmargement = () => {
    setIsEmargementValide(true);
  };

  const handleShowAp = () => {
    setshowAp(true)
  }
  const handleCloseShowAp = () => {
    setshowAp(false);
  };
  const groupes = [
    { id: 1, nom: "Sciences islamiques 2ème année", date: "Sam 10 Déc 2022", emargements: "11/32"},
    { id: 2, nom: "Sciences islamiques 3ème année", date: "Sam 10 Déc 2022", emargements: "11/32"}
  ];
  const cours = [
    { id: 1, startTime: '10h15', endTime: '13h15', groupName: 'Sciences islamiques 1ère année', room: 'Salle n°1', attendance: '11/32', isEmargementValide: true },
    { id: 2, startTime: '10h15', endTime: '13h15', groupName: 'Sciences islamiques 2ème année', room: 'Salle n°1', attendance: '11/32', isEmargementValide: true },
  ];
  const groupesPopup = [
    { id: 1, name: "Sciences islamiques 1ère année", schedule: "Jeu 18h00 à 12h00" },
    { id: 2, name: "Sciences islamiques 1ère année", schedule: "Jeu 18h00 à 12h00"},
    { id: 3, name: "Sciences islamiques 2ème année", schedule: "Sam 10h15 à 13h15" },
    { id: 4, name: "Sciences islamiques 2ème année", schedule: "Sam 10h15 à 13h15" }
  ];

  return (
    <div className="dashboard">
      <div className="column-r">
      <div className="pink-box">
          <h2>Emargements non faits</h2>
        <div className="content">
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
            <div className="entry-cont">
            {groupes.map((coursItem) => (
              <Link to={`/rappel`} key={coursItem.id}>
                <div className="entry">
                  <h3>{coursItem.nom}</h3>
                  <div className="details">
                    <p className="date">{coursItem.date}</p>
                    <p className="count">{coursItem.emargements}</p>
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
             </Link>
             ))}
            </div>
        </div>
      </div>
      <div className="date-section">
        <h2>Samedi 17 Déc 2022</h2>
        { /*
            Route : Récupération de la date du jour
            URL : Idem précédente
            Informations transmises :
                aucune
            Informations attendues :
                Date du prochain cours du prof
            */}
      </div>
      <div className="dash-cont">
      { /*
            Route : Récupération de la liste de.s prochain.s cours du professeur
            URL : Idem précédente
            Informations transmises :
                Identifiant du prof
                Date du jour
            Informations attendues :
                Liste de.s cours du jour du prof (MAX 3 COURS)
            */}
             {cours.map((cours) => (
             <Link to='/recap' key={cours.id}>
              <div className="dashboard-entry">
              { /*
            Route : Récupération des infos sur le cours
            URL : Idem précédente
            Informations transmises :
                Identifiant du prof
                ID du groupe
                Date du cours
            Informations attendues (sous forme de card):
                Nom du groupe
                horaire du cours (début et fin)
                Numéro de la séance
                Salle du cours
                Statut de l'émargement (si valide 'iconValidation visible en vert')
            */}
                <div className="time">
                  <p>{cours.startTime}</p>
                  <p>{cours.endTime}</p>
                  </div>
                  <div className="divider"></div>
                   <div className="details">
                    <p>{cours.groupName}</p>
                    <div className="extra-info">
                      <p className="room">{cours.room}</p>
                      <p className="count">{cours.attendance}</p>
                    </div>
                    </div>
                    <div className={classNames('emargement-validation', { 'hide-validation': !cours.isEmargementValide })}>
                      <img src={iconeValidation} alt="Emargement validé" />
                    </div> 
               </div>
             </Link> 
             ))}
             </div>
           </div>
    {/* Bouton pour déclarer une AP */}
    <button className="ap-bo" onClick={handleShowAp}>Déclarer une AP</button>

    {/* Si showAp est vrai, affiche le contenu suivant */}
    {showAp && (
        <div className="modal-overlay" onClick={handleCloseShowAp}>
          <div className="modal">
            <h2> Déclarer une AP </h2>
            <div className='bloc1'>
            <div className="agenda-r">
              <img src={nom} alt='' />
              {/*
                    Route : Recherche par nom
                    URL (POST) : https://base-shatibi.iela.fr/api-v1/teacher/find/student/information
                    Informations transmises :
                        ID du professeur
                        Nom de l'étudiant (saisie input)
                    Attendu dans le corps de la requête :
                        {
                            "teacher_id": 50,
                            "year_id": 8,
                            "student_name": "Test"
                        }
                    Informations attendues :
                        Retrouver l'étudiant dans la BDD
                    Retour = {
                        'status': (string) "fail" ou "success",
                        'error': (string) "" si status success, "no_request" si requête pas interprétée,
                                                                "no_group" si pas de groupe trouvé,
                                                                "no_student" si pas d'étudiant trouvé,
                        'result': (array) vide si status fail ou aucune correspondance, sinon [
                            {
                                "student_id": (int) identifiant de l'étudiant,
                                "lastname": (string) nom de famille,
                                "firstname": (string) prénom
                            },
                            {
                                etc.
                            }
                        ]
                    }
                */}
            <h3>Rechercher par nom :</h3>
            </div>
             <div className="date-input" onClick={(e) => e.stopPropagation()}>
             <input type="text" placeholder=" Saisir un nom d’étudiant " />
             <img src={st} alt='' />
             </div>
            </div>
            <div className='bloc2'>
                <div className="ap-r">
              <img src={nom} alt='' />
                <h3>Rechercher par groupe :</h3>
                </div>
                <div className='g-cont'>
                    {/*
                        Route : Récupération de la liste des groupes du prof
                        URL (GET) : https://base-shatibi.iela.fr/api-v1/teacher/{ID du professeur}/group/list/year
                        Informations transmises :
                            ID du professeur
                        Informations attendues :
                            Liste des groupes du prof
                        Retour = {
                            'status': (string) "fail" ou "success",
                            'error': (string) "" si status success, "no_request" si requête pas interprétée,
                                                                    "no_group" si pas de groupe trouvé,
                            'result': (array) vide si status fail, sinon [
                                {
                                    'id': (int) ID du groupe,
                                    'name': (string) description du groupe,
                                    'slot': (string) créneau du groupe,
                                    'session': (string) le numéro de la séance (ex : 11/32)
                                },
                                {
                                    etc.
                                }
                            ]
                        }
                    */}
                    {groupesPopup.map(groupe => (
                    <Link to="/recappopup" key={groupe.id}>
                      <div className="g" >
                        <h3>{groupe.name}</h3>
                        <div>
                          <p className='d'>{groupe.schedule}</p>
                        </div>
                        {/*
                    Route : Récupération du nom du cours sélectionné et son horaires au format "Jeu 18h à 21h"
                    URL :
                    Informations transmises :
                        identifiant/nom de l'étudiant 
                        ID du professeur (afin de faire matcher l'etudiant avec un des groupes du prof)
                    Informations attendues :
                        Nom du cours sélectionné et son horaire format "Jeu 18h à 21h"
                */}
                      </div>
                    </Link>
                     ))}
              </div>
            </div>
          <button className="ce-button">Annuler</button>
            </div>
          </div>
)} 
    </div>
  );
};

export default Dashboard; 