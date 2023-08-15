// Importation des modules nécessaires
import React from 'react';
import NavGrp from '../components/navGp/NavGrp';
import RetourButton from '../components/retourbutton/RetourButton';
import CardDetailsGp from '../components/carddetailsgp/CardDetailsGp'

// Déclaration du composant GrpNavigation1
const GrpNavigation1 = () => {
  return (
    <div>
    {/* Affichage du composant NavGrp */}
    <NavGrp />
    {/* Affichage du composant RetourButton */}
    <RetourButton />
    {/* Affichage du composant CardDetailsGp */}
    <CardDetailsGp /> 
    </div>
);
};

//Exportation du composant GrpNavigation1
export default GrpNavigation1;