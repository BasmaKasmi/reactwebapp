// Importation des modules nécessaires
import React from 'react';
import NavEmarg from '../components/navEm/NavEmarg';
import RetourButton from '../components/retourbutton/RetourButton';
import CardDetails from '../components/carddetails/CardDetails';

// Déclaration du composant EmNavigation1
const EmNavigation1 = () => {
  return (
    <div>
    {/* Affichage du composant NavEmarg */}
    <NavEmarg />
    {/* Affichage du composant RetourButton */}
    <RetourButton />
    {/* Affichage du composant CardDetails */}
    <CardDetails />
    </div>
);
};

//Exportation du composant EmNavigation1
export default EmNavigation1;