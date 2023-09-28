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
  const [isEmargementValide, setIsEmargementValide] = useState(false); // Pour suivre si l'émargement est validé ou non 

  //lorsque l'utilisateur clique sur un bouton de validation
  const validerEmargement = () => {
    setIsEmargementValide(true);
  };
  const handleShowAp = () => {
    setshowAp(true)
  }
  const handleCloseShowAp = () => {
    setshowAp(false);
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
        </div>
        </Link>
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
              {/* Crée une boîte avec une classe "pink-box" */}
      <div className="pink-box">
        {/* Affiche un titre de niveau 2 */}
          <h2>Emargements non faits</h2>
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
          </div>
          </Link>
          </div>
        </div>
      </div>
      {/* Section de la date */}
      <div className="date-section">
      {/* titre de la date */}
        <h2>Samedi 17 Déc 2022</h2>
      </div>
      <div className="dash-cont">
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
    </div>
  );
};

export default Dashboard; // Exportation du composant Dashboard