import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './RetourButton.css';

// Définition du composant RetourButton
const RetourButton = () => {
  const navigate = useNavigate(); // Utilisation le hook useNavigate de React Router

  // Gèrer le clic sur le bouton "Retour"
  const handleRetourClick = () => {
    navigate(-1); // // Utilisation la fonction navigate pour revenir à la page précédente
  };

  // Rendu du composant
  return (
    <button className="retour-button" onClick={handleRetourClick}>
      Retour
    </button>
  );
}

export default RetourButton; // Exporte le composant RetourButton
