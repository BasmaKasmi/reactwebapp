// Importation des modules nécessaires de React, y compris useState pour gérer l'état.
import React, { useState } from 'react';
// Importation du fichier de styles CSS spécifique pour le composant Dashboard.
import './Dashboard.css';
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

const Dashboard = () => {
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
    <div className="dashboard">
    {/* Première colonne */}
      <div className="column-Enf">
        {/* En-tête de la colonne */}
        <div className="column-header">
          <h2>Emargements non faits</h2> 
        </div>
        {/* Lien vers une page spécifique avec des paramètres */}
        <Link
        to={{
          pathname: '/nomdetudiant',
          state: { title: 'Sciences islamiques 2ème année', day: 'Jeu 18h00 à 12h00' }
          }}
          onClick={() => {
             // Mise à jour de l'état lors du clic
            setSelectedTitle('Sciences islamiques 2ème année');
            setSelectedDay('Jeu 18h00 à 12h00');
            }}
            >
        {/* Bloc d'affichage d'informations */}
        <div className='int-block'>
        <h1 className='date'>Jeudi 15 Dec 2022</h1> 
        <div className="card">
          <h3>Sciences islamiques 2ème année</h3>
          <div className='row'>
          <p className='day'>Jeu 18h00 à 12h00</p>
          <p className='session'>11/32</p>
          </div> 
        </div>
        <div className={classNames('emargement-validation-desktop', { 'hide-validation': !isEmargementValide })}>
          <img src={iconeValidation} alt="Emargement validé" />
        </div>
        </div>
        </Link>
      </div>
      
      {/* Crée une boîte avec une classe "pink-box" */}
      <div className="pink-box">
        {/* Affiche un titre de niveau 2 */}
          <h2>Emargement(s) non fait(s)</h2>
        {/* Crée un conteneur avec une classe "content" */}
        <div className="content">
          {/* Crée une entrée avec une classe "entry" */}
          <div className="entry-cont">
          <Link to='/rappel'>
          <div className="entry">
            {/* Affiche un titre de niveau 3 avec le nom du cours */}
            <h3>Sciences islamiques 2ème année</h3>
            {/* Crée un conteneur pour les détails avec une classe "details" */}
            <div className="details">
              {/* Affiche la date de l'emargement */}
              <p className="date">Sam 10 Déc 2022</p>
              {/* Affiche le nombre d'emargements */}
              <p className="count">11/32</p>
            </div>
            <div className={classNames('enf-validation', { 'hide-validation': !isEmargementValide })}>
              <img src={iconeValidation} alt="Emargement validé" />
            </div>
          </div>
          </Link>
          <Link to='/rappel'>
          <div className="entry">
            {/* Affiche un titre de niveau 3 avec le nom du cours */}
            <h3>Sciences islamiques 3ème année</h3>
            {/* Crée un conteneur pour les détails avec une classe "details" */}
            <div className="details">
              {/* Affiche la date de l'emargement */}
              <p className="date">Sam 10 Déc 2022</p>
              {/* Affiche le nombre d'emargements */}
              <p className="count">11/32</p>
            </div>
            <div className={classNames('enf-validation', { 'hide-validation': !isEmargementValide })}>
              <img src={iconeValidation} alt="Emargement validé" />
            </div>
          </div>
          </Link>
          </div>
        </div>
      </div>
      {/* Div englobante pour la colonne */}
      <div className="column">
          {/* En-tête de la colonne avec arrière-plan orange */}
        <div className="column-header orange-bg">
            {/* Titre de l'en-tête */}
          <h2>Mes emargements</h2>
        </div>
        {/* Lien de navigation avec données d'état et gestionnaire d'événements */}
        <Link
        to={{
          pathname: '/nomdetudiant',
          state: { title: 'Sciences islamiques 2ème année', day: 'Jeu 18h00 à 12h00' }
          }}
          onClick={() => {
            setSelectedTitle('Sciences islamiques 2ème année');
            setSelectedDay('Jeu 18h00 à 12h00');
            }}
            >
        {/* Bloc interne de la colonne */}
        <div className='int-block'>
        {/* Titre de la date */}
        <h1 className='date'>Samedi 17 Dec 2022</h1>
        {/* Carte du séance */}
        <div className="card">
          {/* Titre de l'événement */}
          <h3>Sciences islamiques 2ème année</h3>
          <div className='row'>
          {/* Ligne de contenu du carte */}
          <p className='day'>Jeu 18h00 à 12h00</p>
          {/* Statistiques de session */}
          <p className='session'>11/32</p>
          </div>
        </div>
        <div className={classNames('emargement-validation-desktop', { 'hide-validation': !isEmargementValide })}>
          <img src={iconeValidation} alt="Emargement validé" />
        </div>
        </div>
        </Link>
      </div>

        {/* Div englobante pour la colonne */}
      <div className="column">
          {/* En-tête de la colonne avec arrière-plan orange */}
        <div className="column-header orange-bg">
          <h2>Mon agenda</h2>
        </div>
        <div className='int-block'>
        {/* Titre de la date */}
        <h1 className='date'>Samedi 17 Dec 2022</h1>
        {/* Carte pour le groupe */}
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
        {/* Carte pour un autre groupe */}
        <div className="card">
        {/* Titre de l'activité */}
          <h3>Sciences islamiques 1ére année</h3>
          <div className='row'>
          {/* Jour et horaires du séance */}
          <p className='day'>Jeu 18h00 à 12h00</p>
          {/* Statistiques de session */}
          <p className='session'>11/32</p>
          </div>
        </div>
        </div>
        <div className='int-block'>
        {/* Titre de la date */}
        <h1 className='date'>Samedi 19 Dec 2022</h1>
        {/* Carte pour un groupe */}
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
        </div>
      </div>
      
      <div className="column-r">
      {/* Section de la date */}
      <div className="date-section">
      {/* titre de la date */}
        <h2>Samedi 17 Déc 2022</h2>
      </div>
      {/* Entrée du tableau de bord */}
      <Link to='/recap'>
      <div className="dashboard-entry">
          {/* Heures du séance */}
        <div className="time">
          <p>10h15</p> {/* début */}
          <p>13h15</p> {/* fin */}
        </div>
        <div className="divider"></div>
        {/* Détails du groupe */}
        <div className="details">
        {/* Titre du groupe */}
          <p>Sciences islamiques 1ère année</p>
          {/* Informations supplémentaires */}
          <div className="extra-info">
            <p className="room">Salle n°1</p> {/* Numéro de la salle */}
            <p className="count">11/32</p>  {/* Statistiques de session */}
          </div>
        </div>
        <div className={classNames('emargement-validation', { 'hide-validation': !isEmargementValide })}>
          <img src={iconeValidation} alt="Emargement validé" />
        </div>
      </div>
      </Link>
      <Link to='/recap'>
      <div className="dashboard-entry">
          {/* Heures du séance */}
        <div className="time">
          <p>10h15</p> {/* début */}
          <p>13h15</p> {/* fin */}
        </div>
        <div className="divider"></div>
        {/* Détails du groupe */}
        <div className="details">
        {/* Titre du groupe */}
          <p>Sciences islamiques 2ème année</p>
          {/* Informations supplémentaires */}
          <div className="extra-info">
            <p className="room">Salle n°1</p> {/* Numéro de la salle */}
            <p className="count">11/32</p>  {/* Statistiques de session */}
          </div>
        </div>
        <div className={classNames('emargement-validation', { 'hide-validation': !isEmargementValide })}>
          <img src={iconeValidation} alt="Emargement validé" />
        </div>
      </div>
      </Link>
      <Link to='/recap'>
      <div className="dashboard-entry">
          {/* Heures du séance */}
        <div className="time">
          <p>10h15</p> {/* début */}
          <p>13h15</p> {/* fin */}
        </div>
        <div className="divider"></div>
        {/* Détails du groupe */}
        <div className="details">
        {/* Titre du groupe */}
          <p>Sciences islamiques 2ème année</p>
          {/* Informations supplémentaires */}
          <div className="extra-info">
            <p className="room">Salle n°1</p> {/* Numéro de la salle */}
            <p className="count">11/32</p>  {/* Statistiques de session */}
          </div>
        </div>
        <div className={classNames('emargement-validation', { 'hide-validation': !isEmargementValide })}>
          <img src={iconeValidation} alt="Emargement validé" />
        </div>
      </div>
      </Link>
  
      {/* Deuxième entrée du tableau de bord */}
      <Link to='/recap'>
      <div className="dashboard-entry">
          {/* Heures */}
        <div className="time">
          <p>14h15</p> {/* début */}
          <p>16h15</p> {/* fin */}
        </div>
        <div className="divider"></div>
        {/* Détails du groupe */}
        <div className="details">
        {/* Titre du groupe */}
          <p>Sciences islamiques 3ème année</p>
          {/* Informations supplémentaires */}
          <div className="extra-info">
            <p className="room">Salle n°1</p> {/* Numéro de la salle */}
            <p className="count">11/32</p> {/* Statistiques de session */}
          </div>
        </div>
        <div className={classNames('emargement-validation', { 'hide-validation': !isEmargementValide })}>
          <img src={iconeValidation} alt="Emargement validé" />
        </div>
      </div>
      </Link> 
    </div>

    {/* Bouton pour déclarer une AP */}
    <button className="ap-bo" onClick={handleShowAp}>Déclarer une AP</button>

    {/* Si showAp est vrai, affiche le contenu suivant */}
    {showAp && (
      // Div pour l'arrière-plan modal, en cliquant dessus, on ferme la modal
        <div className="modal-overlay" onClick={handleCloseShowAp}>
          {/* Div pour le contenu de la modal */}
          <div className="modal">
            {/* Titre de la modal */}
            <h2> Déclarer une AP </h2>
            <div className='bloc1'>
            {/* Div pour une ligne de l'agenda */}
            <div className="agenda-r">
              {/* Icône d'un calendrier */}
              <img src={nom} alt='' />
                {/* Titre pour choisir les dates */}
                <h3>Rechercher par nom :</h3>
            </div>
             {/* Div pour l'entrée de date */}
             <div className="date-input" onClick={(e) => e.stopPropagation()}>
             {/* Champ de texte pour saisir le nom d'un étudiant */}
             <input type="text" placeholder=" Saisir un nom d’étudiant " />
             {/* Icône d'un étudiant */}
             <img src={st} alt='' />
             </div>
            </div>
            <div className='bloc2'>
                {/* Div pour une ligne d'AP */}
                <div className="ap-r">
              {/* Icône d'un utilisateur */}
              <img src={nom} alt='' />
               {/* Titre pour rechercher par groupe */}
                <h3>Rechercher par groupe :</h3>
                </div>
                <div className='g-cont'>
              {/* Div pour sélectionner un groupe, cliquer pour effectuer une action */}
            <Link to="/recappopup">
            <div className="g" >
            {/* Titre du groupe */}
            <h3>Sciences islamiques 1ére année</h3>
            <div>
            {/* Horaires de l'AP */}
            <p className='d'>Jeu 18h00 à 12h00</p>
            </div>
          </div>
            </Link>
            <Link to="/recappopup">
            <div className="g" >
            {/* Titre du groupe */}
            <h3>Sciences islamiques 1ére année</h3>
            <div>
            {/* Horaires de l'AP */}
            <p className='d'>Jeu 18h00 à 12h00</p>
            </div>
          </div>
            </Link>
             {/* Div pour sélectionner un groupe, cliquer pour effectuer une action */}
             <Link to="/recappopup">
            <div className="g" >
            {/* Titre du groupe */}
            <h3>Sciences islamiques 2ème année</h3>
            <div>
            {/* Horaires de l'AP */}
            <p className='d'>Sam 10h15 à 13h15</p>
            </div>
          </div>
            </Link>
            <Link to="/recappopup">
            <div className="g" >
            {/* Titre du groupe */}
            <h3>Sciences islamiques 2ème année</h3>
            <div>
            {/* Horaires de l'AP */}
            <p className='d'>Sam 10h15 à 13h15</p>
            </div>
          </div>
            </Link>
            </div>
            </div>
          {/* Bouton pour annuler l'action */}
          <button className="ce-button">Annuler</button>
            </div>
          </div>
)}

  {/* si "declareAp" , affiche le contenu suivant */}
{declareAp && (
        // Overlay modal pour fermer la fenêtre modale lorsqu'on clique dessus
        <div className="modal-overlay" onClick={handleCloseDeclareAp}>
          {/* Fenêtre modale principale */}
          <div className="modal">
            <h2>Nom de l'étudiant</h2>
            {/* Ligne contenant une icône et un titre */}
            <div className="agenda-row">
              <img src={cldr} alt='' />
                <h3>Choisir dates :</h3>
            </div>
            {/* Ligne pour choisir les dates */}
            <div className="date-inputs">
              {/* Champ de saisie pour la première date */}
              <input type="text" placeholder="01/01/2023" />
              {/* Champ de saisie pour la deuxième date */}
              <input type="text" placeholder="28/01/2023" />
              {/* Icône pour sélectionner les dates */}
              <img src={st} alt='' />
            </div>
            {/* Ligne contenant une icône et un titre */}
            <div className="ap-row">
              <img src={user} alt='' />
              {/* Ligne pour sélectionner les AP */}
                <h3>Sélectionner les AP :</h3>
            </div>
            <div className='date-card-cont'>
            {/* Carte affichant une date */}
            <div className="date-card">
            <h3>01/02/2023</h3>
            </div>
            {/* Carte pour la deuxième date */}
            <div className="date-card">
            <h3>01/04/2023</h3>
            </div>
             {/* Carte pour la troisième date */}
            <div className="date-card">
            <h3>14/07/2023</h3>
            </div>
            {/* Carte pour la quatrième date */}
            <div className="date-card">
            <h3>14/07/2023</h3>
            </div>
            </div>
            {/* Ligne contenant des boutons */}
              <div className="buttons-row">
               {/* Bouton pour valider la sélection */}
                <button className="validate-button" onClick={handleConfirmationClick}>Valider</button>
               {/* Bouton pour annuler la sélection */}
                <button className="cancel-button">Annuler</button>
              </div>
          </div>
        </div>
)}
  {/* si "showConfirmation" , affiche le contenu suivant */}
{showConfirmation && (
      // Overlay modal pour fermer la fenêtre modale lorsqu'on clique dessus
      <div className="modal-overlay" onClick={handleOverlayClick}>
        {/* Contenu du modal de confirmation */}
        <div className="confirmation-card">
        {/* Conteneur de l'icône de confirmation */}
        <div className="icon-container">
              <i className="fas fa-check-circle"></i>
        </div>
          {/* Contenu de la fenêtre de confirmation */}
          <div className="confirmation-content">
            {/* Titre de la confirmation */}
            <h3>Vous déclarez avoir :</h3>
            {/* Détails de la confirmation */}
            <div className="confirmation-details">
              {/* Nombre de personnes présentes */}
              <p>Nb Présents</p>
              {/* Nombre de personnes absentes */}
              <p>Nb Absents</p>
            </div>
            {/* Boutons d'action de confirmation */}
            <div className="confirmation-buttons">
              {/* Bouton pour valider l'action */}
              <button className="va-button">Valider</button>
              {/* Bouton pour annuler l'action */}
              <button className="anul-button">Annuler</button>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default Dashboard; // Exportation du composant Dashboard