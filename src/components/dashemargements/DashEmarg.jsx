import React, { useState } from 'react'; // Importation des modules React et useState depuis 'react'
import classnames from 'classnames'; // importation de la bibliothèque 'classnames'
import { Link, useHistory, useLocation } from 'react-router-dom';
import cldr from '../../assets/calendar.svg'; // Importation de l'image 'calendar.svg' depuis les ressources
import st from '../../assets/student.svg'; // Importation de l'image 'student.svg' depuis les ressources
import Em from '../em/Em'; // Importation du composant Em
import './DashEmarg.css'; // Importation du fichier de styles CSS 'Emargements.css'

// Composant principal Emargements
const DashEmarg = () => {
  
  // Définit un état pour suivre la carte active (null au départ)
  const [activeCard, setActiveCard] = useState(null);
  // Définit un état pour suivre le titre sélectionné
  const [selectedTitle, setSelectedTitle] = useState('');
  // Définit un état pour suivre le titre sélectionné
  const [selectedDay, setSelectedDay] = useState('');
  // Définit un état pour contrôler l'affichage du contenu dans la colonne "Emargements"
  const [showEmContent, setShowEmContent] = useState(false);
  // Définit un état pour contrôler l'affichage de la confirmation
  const [showConfirmation, setShowConfirmation] = useState(false);
  // Contrôle de l'affichage du contenu dans la colonne "groupes"
  const [showGroupesContent, setShowGroupesContent] = useState(false); 


  // Déclaration d'une fonction de gestion de clic sur une carte
  const handleCardClick = (cardId, cardTitle, cardDay) => {
    // Mise à jour de l'état de la carte active
    setActiveCard(cardId);
    // Mise à jour de l'état du titre et du jour sélectionnés
    setSelectedTitle(cardTitle);
    setSelectedDay(cardDay);
    // Affichage le contenu de la colonne "groupes" après avoir cliqué sur une carte
    setShowGroupesContent(true); 

    // Déclaration d'une fonction de gestion de clic pour la confirmation
    const handleConfirmationClick = () => {
      // Affichage de la fenêtre modale de confirmation
      setShowConfirmation(true);
      // Ajout d'une classe au corps du document pour désactiver le défilement lorsque la fenêtre modale est ouverte
      document.body.classList.add('modal-open');
      // Affichage le contenu de la colonne "groupes" après avoir cliqué sur "Valider la feuille d'émargement"
      setShowGroupesContent(true); 
    };


    // Vérifie si l'identifiant de la carte est 'card-1', 'card-2' ou 'card-3'
    if (cardId === 'card-1' || cardId === 'card-2' || cardId === 'card-3') {
      // Si l'identifiant correspond à l'une de ces cartes, masque le contenu lié à Emargements
      setShowEmContent(false);
    } else if (cardId === 'card-4') {
      // Si l'identifiant correspond à 'card-4', affiche le contenu lié à Emargements
      setShowEmContent(true);
    } else {
      // Si l'identifiant ne correspond à aucune des cartes mentionnées, masque le contenu lié à Emargements
      setShowEmContent(false);
    }
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCard = searchParams.get('card');

  return (
    <div>  {/* Conteneur principal avec la classe 'Emargements' */}
    {/* Section des groupes avec la classe 'groupes-res' */}
        {/* Crée un conteneur pour le groupe de cartes */}
        <div className='groupes-res'>
    {/* Affiche le titre "Mes groupes :" */}
    <div className='t'>
    <h3> Mes groupes :</h3>
    </div>
    {/* Crée un conteneur pour les cartes */}
    <div className='grp-carte'>
    {/* Crée un lien vers la page /grpnavigation1 */}
    <Link to='/emnavigation1'>
    {/* Crée une carte */}
    <div className="carte">
    {/* Affiche le titre de la carte */}
      <h3>Sciences islamiques 1ére année</h3>
        <div>
          {/* Affiche l'horaire */}
          <p className='carte-day'>Jeu 18h00 à 12h00</p>
        </div>
    </div>
    </Link>
    {/* Crée un lien vers la page /grpnavigation1 */}
    <Link to='/emnavigation1'>
    {/* Crée une autre carte */}
    <div className="carte">
    {/* Affiche le titre de la carte */}
      <h3>Sciences islamiques 1ére année</h3>
        <div>
        {/* Affiche l'horaire */}
          <p className='carte-day'>Jeu 18h00 à 12h00</p>
        </div>
    </div>
    </Link>
    {/* Crée un lien vers la page /grpnavigation1 */}
    <Link to='/emnavigation1'>
    {/* Crée une autre carte */}
    <div className="carte">
      {/* Affiche le titre de la carte */}
      <h3>Sciences islamiques 1ére année</h3>
        <div>
          {/* Affiche l'horaire */}
          <p className='carte-day'>Jeu 18h00 à 12h00</p>
        </div>
    </div>
    </Link>
    </div>
    </div>
    <div className="co">
        {/* En-tête de la colonne */}
          <div className="column-header orange-bg">
            <h2>Mes émargements</h2>
          </div>
          {/* Bloc interne pour les groupes */}
          <div className='int-block'>
          <div
          className={`card ${activeCard === 'card-1' ? 'clicked' : ''}`}
          onClick={() => handleCardClick('card-1', 'Sciences islamiques 2ème année', 'Ven 18h00 à 21h00')}
        >
              <h3>Sciences islamiques 2ème année</h3>
              <div className='row'>
                <p className='day'>Jeu 18h00 à 12h00</p>
                <p className='session'>11/32</p>
              </div>
            </div>
            <div
          className={`card ${activeCard === 'card-2' ? 'clicked' : ''}`}
          onClick={() => handleCardClick('card-2', 'Sciences islamiques 1ère année', 'Sam 14h30 à 17h30')}
        >
              <h3>Sciences islamiques 1ère année</h3>
              <div className='row'>
                <p className='day'>Jeu 18h00 à 12h00</p>
                <p className='session'>11/32</p>
              </div>
            </div>
            <div
          className={`card ${activeCard === 'card-3' ? 'clicked' : ''}`}
          onClick={() => handleCardClick('card-3', 'Sciences islamiques 3ème année', 'Sam 14h30 à 17h30')}
        >
              <h3>Sciences islamiques 3ème année</h3>
              <div className='row'>
                <p className='day'>Jeu 18h00 à 12h00</p>
                <p className='session'>11/32</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default DashEmarg; // Exportation du composant Emargements