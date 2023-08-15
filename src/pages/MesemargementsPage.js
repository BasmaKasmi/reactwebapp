// Importation des modules nécessaires
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Emargements from '../components/emargements/Emargements';
import NavEmarg from '../components/navEm/NavEmarg';
import './MesemargementsPage.css';
import RetourButton from '../components/retourbutton/RetourButton';

// Déclaration du composant MesemargementsPage
const MesemargementsPage = () => {
  return (
    <div>
      <div className="nav-emarg-container">
        {/* Affichage du composant NavEmarg */}
        <NavEmarg />
        {/* Affichage du composant RetourButton */}
        <RetourButton />
        {/* Affichage du composant Emargements */}
        <Emargements />
      </div>
      <div className="desktop-container">
      {/* Affichage du composant Navbar */}
        <Navbar />
        {/* Affichage du composant Sidebar */}
        <Sidebar />
        {/* Affichage du composant Emargements */}
        <Emargements />
      </div>
    </div>
  );
};

//Exportation du composant MesemargementsPage
export default MesemargementsPage;
