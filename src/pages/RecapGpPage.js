// Importation des modules nécessaires
import React from 'react';
import NavGrp from '../components/navGp/NavGrp';
import RetourButton from '../components/retourbutton/RetourButton';
import RecapGp from '../components/recapgp/RecapGp';

// Déclaration du composant RecapGpPage
const RecapGpPage = () => {
  return (
    <div>
    {/* Affichage du composant NavGrp */}
    <NavGrp />
    {/* Affichage du composant RetourButton */}
    <RetourButton />
    {/* Affichage du composant RecapGp */}
    <RecapGp />
    </div>
  )
}

//Exportation du composant RecapGpPage
export default RecapGpPage;
