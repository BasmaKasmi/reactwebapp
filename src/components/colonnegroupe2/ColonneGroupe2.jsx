import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ColonneGroupe2.css';
import status from '../../assets/statusup.svg';
import st from '../../assets/student.svg';
import cldr from '../../assets/calendar.svg';
import user from '../../assets/2 User.png';
import ShowModal from '../showmodal/ShowModal';


const ColonneGroupe2 = (props) => {
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

  const handleMobileGroupClick = () => {
    // Redirigez l'utilisateur vers la page RecapGp en mode mobile
    navigate('/recapgp');
  };
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleCloseShowModal = () => {
    setShowModal(false);
  };
   // Ajoutez le gestionnaire d'événement onClick à la div "modal-overlay" pour fermer la popup
   const handleOverlayClick = (e) => {
    const isOverlay = e.target.classList.contains('modal-overlay');
    const isCancel = e.target.classList.contains('an');
  
    if (isOverlay || isCancel) {
      handleCloseShowModal();
    }
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
      <div className="groupe">
        {/* Entête de la colonne */}
        <div className="column-head">
          {/* Affiche le titre sélectionné */}
          {activeCard && <h3>{activeCard}</h3>}
          {/* Affiche le jour sélectionné */}
          {selectedCard && <p className='day'>{selectedCard.date}</p>}
        </div>
        {/* Conteneur pour les cartes d'étudiants */}
        <div className='card-container' style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
        { /*
      
            Route : Récupération de la liste des étudiants du groupe sélectionné
            URL :
            Informations transmises :
                Identifiant du groupe
            Informations attendues :
                Liste des étudiants (nom + nb absence (AP+AI))
            */}
        {/* Nom de l'étudiant */}
        <div className="nom-stu" onClick={handleClick}>
          <h3>Nom de l’étudiant</h3>
          <div>
          {/* Affiche le nombre d'absences */}
            <p className='abs'>Absence(s) : 3</p>
              { /*
            Route : Récupération des infos de l'étudiant
            URL :
            Informations transmises :
                Identifiant de l'étudiant
            Informations attendues (sous forme de card):
                Nom & prénom de l'étudiant
                Nb d'absences de l'étudiant (AP+AI)
            */}
          </div>
        </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <ShowModal handleOverlayClick={handleOverlayClick} />
        </div>
      )}
    </div>
  );
}

export default ColonneGroupe2; // Exportation du composant Groupes