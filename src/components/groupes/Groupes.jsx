import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Groupes.css';


const Groupes = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showGroupesContent, setShowGroupesContent] = useState(false); // Contrôler l'affichage du contenu dans la colonne "groupes"



  const handleCardClick = (cardId, cardTitle, cardDay) => {
    setActiveCard(cardId);
    setSelectedTitle(cardTitle);
    setSelectedDay(cardDay);
    setShowGroupesContent(true); // Affiche le contenu de la colonne "groupes" après avoir cliqué sur une carte
  };


   const handleConfirmationClick = () => {
    setShowConfirmation(true);
    document.body.classList.add('modal-open');
    setShowGroupesContent(true); // Affiche le contenu de la colonne "groupes" après avoir cliqué sur "Valider la feuille d'émargement"
  };


  return (
    <div className='Emargements'>
    <div className='groupes-res'>
    <h3> Mes groupes :</h3>
    <Link to='/grpnavigation1'>
    <div className="card">
      <h3>Sciences islamiques 1ére année</h3>
        <div>
          <p className='day'>Jeu 18h00 à 12h00</p>
        </div>
    </div>
    </Link>
    <Link to='/grpnavigation1'>
    <div className="card">
      <h3>Sciences islamiques 1ére année</h3>
        <div>
          <p className='day'>Jeu 18h00 à 12h00</p>
        </div>
    </div>
    </Link>
    <Link to='/grpnavigation1'>
    <div className="card">
      <h3>Sciences islamiques 1ére année</h3>
        <div>
          <p className='day'>Jeu 18h00 à 12h00</p>
        </div>
    </div>
    </Link>
    </div>
      <div className="co">
        <div className="column-header">
          <h2>Mes groupes</h2>
        </div>
        <div className="card-container">
          <div
            className={`card ${activeCard === 'card-1' ? 'clicked' : ''}`}
            onClick={() => handleCardClick('card-1', 'Sciences islamiques 2ème année', 'Ven 18h00 à 21h00')}
          >
            <h3>Sciences islamiques 2ème année</h3>
            <div className='row'>
              <p className='day'>Ven 18h00 à 21h00</p>
              <p className='session'>11/32</p>
            </div>
          </div>
          
          <div
            className={`card ${activeCard === 'card-2' ? 'clicked' : ''}`}
            onClick={() => handleCardClick('card-2', 'Sciences islamiques 1ère année', 'Sam 14h30 à 17h30')}
          >
            <h3>Sciences islamiques 1ère année</h3>
            <div className='row'>
              <p className='day'>Sam 14h30 à 17h30</p>
              <p className='session'>11/32</p>
            </div>
          </div>
          <div
            className={`card ${activeCard === 'card-3' ? 'clicked' : ''}`}
            onClick={() => handleCardClick('card-3', 'Sciences islamiques 3èmee année', 'Sam 14h30 à 17h30')}
          >
            <h3>Sciences islamiques 3ème année</h3>
            <div className='row'>
              <p className='day'>Sam 14h30 à 17h30</p>
              <p className='session'>11/32</p>
            </div>
          </div>
        </div>
      </div>
      { showGroupesContent && (
      <div className="groupes">
        <div className="column-head">
          <h3>{selectedTitle}</h3>
          <p className='day'>{selectedDay}</p>
        </div>
        <div className='card-container'>
        <div className="nom-stu">
          <h3>Nom de l’étudiant</h3>
            <div>
            <p className='abs'>Absence(s) : 3</p>
            </div>
        </div>
        <div className="nom-stu">
          <h3>Nom de l’étudiant</h3>
          <div>
            <p className='abs'>Absence(s) : 3</p>
          </div>
        </div>
        </div>
        <div className='card-container'>
        <div className="nom-stu">
          <h3>Nom de l’étudiant</h3>
          <div>
            <p className='abs'>Absence(s) : 3</p>
          </div>
        </div>
        <div className="nom-stu">
          <h3>Nom de l’étudiant</h3>
          <div>
            <p className='abs'>Absence(s) : 3</p>
          </div>
        </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default Groupes;