// Importation des modules nécessaires
import React from 'react';
import NavEmarg from '../components/navEm/NavEmarg';
import RetourButton from '../components/retourbutton/RetourButton';
import Rappel from '../components/rappel/Rappel';

// Déclaration du composant RappelPage
const RappelPage = () => {
  return (
    <div>
    {/* Affichage du composant NavEmarg */}
    <NavEmarg />
    {/* Affichage du composant RetourButton */}
    <RetourButton />
    {/* Affichage du composant Rappel */}
    <Rappel />
    </div>
  )
}

//Exportation du composant RappelPage
export default RappelPage;
