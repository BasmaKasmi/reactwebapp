// Importation des modules nécessaires
import React from 'react';
import NavEmarg from '../components/navEm/NavEmarg';
import RetourButton from '../components/retourbutton/RetourButton';
import Rappel from '../components/rappel/Rappel';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Student from '../components/student/Student';

// Déclaration du composant RappelPage
const RappelPage = () => {
  return (
    <div>
      <div className="nav-emarg-container">
      {/* Affichage du composant NavEmarg */}
        <NavEmarg />
        {/* Affichage du composant RetourButton */}
        <RetourButton />
        {/* Affichage du composant Rappel */}
        <Rappel />
      </div>
      <div className="desktop-container">
      {/* Affichage du composant Navbar */}
        <Navbar />
        {/* Affichage du composant Sidebar */}
        <Sidebar />
        {/* Affichage du composant Student */}
        <Student />
      </div>
     </div>
  )
}

//Exportation du composant RappelPage
export default RappelPage;