import React, { useState } from 'react';
import classnames from 'classnames'; // importation de la bibliothèque 'classnames'
import './Agenda.css';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';

const Agenda = () => {
  // État local pour gérer la carte active et le contenu des groupes
  const [activeCards, setActiveCards] = useState([]); // tableau pour conserver plusieurs cartes sélectionnées

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
  
  const handleCardClick = (cardId) => {
    // Vérifions si la carte est déjà sélectionnée
    if (activeCards.includes(cardId)) {
      // Si la carte est déjà sélectionnée, la retirer de la liste des cartes actives
      setActiveCards((prevActiveCards) => prevActiveCards.filter((id) => id !== cardId));
    } else {
      // Sinon, ajoutons la carte à la liste des cartes actives
      setActiveCards((prevActiveCards) => [...prevActiveCards, cardId]);
    }
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
    <div >
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
          <div className='group-card-cont'>
          {/* Crée une carte */}
          <div
          className={classnames('group-card', { 'clicked': activeCards.includes('card-1') })}
          onClick={() => handleCardClick('card-1')}
          >
            {/* Affiche le titre de la carte */}
            <h3>Sciences islamiques 1ére année</h3>
            <div>
          {/* Affiche l'horaire */}
          <p className='group-card-day'>Jeu 18h00 à 12h00</p>
        </div>
       </div>
       {/* Crée une autre carte */}
       <div
       className={classnames('group-card', { 'clicked': activeCards.includes('card-2') })}
       onClick={() => handleCardClick('card-2')}
       >
        {/* Affiche le titre de la carte */}
        <h3>Sciences islamiques 1ére année</h3>
        <div>
        {/* Affiche l'horaire */}
          <p className='group-card-day'>Jeu 18h00 à 12h00</p>
          </div>
        </div>
        {/* Crée une autre carte */}
        <div
        className={classnames('group-card', { 'clicked': activeCards.includes('card-3') })}
        onClick={() => handleCardClick('card-3')}
        >
        {/* Affiche le titre de la carte */}
        <h3>Sciences islamiques 1ére année</h3>
        <div>
          {/* Affiche l'horaire */}
          <p className='group-card-day'>Jeu 18h00 à 12h00</p>
        </div>
        </div>

    </div>
        </div>
        {/* Contenu des groupes */}
          <div className="groupes">
            {/* En-tête de la section des groupes */}
            <div className="h">
              <h3> Calendrier </h3>
            </div>
            {/* Calendrier des groupes */}
            <div className="agenda">
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
              <div className="days-of-month">
                {renderDaysOfMonth()}
              </div>
            </div>
          </div>
    </div>
  );
}

export default Agenda;