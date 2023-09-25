import React, { useState, useEffect } from 'react';
import classnames from 'classnames'; // importation de la bibliothèque 'classnames'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import cldr from '../../assets/calendar.svg'; // Importation de l'image 'calendar.svg' depuis les ressources
import st from '../../assets/student.svg'; // Importation de l'image 'student.svg' depuis les ressources
import './EmargementsColumn.css'; // Importation du fichier de styles CSS 'Emargements.css'

const EmargementsColumn = (props) => {

   // Utilisation de l'état local pour suivre l'état de la carte active
   const [activeCard, setActiveCard] = useState(null);
   const { selectedCard } = props;
   // Contrôler l'affichage du contenu dans la colonne "groupes"
   const [showGroupesContent, setShowGroupesContent] = useState(false); 
   const navigate = useNavigate(); 
 
   useEffect(() => {
     // Mettez à jour l'état local lorsque selectedCard dans les props change
     if (props.selectedCard) {
       setActiveCard(props.selectedCard.title); // Mettez à jour activeCard avec le titre
     }
   }, [props.selectedCard]);
  
  // Définit un état pour suivre le titre sélectionné
  const [selectedTitle, setSelectedTitle] = useState('');
  // Définit un état pour suivre le titre sélectionné
  const [selectedDay, setSelectedDay] = useState('');
  // Définit un état pour contrôler l'affichage du contenu dans la colonne "Emargements"
  const [showEmContent, setShowEmContent] = useState(false);
  // Définit un état pour contrôler l'affichage de la confirmation
  const [showConfirmation, setShowConfirmation] = useState(false);

  
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

      <div className='groupe'>
        {/* Div pour l'en-tête de colonne */}
        <div className="column-head">
          {/* Affiche le titre sélectionné */}
          {activeCard && <h3>{activeCard}</h3>}
          {/* Affiche le jour sélectionné */}
          {selectedCard && <p className='day'>{selectedCard.date}</p>}
        </div>
        {/* Div pour la section de l'agenda */}
        <div className="agenda-info">
          {/* Affiche une image d'icône d'agenda */}
          <img src={cldr} alt=''/>
          {/* Affiche un texte "Choisir dates :" */}
          <span>Choisir dates :</span>
        </div>
        {/* Div pour les entrées de date */}
        <div className="d-inputs">
            {/* Champ de saisie pour la date de début */}
            <input type="text" placeholder="01/01/2023" />
            {/* Champ de saisie pour la date de fin */}
            <input type="text" placeholder="28/01/2023" />
            {/* Affiche une image l'icône */}
            <img src={st} alt=''/>
        </div> 
        <Link to={{pathname: '/emarg2',}}>
           {/* Div pour une carte cliquable */}
        <div className="c" onClick={() => handleCardClick('card-4', '', '')}>
          {/* Div pour une rangée */}
          <div className='row'>
            {/* Affiche un titre avec une date */}
            <h3>Emargement : 12/12/2022(du jour)</h3>
            {/* Affiche le statut "FAIT" */}
            <span className="status-f">FAIT</span>
          </div>
        </div>
        </Link>    
        <Link to={{pathname: '/emarg2',}}>
         {/* Div pour une carte cliquable */}
         <div className="c">
        {/* Div pour une rangée */}
          <div className='row'>
          {/* Affiche un titre avec une date */}
            <h3>Emargement : 12/12/2022(n+3)</h3>
            {/* Affiche le statut "NON FAIT" */}
            <span className="status-n">NON FAIT</span>
          </div>
        </div>
        </Link>
      </div>
  
    </div>
  );
}

export default EmargementsColumn; // Exportation du composant Emargements