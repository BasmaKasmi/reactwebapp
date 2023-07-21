import React from 'react';
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar';
import Agenda from '../components/agenda/Agenda';

const AgendaPage = () => {
  return (
    <div>
    <Navbar />
    <Sidebar />
    <Agenda />
    </div>
);
};

export default AgendaPage;