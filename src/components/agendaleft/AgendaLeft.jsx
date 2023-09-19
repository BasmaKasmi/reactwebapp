import React, { useState } from 'react';
import classnames from 'classnames'; // importation de la bibliothèque 'classnames'
import './AgendaLeft.css';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';

const AgendaLeft = ({ onCardClick }) => {


  // Tableau des noms des mois
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const [year, setYear] = useState(2023); // Année actuelle
  const [month, setMonth] = useState(0); // Mois actuel (0 pour janvier, 1 pour février, etc.)

  // Tableau des jours de la semaine
  const daysOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S']; // Jours de la semaine

  // Fonction pour afficher les jours du mois (exemple ici, on montre les jours de janvier)
  const renderDaysOfMonth = () => {
    const days = [];
    const numDays = 31; // Nombre de jours dans le mois (à adapter selon le mois)
  
    for (let day = 1; day <= numDays; day++) {
      // Récupérer le jour de la semaine correspondant à la date (ici, nous utilisons un jour fictif pour l'exemple)
      const dayOfWeek = new Date(year, month, day).getDay();
  
      // Ajouter des classes spécifiques aux jours du samedi (6) et du lundi (1) en fonction de la carte cliquée
      const isCard1Clicked = activeCards.includes('card-1');
      const isCard2Clicked = activeCards.includes('card-2');
  
      const classNames = classnames('day', {
        'saturday': dayOfWeek === 6 && isCard1Clicked,
        'monday': dayOfWeek === 1 && isCard2Clicked,
      });
  
      days.push(
        <div key={day} className={classNames}>
          {day}
        </div>
      );
    }
  
    return days;
  };
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeCards, setActiveCards] = useState([]); // tableau pour conserver plusieurs cartes sélectionnées

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    onCardClick(cardId);
  };
    // Gérer le clic sur le mois suivant
    const handleNextMonthClick = () => {
      // Mettons à jour le mois et l'année pour passer au mois suivant
      if (month === 11) {
        // Si le mois est décembre, passons à janvier et mettons à jour l'année
        setMonth(0);
        setYear((prevYear) => prevYear + 1);
      } else {
        // Sinon, passons simplement au mois suivant
        setMonth((prevMonth) => prevMonth + 1);
      }
    };
  
    // Gérer le clic sur le mois précédent
    const handlePrevMonthClick = () => {
      // Mettons à jour le mois et l'année pour passer au mois précédent
      if (month === 0) {
        // Si le mois est janvier, passons à décembre et mettons à jour l'année
        setMonth(11);
        setYear((prevYear) => prevYear - 1);
      } else {
        // Sinon, passons simplement au mois précédent
        setMonth((prevMonth) => prevMonth - 1);
      }
    };
  return (
    <div>
        <div className="groupesRes">
          {/* En-tête du mois et année avec boutons de navigation */}
          <div className="month-year">
            <img src={left} alt='' onClick={handlePrevMonthClick} />
            <h3> {months[month]} {year} </h3>
            <img src={right} alt='' onClick={handleNextMonthClick} />
          </div>
          {/* Jours de la semaine */}
          <div className="days-of-week">
            {daysOfWeek.map((day) => (
              <div key={day} className="day-of-week">
                {day}
              </div>
            ))}
          </div>
          {/* Jours du mois */}
          <div className="days-of-month">{renderDaysOfMonth()}</div>
          {/* Crée un conteneur pour les cartes */}
          <div className='grp-carte'>
          {/* Crée une carte */}
          <div
          className={classnames('carte', { 'clicked': activeCards.includes('card-1') })}
          onClick={() => handleCardClick('card-1')}
          >
            {/* Affiche le titre de la carte */}
            <h3>Sciences islamiques 1ére année</h3>
            <div>
          {/* Affiche l'horaire */}
          <p className='carte-day'>Jeu 18h00 à 12h00</p>
        </div>
       </div>
       {/* Crée une autre carte */}
       <div
       className={classnames('carte', { 'clicked': activeCards.includes('card-2') })}
       onClick={() => handleCardClick('card-2')}
       >
        {/* Affiche le titre de la carte */}
        <h3>Sciences islamiques 1ére année</h3>
        <div>
        {/* Affiche l'horaire */}
          <p className='carte-day'>Jeu 18h00 à 12h00</p>
          </div>
        </div>
        {/* Crée une autre carte */}
        <div
        className={classnames('carte', { 'clicked': activeCards.includes('card-3') })}
        onClick={() => handleCardClick('card-3')}
        >
        {/* Affiche le titre de la carte */}
        <h3>Sciences islamiques 1ére année</h3>
        <div>
          {/* Affiche l'horaire */}
          <p className='carte-day'>Jeu 18h00 à 12h00</p>
        </div>
        </div>

    </div>
        </div>
        {/* Colonne de l'agenda */}
        <div className="co">
        <div className="column-header orange-bg">
          <h2>Mon agenda</h2>
        </div>
        <div className='int-block'>
          <h1 className='date'>Samedi 17 Dec 2022</h1>
          <div
            className={classnames('card', { 'clicked': activeCards.includes('card-1') })}
            onClick={() => handleCardClick('card-1')}
          >
            <h3>Sciences islamiques 2ème année</h3>
            <div className='row'>
              <p className='day'>Jeu 18h00 à 12h00</p>
              <p className='session'>11/32</p>
            </div>
          </div>
          <div
            className={classnames('card', { 'clicked': activeCards.includes('card-2') })}
            onClick={() => handleCardClick('card-2')}
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
            className={classnames('card', { 'clicked': activeCards.includes('card-3') })}
            onClick={() => handleCardClick('card-3')}
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