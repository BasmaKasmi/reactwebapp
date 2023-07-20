import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cldr from '../../assets/calendar.svg';
import st from '../../assets/student.svg';
import Em from '../em/Em';
import './Emargements.css';

const Emargements = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [showEmContent, setShowEmContent] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showGroupesContent, setShowGroupesContent] = useState(false); // Contrôler l'affichage du contenu dans la colonne "groupes"


  const handleCardClick = (cardId, cardTitle, cardDay) => {
    setActiveCard(cardId);
    setSelectedTitle(cardTitle);
    setSelectedDay(cardDay);
    setShowGroupesContent(true); // Affiche le contenu de la colonne "groupes" après avoir cliqué sur une carte

    const handleConfirmationClick = () => {
      setShowConfirmation(true);
      document.body.classList.add('modal-open');
      setShowGroupesContent(true); // Affiche le contenu de la colonne "groupes" après avoir cliqué sur "Valider la feuille d'émargement"
    };


    if (cardId === 'card-1' || cardId === 'card-2' || cardId === 'card-3') {
      setShowEmContent(false);
    } else if (cardId === 'card-4') {
      setShowEmContent(true);
    } else {
      setShowEmContent(false);
    }
  };

  return (
    <div className='Emargements'>
    <div className='groupes-res'>
    <h3> Mes groupes :</h3>
    <Link to='/emnavigation1'>
    <div className="card">
      <h3>Sciences islamiques 1ére année</h3>
        <div>
          <p className='day'>Jeu 18h00 à 12h00</p>
        </div>
    </div>
    </Link>
    <Link to='/emnavigation1'>
    <div className="card">
      <h3>Sciences islamiques 1ére année</h3>
        <div>
          <p className='day'>Jeu 18h00 à 12h00</p>
        </div>
    </div>
    </Link>
    <Link to='/emnavigation1'>
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
          <h2>Mes emargements</h2>
        </div>
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
          onClick={() => handleCardClick('card-3', 'Sciences islamiques 3ème année', 'Sam 14h30 à 17h30')}
        >
          <h3>Sciences islamiques 3ème année</h3>
          <div className='row'>
            <p className='day'>Sam 14h30 à 17h30</p>
            <p className='session'>11/32</p>
          </div>
        </div>
      </div>
      { showGroupesContent && (
      <div className={`groupes ${showEmContent ? 'hide' : ''}`}>
        <div className="column-head">
          <h3>{selectedTitle}</h3>
          <p className='day'>{selectedDay}</p>
        </div>
        <div className="agenda-section">
          <img src={cldr} alt=''/>
          <span>Choisir dates :</span>
        </div>
        <div className="date-inputs">
            <input type="text" placeholder="01/01/2023" />
            <input type="text" placeholder="28/01/2023" />
            <img src={st} alt=''/>
        </div> 
        <div className="c" onClick={() => handleCardClick('card-4', '', '')}>
          <div className='row'>
            <h3>Emargement : 12/12/2022(n-1)</h3>
            <span className="status-f">FAIT</span>
          </div>
        </div>
        <div className="c" onClick={() => handleCardClick('card-4', '', '')}>
          <div className='row'>
            <h3>Emargement : 12/12/2022(du jour)</h3>
            <span className="status-f">FAIT</span>
          </div>
        </div>
        <div className="c" onClick={() => handleCardClick('card-4', '', '')}>
          <div className='row'>
            <h3>Emargement : 12/12/2022(n+1)</h3>
            <span className="status-n">NON FAIT</span>
          </div>
        </div>
        <div className="c" onClick={() => handleCardClick('card-4', '', '')}>
          <div className='row'>
            <h3>Emargement : 12/12/2022(n+3)</h3>
            <span className="status-n">NON FAIT</span>
          </div>
        </div>
      </div>
      )}
      {showEmContent && <Em />}
    </div>
  );
}

export default Emargements;