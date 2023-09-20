import React, { useState } from 'react';
import classnames from 'classnames'; // importation de la bibliothèque 'classnames'
import './AgendaLeft.css';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';

const AgendaLeft = ({ onCardClick }) => {

  const [selectedCard, setSelectedCard] = useState(null);
  const [activeCards, setActiveCards] = useState([]); // tableau pour conserver plusieurs cartes sélectionnées

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    onCardClick(cardId);
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
          className={classnames('card', { 'clicked': selectedCard === 'card-1' })}
          onClick={() => handleCardClick('card-1')}
          style={{
            backgroundColor: selectedCard === 'card-1' ? '#FD9340' : '', // Condition pour la couleur de fond
            color: selectedCard === 'card-1' ? '#FFFFFF' : '', // Condition pour la couleur du texte
          }}
        >
            <h3>Sciences islamiques 2ème année</h3>
            <div className='row'>
              <p className='day'>Jeu 18h00 à 12h00</p>
              <p className='session'>11/32</p>
            </div>
          </div>
          <div
          className={classnames('card', { 'clicked': selectedCard === 'card-2' })}
          onClick={() => handleCardClick('card-2')}
          style={{
            backgroundColor: selectedCard === 'card-2' ? '#FD9340' : '', // Condition pour la couleur de fond
            color: selectedCard === 'card-2' ? '#FFFFFF' : '', // Condition pour la couleur du texte
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
          <h1 className='date'>Samedi 19 Dec 2022</h1>
          <div
          className={classnames('card', { 'clicked': selectedCard === 'card-3' })}
          onClick={() => handleCardClick('card-3')}
          style={{
            backgroundColor: selectedCard === 'card-3' ? '#FD9340' : '', // Condition pour la couleur de fond
            color: selectedCard === 'card-3' ? '#FFFFFF' : '', // Condition pour la couleur du texte
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