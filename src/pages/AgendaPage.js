// Importation des modules nécessaires
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import RetourButton from '../components/retourbutton/RetourButton';
import NavAgenda from '../components/navAgenda/NavAgenda';
import Agenda from '../components/agenda/Agenda';

// Déclaration du composant AgendaPage
const AgendaPage = () => {
  return (
    <div>
      <div className="nav-emarg-container">
      {/* Affichage du composant NavAgenda */}
        <NavAgenda />
        {/* Affichage du composant RetourButton */}
        <RetourButton />
        {/* Affichage du composant Agenda */}
        <Agenda />
      </div>
      <div className="desktop-container">
      {/* Affichage du composant Navbar */}
        <Navbar />
        {/* Affichage du composant Sidebar */}
        <Sidebar />
        {/* Affichage du composant Agenda */}
        <Agenda />
      </div>
    </div>
  );
};

//Exportation du composant AgendaPage
export default AgendaPage;
