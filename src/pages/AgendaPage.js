// Importation des modules nécessaires

import React, { useState } from 'react';
import classnames from 'classnames'; // importation de la bibliothèque 'classnames'
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import RetourButton from '../components/retourbutton/RetourButton';
import NavAgenda from '../components/navAgenda/NavAgenda';
import Agenda from '../components/agenda/Agenda';
import AgendaColumn from '../components/agendacolumn/AgendaColumn';
import AgendaLeft from '../components/agendaleft/AgendaLeft';
// Déclaration du composant GroupesPage
const AgendaPage = () => {
  const [activeCards, setActiveCards] = useState([]); // tableau pour conserver plusieurs cartes sélectionnées

  const handleCardClick = (cardId) => {
    // Vérifions si la carte est déjà sélectionnée
    if (activeCards.includes(cardId)) {
      // Si la carte est déjà sélectionnée, la retirer de la liste des cartes actives
      setActiveCards((prevActiveCards) => prevActiveCards.filter((id) => id !== cardId));
    } else {
      // Sinon, ajoutons la carte à la liste des cartes actives
      setActiveCards((prevActiveCards) => [...prevActiveCards, cardId]);
    }
    };


     // Ajouter des classes spécifiques aux jours du samedi (6) et du lundi (1) en fonction de la carte cliquée
     const isCard1Clicked = activeCards.includes('card-1');
     const isCard2Clicked = activeCards.includes('card-2');

  return (
    <div>
      <div className="nav-emarg-container">
      {/* Affichage du composant NavGrp */}
        <NavAgenda />
        {/* Affichage du composant RetourButton */}
        <RetourButton />
        {/* Affichage du composant Groupes */}
        <Agenda />
      </div>
      <div className="desktop-container">
      {/* Affichage du composant Navbar */}
      <div className="full-row" style={{height:'100px'}}>
      <Navbar />
      </div>
      <div className="three-columns" style={{display: 'flex', padding: '10px', maxHeight: '50vh' }}>
        <div className="column" style={{ flexBasis: '25%', margin:'10px', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.12)'  }}>
        <Sidebar />
        </div>
        <div className="column" style={{ flexBasis: '25%', margin:'10px', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.12)'  }}>
          <AgendaLeft handleCardClick={handleCardClick} />
        </div>
        <div className="column" style={{ flexBasis: '50%', margin:'10px', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.12)'}}>
          <AgendaColumn/>
        </div>
      </div>
      </div>
    </div>
  );
};

//Exportation du composant GroupesPage
export default AgendaPage;
