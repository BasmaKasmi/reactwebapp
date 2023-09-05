// Importation des modules nécessaires
import React from 'react';
import RetourButton from '../components/retourbutton/RetourButton';
import RecapEm from '../components/recapem/RecapEm'
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import NavEmarg from '../components/navEm/NavEmarg';
import Em from '../components/em/Em';

// Déclaration du composant RecapEmPage
const RecapEmPage = () => {
  return (
    <div>
      <div className="nav-emarg-container">
      {/* Affichage du composant NavEmarg */}
        <NavEmarg/>
        {/* Affichage du composant RetourButton */}
        <RetourButton />
        {/* Affichage du composant Em */}
        <Em />
        <RecapEm />
      </div>
      <div className="desktop-container">
      {/* Affichage du composant Navbar */}
        <Navbar />
        {/* Affichage du composant Sidebar */}
        <Sidebar />
        {/* Affichage du composant Em */}
        <Em />
      </div>
     </div>
  )
}

//Exportation du composant RecapEmPage
export default RecapEmPage;