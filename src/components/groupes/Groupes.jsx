import React, { useState } from 'react';
import './Groupes.css';
import ColonneGroupes from '../colonnegroupes/ColonneGroupes'; 
import ColonneGroupe2 from '../colonnegroupe2/ColonneGroupe2';

const Groupes = () => {
  const [selectedCard, setSelectedCard] = useState({ title: '', date: '' });

  const handleCardClick = (title, date) => {
    setSelectedCard({ title, date });
  };
  
  return (
    <div>
      <div className="ColonneGroupes">
        <ColonneGroupes onCardClick={handleCardClick} />
      </div>
      <div className="ColonneGroupe2">
        <ColonneGroupe2 selectedCard={selectedCard} />
      </div>
    </div>
  );
};

export default Groupes;