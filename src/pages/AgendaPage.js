// Importation des modules nécessaires

import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import RetourButton from '../components/retourbutton/RetourButton';
import NavAgenda from '../components/navAgenda/NavAgenda';
import Agenda from '../components/agenda/Agenda';
import AgendaColumn from '../components/agendacolumn/AgendaColumn';
import AgendaLeft from '../components/agendaleft/AgendaLeft';
// Déclaration du composant GroupesPage
const AgendaPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };


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
        <AgendaLeft onCardClick={handleCardClick} /> 
        </div>
        <div className="column" style={{ flexBasis: '50%', margin:'10px', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.12)'}}>
          <AgendaColumn selectedCard={selectedCard} />
        </div>
      </div>
      </div>
    </div>
  );
};

//Exportation du composant GroupesPage
export default AgendaPage;