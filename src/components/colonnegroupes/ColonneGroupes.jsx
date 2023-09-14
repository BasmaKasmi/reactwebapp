import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ColonneGroupes.css';
import ColonneGroupe2 from '../colonnegroupe2/ColonneGroupe2';


const ColonneGroupes = () => {
  // Utilisation de l'état local pour suivre l'état de la carte active
  const [activeCard, setActiveCard] = useState(null);
  // Utilisation de l'état local pour suivre le titre de la carte sélectionnée
  const [selectedTitle, setSelectedTitle] = useState('');
  // Utilisation de l'état local pour suivre le jour de la carte sélectionnée
  const [selectedDay, setSelectedDay] = useState('');
  // Utilisation de l'état local pour contrôler l'affichage de la confirmation
  // Contrôler l'affichage du contenu dans la colonne "groupes"
  const [showGroupesContent, setShowGroupesContent] = useState(false); 
  const navigate = useNavigate(); // Utiliser useNavigate

  const handleMobileGroupClick = () => {
    // Redirigez l'utilisateur vers la page RecapGp en mode mobile
    navigate('/recapgp');
  };
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const[declareAp, setdeclareAp] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateCardClick = (date) => {
    // Vérifier si la date est déjà sélectionnée
    if (selectedDates.includes(date)) {
      // Si elle est sélectionnée, la retirer de la liste
      setSelectedDates(selectedDates.filter(d => d !== date));
    } else {
      // Si elle n'est pas sélectionnée, l'ajouter à la liste
      setSelectedDates([...selectedDates, date]);
    }
  };

  const handleClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeclareAp = () => {
    setdeclareAp(true)
  }
  const handleCloseDeclareAp = () => {
    setdeclareAp(false);
  };
  const handleOverlayClick = () => {
    setShowConfirmation(false);
    document.body.classList.remove('modal-open');
  };



  // Définition de la fonction handleCardClick avec des paramètres
  const handleCardClick = (cardId, cardTitle, cardDay) => {
    // Met à jour l'état de la carte active
    setActiveCard(cardId);
    // Met à jour l'état du titre sélectionné avec le titre de la carte cliquée
    setSelectedTitle(cardTitle);
    // Met à jour l'état du jour sélectionné avec le jour de la carte cliquée
    setSelectedDay(cardDay);
    // Affiche le contenu de la colonne "groupes" après avoir cliqué sur une carte
    setShowGroupesContent(true);
  };


  // Définition de la fonction handleConfirmationClick
   const handleConfirmationClick = () => {
    // Affiche la fenêtre de confirmation
    setShowConfirmation(true);
    // Ajoute la classe 'modal-open' au corps du document (utilisé pour les styles de superposition)
    document.body.classList.add('modal-open');
    // Affiche le contenu de la colonne "groupes" après avoir cliqué sur "Valider la feuille d'émargement"
    setShowGroupesContent(true); 
  };


  return (
    <div>
    {/* Crée un conteneur pour le groupe de cartes */}
    <div className='groupes-res'>
    {/* Affiche le titre "Mes groupes :" */}
    <div className='t'>
    <h3> Mes groupes :</h3>
    </div>
    {/* Crée un conteneur pour les cartes */}
    <div className='grp-carte'>
    {/* Crée un lien vers la page /grpnavigation1 */}
    <Link to='/recapgp' onClick={handleMobileGroupClick}>
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
    <Link to='/recapgp' onClick={handleMobileGroupClick}>
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
    <Link to='/recapgp' onClick={handleMobileGroupClick}>
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
    <div className='column'>
        {/* En-tête de la colonne */}
          <div className="column-header orange-bg">
            <h2>Mes groupes</h2>
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

export default ColonneGroupes; // Exportation du composant Groupes