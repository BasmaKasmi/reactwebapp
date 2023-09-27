import React, { useState } from 'react'; // Importation des modules React et useState depuis 'react'
import classnames from 'classnames'; // importation de la bibliothèque 'classnames'
import { Link, useHistory, useLocation } from 'react-router-dom';
import cldr from '../../assets/calendar.svg'; // Importation de l'image 'calendar.svg' depuis les ressources
import st from '../../assets/student.svg'; // Importation de l'image 'student.svg' depuis les ressources
import './Groupes.css'; // Importation du fichier de styles CSS 'Emargements.css'

// Composant principal Emargements
const Groupes = () => {
  
  // Définit un état pour suivre la carte active (null au départ)
  const [activeCard, setActiveCard] = useState(null);
  // Définit un état pour suivre le titre sélectionné
  const [selectedTitle, setSelectedTitle] = useState('');
  // Définit un état pour suivre le titre sélectionné
  const [selectedDay, setSelectedDay] = useState('');



  // Déclaration d'une fonction de gestion de clic sur une carte
  const handleCardClick = (cardId, cardTitle, cardDay) => {
    // Mise à jour de l'état de la carte active
    setActiveCard(cardId);
    // Mise à jour de l'état du titre et du jour sélectionnés
    setSelectedTitle(cardTitle);
    setSelectedDay(cardDay);
   

  };

  const location = useLocation();
 

  return (
    <div> 
         <div className='groupes-res'>
    {/* Affiche le titre "Mes groupes :" */}
    <div className='t'>
    <h3> Mes groupes :</h3>
    </div>
    {/* Crée un conteneur pour les cartes */}
    <div className='group-cards'>
    {/* Crée un lien vers la page /grpnavigation1 */}
    <Link to='/recapgp' >
    {/* Crée une group-card */}
    <div className="group-card">
    {/* Affiche le titre de la group-card */}
      <h3>Sciences islamiques 1ére année</h3>
        <div>
          {/* Affiche l'horaire */}
          <p className='group-card-day'>Jeu 18h00 à 12h00</p>
        </div>
    </div>
    </Link>
    {/* Crée un lien vers la page /grpnavigation1 */}
    <Link to='/recapgp' >
    {/* Crée une autre group-card */}
    <div className="group-card">
    {/* Affiche le titre de la group-card */}
      <h3>Sciences islamiques 1ére année</h3>
        <div>
        {/* Affiche l'horaire */}
          <p className='group-card-day'>Jeu 18h00 à 12h00</p>
        </div>
    </div>
    </Link>
    {/* Crée un lien vers la page /grpnavigation1 */}
    <Link to='/recapgp' >
    {/* Crée une autre group-card */}
    <div className="group-card">
      {/* Affiche le titre de la group-card */}
      <h3>Sciences islamiques 1ére année</h3>
        <div>
          {/* Affiche l'horaire */}
          <p className='group-card-day'>Jeu 18h00 à 12h00</p>
        </div>
    </div>
    </Link>
    </div>
    </div>
    </div>
  );
}

export default Groupes; // Exportation du composant Emargements