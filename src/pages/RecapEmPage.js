// Importation des modules nécessaires
import React from 'react';
import RetourButton from '../components/retourbutton/RetourButton';
import RecapEm from '../components/recapem/RecapEm';
import NavEmarg from '../components/navEm/NavEmarg';

// Déclaration du composant RecapGpPage
const RecapEmPage = () => {
  return (
    <div>
    {/* Affichage du composant NavGrp */}
    <NavEmarg />
    {/* Affichage du composant RetourButton */}
    <RetourButton />
    {/* Affichage du composant RecapGp */}
    <RecapEm />
    </div>
  )
}

//Exportation du composant RecapGpPage
export default RecapEmPage;
