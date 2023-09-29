// Importation des modules nécessaires de React, y compris useState pour gérer l'état.
import React, { useState } from 'react';
// Importation du fichier de styles CSS spécifique pour le composant Dashboard.
import './DashAgenda.css';
// Importation du composant Link de react-router-dom, utilisé pour créer des liens vers d'autres routes.
import { Link } from 'react-router-dom';
// Importation de l'image "calendar.svg" à partir du dossier "assets".
import cldr from '../../assets/calendar.svg';
// Importation de l'image "student.svg" à partir du dossier "assets".
import st from '../../assets/student.svg';
// Importation de l'image "2 User.png" à partir du dossier "assets".
import user from '../../assets/2 User.png';
import nom from '../../assets/nom.svg';
// importation de l'icone de validation
import iconeValidation from '../../assets/valid.svg'; 
import classNames from 'classnames'; // Importation de la bibliothèque classNames 


// Définition du Dashboard

const DashAgenda = () => {
  // Utilisation de useState pour gérer l'état local du composant.
  const [selectedTitle, setSelectedTitle] = useState('');  // État pour stocker un titre sélectionné
  const [selectedDay, setSelectedDay] = useState(''); // État pour stocker un jour sélectionné
  const[showAp, setshowAp] = useState(false); // État pour afficher ou masquer un composant
  const[selectStudent, setselectStudent] = useState(false); // État pour sélectionner ou désélectionner un étudiant
  const[declareAp, setdeclareAp] = useState(false); // État pour déclarer ou ne pas déclarer une AP
  const [showConfirmation, setShowConfirmation] = useState(false); // État pour afficher ou masquer une confirmation d'émargement
  const [isEmargementValide, setIsEmargementValide] = useState(false); // Pour suivre si l'émargement est validé ou non 

  //lorsque l'utilisateur clique sur un bouton de validation
  const validerEmargement = () => {
    setIsEmargementValide(true);
  };


  // Fonction pour afficher la confirmation
  const handleConfirmationClick = () => {
    setShowConfirmation(true);
  };

  // Fonction pour masquer la confirmation et réinitialiser le body du document
  const handleOverlayClick = () => {
    setShowConfirmation(false);
    document.body.classList.remove('modal-open');
  };

  // Fonctions pour afficher ou masquer les composants
  const handleShowAp = () => {
    setshowAp(true)
  }
  const handleCloseShowAp = () => {
    setshowAp(false);
  };

  // Fonctions pour sélectionner ou désélectionner un étudiant
  const handleSelectStudent = () => {
    setselectStudent(true)
  }
  const handleCloseSelectStudent = () => {
    setselectStudent(false);
  };

  // Fonctions pour déclarer ou ne pas déclarer une AP
  const handleDeclareAp = () => {
    setdeclareAp(true)
  }
  const handleCloseDeclareAp = () => {
    setdeclareAp(false);
  };

  return (
    <div>
        {/* Div englobante pour la colonne */}
      <div className="column">
          {/* En-tête de la colonne avec arrière-plan orange */}
        <div className="column-header orange-bg">
          <h2>Mon agenda</h2>
        </div>
        <div className='int-block'>
        {/* Titre de la date */}
        <h1 className='date'>Samedi 17 Dec 2022</h1>
        <Link to='/agenda'>
        <div className="card">
          {/* Titre du groupe */}
          <h3>Sciences islamiques 2ème année</h3>
          <div className='row'>
          {/* Jour et horaires de la séance */}
          <p className='day'>Jeu 18h00 à 12h00</p>
          {/* Statistiques de session */}
          <p className='session'>11/32</p>
          </div>
        </div>
        </Link>
        <Link to='/agenda'>
        <div className="card">
          {/* Titre du groupe */}
          <h3>Sciences islamiques 2ème année</h3>
          <div className='row'>
          {/* Jour et horaires de la séance */}
          <p className='day'>Jeu 18h00 à 12h00</p>
          {/* Statistiques de session */}
          <p className='session'>11/32</p>
          </div>
        </div>
        </Link>
        </div>
        <div className='int-block'>
        {/* Titre de la date */}
        <h1 className='date'>Samedi 19 Dec 2022</h1>
        {/* Carte pour un groupe */}
        <Link to='/agenda'>
        <div className="card">
        {/* Titre du groupe */}
          <h3>Sciences islamiques 2ème année</h3>
          <div className='row'>
          {/* Jour et horaires de la séance */}
          <p className='day'>Jeu 18h00 à 12h00</p>
          {/* Statistiques de session */}
          <p className='session'>11/32</p>
          </div>
        </div>
        </Link>
        </div>
      </div>
        
    </div>
  );
};

export default DashAgenda; // Exportation du composant Dashboard