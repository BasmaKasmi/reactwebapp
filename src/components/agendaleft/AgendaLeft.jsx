import React, { useState } from 'react';
import classnames from 'classnames'; // importation de la bibliothèque 'classnames'
import './AgendaLeft.css';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';

const AgendaLeft = ({ onCardClick }) => {
  const [isCard1Selected, setIsCard1Selected] = useState(false);
  const [isCard2Selected, setIsCard2Selected] = useState(false);
  const [isCard3Selected, setIsCard3Selected] = useState(false);

  const handleCardClick = (cardId) => {
    if (cardId === 'card-1') {
      setIsCard1Selected(!isCard1Selected);
      onCardClick(cardId);
    } else if (cardId === 'card-2') {
      setIsCard2Selected(!isCard2Selected);
      onCardClick(cardId);
    } else if (cardId === 'card-3') {
      setIsCard3Selected(!isCard3Selected);
      onCardClick(cardId);
    }
  };

  return (
    <div>
      {/* Colonne de l'agenda */}
      <div className="co">
        <div className="column-header orange-bg">
          <h2>Mon agenda</h2>
        </div>
        <div className='int-block'>
          <h1 className='date'>Samedi 17 Dec 2022</h1>
          <div
            className={classnames('card', { 'clicked': isCard1Selected })}
            onClick={() => handleCardClick('card-1')}
            style={{
              backgroundColor: isCard1Selected ? '#FD9340' : '', // Utilisez isCard1Selected ici
              color: isCard1Selected ? '#FFFFFF' : '',
            }}
          >
            <h3>Sciences islamiques 2ème année</h3>
            <div className='row'>
              <p className='day'>Jeu 18h00 à 12h00</p>
              <p className='session'>11/32</p>
            </div>
          </div>
          <div
            className={classnames('card', { 'clicked': isCard2Selected })}
            onClick={() => handleCardClick('card-2')}
            style={{
              backgroundColor: isCard2Selected ? '#FD9340' : '', // Utilisez isCard2Selected ici
              color: isCard2Selected ? '#FFFFFF' : '',
            }}
          >
            <h3>Sciences islamiques 1ère année</h3>
            <div className='row'>
              <p className='day'>Jeu 18h00 à 12h00</p>
              <p className='session'>11/32</p>
            </div>
          </div>
        </div>
        <div className='int-block'>
          <h1 className='date'>Samedi 18 Dec 2022</h1>
          <div
            className={classnames('card', { 'clicked': isCard3Selected })}
            onClick={() => handleCardClick('card-3')}
            style={{
              backgroundColor: isCard3Selected ? '#FD9340' : '', // Utilisez isCard3Selected ici
              color: isCard3Selected ? '#FFFFFF' : '',
            }}
          >
            <h3>Sciences islamiques 2ème année</h3>
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

export default AgendaLeft;