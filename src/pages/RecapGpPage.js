// Importation des modules nécessaires
import React from 'react';
import NavGrp from '../components/navGp/NavGrp';
import RetourButton from '../components/retourbutton/RetourButton';
import RecapGp from '../components/recapgp/RecapGp';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Groupes from '../components/groupes/Groupes';

// Déclaration du composant RecapGpPage
const RecapGpPage = () => {
  return (
    <div>
      <div className="nav-emarg-container">
      {/* Affichage du composant NavGrp */}
        <NavGrp />
        {/* Affichage du composant RetourButton */}
        <RetourButton />
        {/* Affichage du composant Groupes */}
        <Groupes />
        <RecapGp />
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
  )
}

//Exportation du composant RecapGpPage
export default RecapGpPage;