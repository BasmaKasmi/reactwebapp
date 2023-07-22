import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import RetourButton from '../components/retourbutton/RetourButton';
import NavAgenda from '../components/navAgenda/NavAgenda';
import Agenda from '../components/agenda/Agenda';
import AgendaRes from '../components/agendares/AgendaRes';

const AgendaPage = () => {
  return (
    <div>
      <div className="nav-emarg-container">
        <NavAgenda />
        <RetourButton />
        <AgendaRes />
      </div>
      <div className="desktop-container">
        <Navbar />
        <Sidebar />
        <Agenda />
      </div>
    </div>
  );
};

export default AgendaPage;
