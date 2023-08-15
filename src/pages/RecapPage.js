// Importation des modules nécessaires
import React from 'react';
import NavEmarg from '../components/navEm/NavEmarg';
import RetourButton from '../components/retourbutton/RetourButton';
import Recap from '../components/recap/Recap';

// Déclaration du composant RecapPage
const RecapPage = () => {
  return (
    <div>
    {/* Affichage du composant NavEmarg */}
    <NavEmarg />
    {/* Affichage du composant RetourButton */}
    <RetourButton />
    {/* Affichage du composant Recap */}
    <Recap />
    </div>
  )
}

//Exportation du composant RecapPage
export default RecapPage;
