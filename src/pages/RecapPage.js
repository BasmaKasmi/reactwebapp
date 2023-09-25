// Importation des modules nécessaires
import React from 'react';
import RetourButton from '../components/retourbutton/RetourButton';
import Recap from '../components/recap/Recap';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import NavEmarg from '../components/navEm/NavEmarg';

// Déclaration du composant RecapEmPage
const RecapPage = () => {
  return (
    <div>
      <div className="nav-emarg-container">
      {/* Affichage du composant NavEmarg */}
        <NavEmarg/>
        {/* Affichage du composant RetourButton */}
        <RetourButton />
        {/* Affichage du composant Em */}
        <Recap />
      </div>
      <div className="desktop-container">
      {/* Affichage du composant Navbar */}
        <Navbar />
        {/* Affichage du composant Sidebar */}
        <Sidebar />
      </div>
     </div>
  )
}

//Exportation du composant RecapEmPage
export default RecapPage;