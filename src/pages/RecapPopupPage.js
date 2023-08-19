// Importation des modules nécessaires
import React from 'react';
import RetourButton from '../components/retourbutton/RetourButton';
import RecapPopup from '../components/recappopup/RecapPopup';
import NavSt from '../components/navst/NavSt';

// Déclaration du composant RecapPopupPage
const RecapPopupPage = () => {
  return (
    <div>
    {/* Affichage du composant NavEmarg */}
    <NavSt />
    {/* Affichage du composant RetourButton */}
    <RetourButton />
    {/* Affichage du composant Recap */}
    <RecapPopup />
    </div>
  )
}

//Exportation du composant RecapPopupPage
export default RecapPopupPage;
