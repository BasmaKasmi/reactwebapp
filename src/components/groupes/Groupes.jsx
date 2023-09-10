import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Groupes.css';
import status from '../../assets/statusup.svg';
import st from '../../assets/student.svg';
import cldr from '../../assets/calendar.svg';
import user from '../../assets/2 User.png';

const Groupes = () => {
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
    <div className='Emargements'>
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
    <div className="co">
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
      {/* Si showGroupesContent est vrai, affiche le contenu suivant */}
      { showGroupesContent && (
      <div className="groupes">
        {/* Entête de la colonne */}
        <div className="column-head">
          {/* Affiche le titre sélectionné */}
          <h3>{selectedTitle}</h3>
          {/* Affiche le jour sélectionné */}
          <p className='day'>{selectedDay}</p>
        </div>
        {/* Conteneur pour les cartes d'étudiants */}
        <div className='card-container'>
        <div className="nom-stu" onClick={handleClick}>
          {/* Nom de l'étudiant */}
          <h3>Nom de l’étudiant</h3>
            <div>
            {/* Affiche le nombre d'absences */}
            <p className='abs'>Absence(s) : 3</p>
            </div>
        </div>
        {/* Nom de l'étudiant */}
        <div className="nom-stu" onClick={handleClick}>
          <h3>Nom de l’étudiant</h3>
          <div>
          {/* Affiche le nombre d'absences */}
            <p className='abs'>Absence(s) : 3</p>
          </div>
        </div>
        </div>
        {/* Deuxième conteneur pour les cartes d'étudiants */}
        <div className='card-container'>
        {/* Nom de l'étudiant */}
        <div className="nom-stu" onClick={handleClick}>
          <h3>Nom de l’étudiant</h3>
          <div>
            {/* Affiche le nombre d'absences */}
            <p className='abs'>Absence(s) : 3</p>
          </div>
        </div>
        {/* Nom de l'étudiant */}
        <div className="nom-stu" onClick={handleClick}>
          <h3>Nom de l’étudiant</h3>
          <div>
            {/* Affiche le nombre d'absences */}
            <p className='abs'>Absence(s) : 3</p>
          </div>
        </div>
        </div>
      </div>
      
      )}
            {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="mdl">
            <h2>Nom de l'étudiant</h2>
            <div className="recap-row">
              <img src={status} alt='' />
              <h3> Récapitulatif du groupe : </h3>
            </div>
            <div className="bloc-pop">
            <div className='row'>
              <div className='colon'>
                <h3>17</h3>
                <p className="des">Inscrits</p>
              </div>
              <div className='colon'>
                <h3>2</h3>
                <p className="des">Abandon(s)</p>
              </div>
              <div className='colon'>
                <h3>65%</h3>
                <p className="des">Présence</p>
              </div>
            </div>
            </div>
            <div className="buttons-row">
              <button className="ap" onClick={handleDeclareAp}>Déclarer AP</button>
              <button className="an">Annuler</button>
            </div>
          </div>
        </div>
      )}
{declareAp && (
        <div className="modal-overlay" onClick={handleCloseDeclareAp}>
          <div className="mod-desktop">
            <h2>Nom de l'étudiant</h2>
            <div className="blok1">
            <div className="cldr-row">
              <img src={cldr} alt='' />
                <h3>Choisir dates :</h3>
            </div>
            <div className="time-inputs">
              <input type="text" placeholder="01/01/2023" onClick={(e) => e.stopPropagation()} />
              <input type="text" placeholder="28/01/2023" onClick={(e) => e.stopPropagation()} />
              <img src={st} alt='' />
            </div>
            </div>
            <div className="blok-ap">
            <div className="ap-line">
              <img src={user} alt='' />
                <h3>Sélectionner les AP :</h3>
            </div>
            <div className='time-card-cont' onClick={(e) => e.stopPropagation()}>
            <div
          className={`time-card ${selectedDates.includes('01/02/2023') ? 'selected' : ''}`}
          onClick={() => handleDateCardClick('01/02/2023')}
        >
            <h3>01/02/2023</h3>
            </div>
            <div
          className={`time-card ${selectedDates.includes('17/02/2023') ? 'selected' : ''}`}
          onClick={() => handleDateCardClick('17/02/2023')}
        >
            <h3>17/02/2023</h3>
            </div>
            <div
          className={`time-card ${selectedDates.includes('13/07/2023') ? 'selected' : ''}`}
          onClick={() => handleDateCardClick('13/07/2023')}
        >
            <h3>13/07/2023</h3>
            </div>
            <div
          className={`time-card ${selectedDates.includes('15/07/2023') ? 'selected' : ''}`}
          onClick={() => handleDateCardClick('15/07/2023')}
        >
            <h3>15/07/2023</h3>
            </div>
            </div>
            </div>
              <div className="buttons-row">
                <button className="v-button" onClick={handleConfirmationClick}>Valider</button>
                <button className="cancel-button">Annuler</button>
              </div>
          </div>
        </div>
)}
{showConfirmation && (
     <div className="modal-overlay" onClick={handleOverlayClick}>
     <div className="confirmation-card">
     <div className="icon-container">
           <i className="fas fa-check-circle"></i>
         </div>
       <div className="confirmation-content">
         <h3>Absences prévues le :</h3>
         <div className="confirmation-details">
          <p>14/01/2023</p>
          <p>21/01/2023</p>
         </div>
         <div className="confirmation-buttons">
           <button className="valider-button">Valider</button>
           <button className="annuler-button">Annuler</button>
         </div>
       </div>
     </div>
   </div>
    )}

    </div>
  );
}

export default Groupes; // Exportation du composant Groupes