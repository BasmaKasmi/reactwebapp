import React, { useState } from 'react';
import classnames from 'classnames'; // importer la bibliothèque 'classnames'
import './Agenda.css';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';

const Agenda = () => {
  const [activeCards, setActiveCards] = useState([]); // tableau pour conserver plusieurs cartes sélectionnées
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showGroupesContent, setShowGroupesContent] = useState(false);

  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const [year, setYear] = useState(2023); // Année actuelle
  const [month, setMonth] = useState(0); // Mois actuel (0 pour janvier, 1 pour février, etc.)

  const daysOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S']; // Jours de la semaine

  // Fonction pour afficher les jours du mois (exemple ici, on montre les jours de janvier)

  const renderDaysOfMonth = () => {
    const days = [];
    const numDays = 31; // Nombre de jours dans le mois (à adapter selon le mois)
  
    for (let day = 1; day <= numDays; day++) {
      // Récupérer le jour de la semaine correspondant à la date (ici, nous utilisons un jour fictif pour l'exemple)
      const dayOfWeek = new Date(year, month, day).getDay();
  
      // Ajouter des classes spécifiques aux jours du samedi (6) et du lundi (1)
      const classNames = classnames('day', {
        'saturday': dayOfWeek === 6,
        'monday': dayOfWeek === 1,
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
  
    setShowGroupesContent(true); // Affichons le contenu de la colonne "groupes" après avoir cliqué sur une carte
  };

  const handleConfirmationClick = () => {
    setShowConfirmation(true);
    document.body.classList.add('modal-open');
    setShowGroupesContent(true);
  };

  const handleOverlayClick = () => {
    setShowConfirmation(false);
    document.body.classList.remove('modal-open');
  };

  const handleNextMonthClick = () => {
    // Mettez à jour le mois et l'année pour passer au mois suivant
    if (month === 11) {
      // Si le mois est décembre, passez à janvier et mettez à jour l'année
      setMonth(0);
      setYear((prevYear) => prevYear + 1);
    } else {
      // Sinon, passez simplement au mois suivant
      setMonth((prevMonth) => prevMonth + 1);
    }
  };

  const handlePrevMonthClick = () => {
    // Mettez à jour le mois et l'année pour passer au mois précédent
    if (month === 0) {
      // Si le mois est janvier, passez à décembre et mettez à jour l'année
      setMonth(11);
      setYear((prevYear) => prevYear - 1);
    } else {
      // Sinon, passez simplement au mois précédent
      setMonth((prevMonth) => prevMonth - 1);
    }
  };

  return (
    <div className='Emargements'>
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
      {showGroupesContent && (
        <div className="groupes">
          <div className="column-head">
            <h3>Vue calendrier</h3>
          </div>
          <div className="month-year">
            <img src={left} alt='' onClick={handlePrevMonthClick} />
            <h3> {months[month]} {year} </h3>
            <img src={right} alt='' onClick={handleNextMonthClick} />
          </div>
          <div className="days-of-week">
            {daysOfWeek.map((day) => (
              <div key={day} className="day-of-week">
                {day}
              </div>
            ))}
          </div>
          <div className="days-of-month">{renderDaysOfMonth()}</div>
        </div>
      )}
    </div>
  );
}

export default Agenda;
