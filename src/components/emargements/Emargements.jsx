// version mobile

import React from 'react'; 
import { Link } from 'react-router-dom';
import './Emargements.css'; 

const Emargements = () => {
  
  const groupData = [
    { id: 1, name: "Sciences islamiques 1ère année", slot: "Jeu 18h00 à 12h00", session: "11/32" },
    { id: 2, name: "Sciences islamiques 2éme année", slot: "Lun 14h00 à 16h00", session: "11/32" },
    { id: 3, name: "Sciences islamiques 3éme année", slot: "Lun 14h00 à 16h00", session: "11/32" },

  ];

  return (
    <div> 
    <div className='groupes-res'>
    {/* Affiche le titre "Mes groupes :" */}
    <div className='t'>
    <h3> Mes groupes :</h3>
    </div>
    {/* Crée un conteneur pour les cartes */}
    <div className='group-cards'>
    <div className='grp-carte'>
    {/*
        Route : Récupération de la liste des groupes du prof
        URL (GET) : https://base-shatibi.iela.fr/api-v1/teacher/group/list/year
        Informations attendues :
            Liste des groupes
        Retour = {
            'status': (string) "fail" ou "success",
            'error': (string) "" si status success, "no_request" si requête pas interprétée, "no_group" si pas de groupe trouvé,
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
    {groupData.map((group) => (
    <Link to='/carddeatils' key={group.id}>
      <div className="group-card">
        <h3>{group.name}</h3>
        <div>
          <p className='group-card-day'>{group.slot}</p>
                   {/*
                Route : Récupération du nom du groupe et de son horaire
                URL : Idem précédente
                Informations transmises :
                    ID du professeur
                    ID de l'année
                Informations attendues :
                    Nom du groupe (h3)
                    Horaire du groupe (p)
            */}
        </div>
      </div>
    </Link>
  ))}
    </div>
    </div>
    </div>
    </div>
  );
}

export default Emargements; 