import React, { useState } from 'react';
import './ColonneGroupes.css';

const ColonneGroupes = (props) => {
  const { onCardClick } = props; 

  // Utilisation de l'état local pour suivre l'état de la carte active
  const [activeCard, setActiveCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState({ title: '', date: '' });


  const handleCardClick = (title, date) => {
    const cardData = { title, date };
    setSelectedCard(cardData); 
    setActiveCard(title);
    onCardClick(title, date);
  };
 

  const groupes = [
    { id: 1, titre: 'Sciences islamiques 2ème année', horaire: 'Jeu 18h00 à 12h00', session: '11/32'},
    { id: 2, titre: 'Sciences islamiques 1ère année', horaire: 'Jeu 18h00 à 12h00', session: '11/32' },
    { id: 3, titre: 'Sciences islamiques 3ème année', horaire: 'Jeu 18h00 à 12h00', session: '11/32' },
  ];

  return (
    <div>
    <div className="column-Enf">
        {/* En-tête de la colonne */}
          <div className="column-header">
            <h2>Mes groupes</h2>
          </div>
          <div className='dash-block'>
          { /*
            Route : Récupération de la liste des groupes du professeur 
            URL : Idem précédente
            Informations transmises :
                Identifiant du professeur, Id de l'année
            Informations attendues :
                Liste des groupes du prof. (sous forme de card (nom + horaire))
            */}
            {groupes.map((groupe) => (
            <div
              key={groupe.id}
              className={`card ${activeCard === groupe.titre ? 'clicked' : ''}`}
              onClick={() => handleCardClick(groupe.titre, groupe.horaire)}
            >
              <h3>{groupe.titre}</h3>
              <div className='row'>
                <p className='day'>{groupe.horaire}</p>
                <p className='session'>{groupe.session}</p>
                { /*
                  Route : Récupération du nom du groupe et de son horaire
                  URL : Idem précédente
                  Informations transmises :
                      Identifiant du groupe
                  Informations attendues :
                      Nom du groupe (h3)
                      Horaire du groupe (p)
                      Le numéro de la séance (11/32séances)
                  */}
              </div>
            </div>
          ))}
          </div>
        </div>

    </div>
  );
}

export default ColonneGroupes; 