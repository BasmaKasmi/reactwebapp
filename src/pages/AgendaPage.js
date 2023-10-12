import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import RetourButton from '../components/retourbutton/RetourButton';
import NavAgenda from '../components/navAgenda/NavAgenda';
import AgendaColumn from '../components/agendacolumn/AgendaColumn';
import AgendaLeft from '../components/agendaleft/AgendaLeft';
import Agenda from '../components/agenda/Agenda';

const AgendaPage = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedDayType, setSelectedDayType] = useState('');

  const handleCardClick = (selectedCards, dayType) => {
    setSelectedCards(selectedCards);
    setSelectedDayType(dayType);
  };

  return (
    <div>
      <div className="nav-emarg-container">
        <NavAgenda />
        <RetourButton />
        <Agenda selectedDayType={selectedDayType} onCardClick={handleCardClick} />
      </div>
      <div className="desktop-container">
        <div className="full-row" style={{ height: '100px' }}>
          <Navbar />
        </div>
        <div className="three-columns" style={{ display: 'flex', padding: '10px', maxHeight: '50vh' }}>
          <div className="column" style={{ flexBasis: '25%', margin: '10px', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.12)' }}>
            <Sidebar />
          </div>
          <div className="column" style={{ flexBasis: '25%', margin: '10px', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.12)' }}>
            <AgendaLeft onCardClick={handleCardClick} />
          </div>
          <div className="column" style={{ flexBasis: '50%', margin: '10px', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.12)' }}>
            <AgendaColumn selectedCards={selectedCards} selectedDayType={selectedDayType} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaPage;
