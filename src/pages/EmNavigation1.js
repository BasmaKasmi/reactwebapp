// Importation des modules nécessaires
import React from 'react';
import RetourButton from '../components/retourbutton/RetourButton';
import Emargements from '../components/emargements/Emargements'
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import CardDetails from '../components/carddetails/CardDetails';
import NavEmarg from '../components/navEm/NavEmarg';

// Déclaration du composant EmNavigation1
const EmNavigation1 = () => {
  return (
    <div>
      <div className="nav-emarg-container">
      {/* Affichage du composant NavEmarg */}
        <NavEmarg />
        {/* Affichage du composant RetourButton */}
        <RetourButton />
        {/* Affichage du composant CardDetails */}
        <CardDetails />
        
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
  )
}

//Exportation du composant EmNavigation1
export default EmNavigation1;