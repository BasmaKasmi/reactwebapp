import React, { useState } from 'react';
import classnames from 'classnames'; // importation de la bibliothèque 'classnames'
import { Link } from 'react-router-dom';
import './Agenda.css';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';

const Agenda = () => {
  // État local pour gérer la carte active et le contenu des groupes
  const [activeCard, setActiveCard] = useState(null);
  const [showGroupesContent, setShowGroupesContent] = useState(false);

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
  
  // Gérer le clic sur une carte
  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
    setShowGroupesContent(true); // Affichons le contenu de la colonne "groupes" après avoir cliqué sur une carte
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
    <div className='Agenda'>
      {/* Section des émargements */}
      <div className='Emargements'>
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
          {/* Cartes de groupe */}
          <Link to='/grpnavigation1'>
            <div className="card">
              <h3>Sciences islamiques 1ére année</h3>
              <div>
                <p className='day'>Jeu 18h00 à 12h00</p>
              </div>
            </div>
          </Link>
          {/* Cartes de groupe */}
          <Link to='/grpnavigation1'>
            <div className="card">
              <h3>Sciences islamiques 1ére année</h3>
              <div>
                <p className='day'>Jeu 18h00 à 12h00</p>
              </div>
            </div>
          </Link>
          {/* Cartes de groupe */}
          <Link to='/grpnavigation1'>
            <div className="card">
              <h3>Sciences islamiques 1ére année</h3>
              <div>
                <p className='day'>Jeu 18h00 à 12h00</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Colonne de l'agenda */}
        <div className="co">
        {/* En-tête de la colonne */}
          <div className="column-header orange-bg">
            <h2>Mon agenda</h2>
          </div>
          {/* Bloc interne pour les groupes */}
          <div className='int-block'>
            {/* Date et carte du groupe */}
            <h1 className='date'>Samedi 17 Dec 2022</h1>
            <div
              className={classnames('card', { 'clicked': activeCard === 'card-1' })}
              onClick={() => handleCardClick('card-1')}
            >
              <h3>Sciences islamiques 2ème année</h3>
              <div className='row'>
                <p className='day'>Jeu 18h00 à 12h00</p>
                <p className='session'>11/32</p>
              </div>
            </div>
            <div
              className={classnames('card', { 'clicked': activeCard === 'card-2' })}
              onClick={() => handleCardClick('card-2')}
            >
              <h3>Sciences islamiques 1ère année</h3>
              <div className='row'>
                <p className='day'>Jeu 18h00 à 12h00</p>
                <p className='session'>11/32</p>
              </div>
            </div>
          </div>
          {/* Bloc interne pour les groupes */}
          <div className='int-block'>
          {/* Date et carte du groupe */}
            <h1 className='date'>Samedi 19 Dec 2022</h1>
            <div
              className={classnames('card', { 'clicked': activeCard === 'card-3' })}
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
        {/* Contenu des groupes */}
        {showGroupesContent && (
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
        )}
      </div>
    </div>
  );
}

export default Agenda;
