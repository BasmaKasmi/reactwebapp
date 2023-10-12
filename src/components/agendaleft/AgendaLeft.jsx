import React, { useState } from 'react';
import classnames from 'classnames'; 
import './AgendaLeft.css';

const AgendaLeft = ({ onCardClick }) => {
  const [selectedCards, setSelectedCards] = useState([]); 

  const handleCardClick = (cardId, dayType) => {
    // Gérer la sélection des cartes ici
    const updatedSelectedCards = selectedCards.includes(cardId)
      ? selectedCards.filter((id) => id !== cardId)
      : [...selectedCards, cardId];
    setSelectedCards(updatedSelectedCards);
    onCardClick(updatedSelectedCards, dayType);
  };
  

  const groupes = [
 {
      id: 'card-1',
      title: 'Sciences islamiques 1ère année',
      date: 'Samedi 17 Dec 2022',
      time: 'Jeu 18h00 à 12h00',
      session: '11/32',
      dayType: 'Lundi', 
    },
    {
      id: 'card-2',
      title: 'Sciences islamiques 2ème année',
      date: 'Samedi 17 Dec 2022',
      time: 'Lun 14h00 à 18h00',
      session: '11/32',
      dayType: 'Samedi', 
    },
    {
      id: 'card-3',
      title: 'Sciences islamiques 3ème année',
      date: 'Samedi 19 Dec 2022',
      time: 'Jeu 18h00 à 12h00',
      session: '11/32',
    },
  ];
  

  return (
    <div>
      <div className="co">
        <div className="column-header orange-bg">
          <h2>Mon agenda</h2>
        </div>
        {groupes.map((card) => (
          <div className="dash-block" key={card.id}>
            { /*
                  Route : Récupération de la liste de TOUS les groupes du prof
                  URL :
                    Informations transmises :
                    Identifiant du prof
                  Informations attendues :
                    Liste des groupes du prof
                */}
            <h1 className="date">{card.date}</h1>
           <div
          className={classnames('card', { clicked: selectedCards.includes(card.id) })}
          onClick={() => handleCardClick(card.id, card.dayType)}
          style={{
            backgroundImage: `url(${card.dayType === 'Lundi' ? '../../assets/Pink.svg' : '../../assets/V.svg'})`,
            color: selectedCards.includes(card.id) ? '#FFFFFF' : '',
          }}
          >
              <h3>{card.title}</h3>
              <div className="row">
                <p className="day">{card.time}</p>
                <p className="session">{card.session}</p>
                { /*
                  Route : Récupération du nom du groupe et de son horaire
                  URL :
                  Informations transmises :
                      Identifiant du groupe
                  Informations attendues :
                      Nom du groupe (h3)
                      Horaire du groupe (p)
                  */}

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgendaLeft;