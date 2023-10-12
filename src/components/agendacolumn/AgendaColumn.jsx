import React, { useState, useEffect } from 'react';
import moment from 'moment';
import classnames from 'classnames'; 
import './AgendaColumn.css';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';


const AgendaColumn = ({ selectedCards, selectedDayType }) => {
  const [year, setYear] = useState(moment().year()); 
  const [month, setMonth] = useState(moment().month());

  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  const daysOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  
  const getDayClass = (dayOfWeek) => {
    const isCard1Selected = selectedCards.includes('card-1') && selectedDayType === 'Lundi';
    const isCard2Selected = selectedCards.includes('card-2') && selectedDayType === 'Samedi';
  
    if (isCard1Selected && dayOfWeek === 1) {
      return 'saturday';
    }
  
    if (isCard2Selected && dayOfWeek === 6) {
      return 'monday';
    }
  
    return '';
  };

  const renderDaysOfMonth = () => {
    const days = [];
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const numDaysInMonth = new Date(year, month + 1, 0).getDate();

    // Remplir les jours vides avant le 1er jour du mois
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    // Remplir les jours du mois avec les classes appropriées
    for (let day = 1; day <= numDaysInMonth; day++) {
      const dayOfWeek = new Date(year, month, day).getDay();
      const dayClass = getDayClass(dayOfWeek);
      const dayClassName = classnames('day', dayClass);

      days.push(<div key={day} className={dayClassName}>{day}</div>);
    }

    return days;
  };


  
  const getMonthYearHeader = () => {
    const monthName = months[month];
  
    return `${monthName} ${year}`;
  };

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
  const groupes = [
    { id: 'card-1', title: 'Sciences islamiques 2ème année', date: 'Samedi 17 Dec 2022', time: 'Jeu 18h00 à 12h00', session: '11/32', dayType: 'Lundi',},
    { id: 'card-2', title: 'Sciences islamiques 1ère année', date: 'Samedi 17 Dec 2022', time: 'Jeu 18h00 à 12h00', session: '11/32', dayType: 'Samedi'},
    { id: 'card-3', title: 'Sciences islamiques 3ème année', date: 'Samedi 19 Dec 2022', time: 'Jeu 18h00 à 12h00', session: '11/32',},
  ];
  


  return (
    <div>
          <div className="group-agenda" >
            {/* En-tête de la section des groupes */}
            <div className="h">
              <h3> Calendrier </h3>
            </div>
            <div className="agenda">
              {/* En-tête du mois et année avec boutons de navigation */}
              <div className="month-year">
                <img src={left} alt='' onClick={handlePrevMonthClick} />
                <h3> {getMonthYearHeader()}</h3>
                <img src={right} alt='' onClick={handleNextMonthClick} />
              </div>
              <div className="days-of-week">
                {daysOfWeek.map((day) => (
                  <div key={day} className="day-of-week">
                    {day}
                  </div>
                ))}
              </div>
              <div className="days-of-month">
                {renderDaysOfMonth()}
              </div>
            </div>
          </div>
    </div>
  );
}

export default AgendaColumn;