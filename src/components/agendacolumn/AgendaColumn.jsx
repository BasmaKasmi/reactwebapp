import React, { useState, useEffect } from 'react';
import classnames from 'classnames'; // importation de la bibliothèque 'classnames'
import './AgendaColumn.css';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';

const AgendaColumn = ({ selectedCard }) => {
  const [activeCards, setActiveCards] = useState([]);

  useEffect(() => {
    if (selectedCard) {
      setActiveCards((prevActiveCards) => {
        if (prevActiveCards.includes(selectedCard)) {
          return prevActiveCards.filter((card) => card !== selectedCard);
        } else {
          return [...prevActiveCards, selectedCard];
        }
      });
    }
  }, [selectedCard]);

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

      const classNames = classnames('day', {
        'saturday': dayOfWeek === 6 && activeCards.includes('card-1'),
        'monday': dayOfWeek === 1 && activeCards.includes('card-2'),
      });

      days.push(
        <div key={day} className={classNames}>
          {day}
        </div>
      );
    }
  
    return days;
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
        {/* Contenu des groupes */}
          <div className="group-agenda" >
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

export default AgendaColumn;