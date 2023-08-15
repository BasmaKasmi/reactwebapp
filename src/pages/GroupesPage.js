// Importation des modules nécessaires
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import RetourButton from '../components/retourbutton/RetourButton';
import Groupes from '../components/groupes/Groupes';
import NavGrp from '../components/navGp/NavGrp';

// Déclaration du composant GroupesPage
const GroupesPage = () => {
  return (
    <div>
      <div className="nav-emarg-container">
      {/* Affichage du composant NavGrp */}
        <NavGrp />
        {/* Affichage du composant RetourButton */}
        <RetourButton />
        {/* Affichage du composant Groupes */}
        <Groupes />
      </div>
      <div className="desktop-container">
      {/* Affichage du composant Navbar */}
        <Navbar />
        {/* Affichage du composant Sidebar */}
        <Sidebar />
        {/* Affichage du composant Groupes */}
        <Groupes />
      </div>
    </div>
  );
};

//Exportation du composant GroupesPage
export default GroupesPage;
