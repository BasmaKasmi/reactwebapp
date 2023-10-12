import React, { useState, useEffect } from 'react';
import classnames from 'classnames'; 
import moment from 'moment';
import './Agenda.css';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';


const Agenda = ({ selectedCard }) => {
  const [activeCards, setActiveCards] = useState([]);
  const [year, setYear] = useState(moment().year()); 
  const [month, setMonth] = useState(moment().month());
  const [selectedGroupId, setSelectedGroupId] = useState(null);


  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  const daysOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

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

  const getDayClass = (dayOfWeek) => {
    const isCard1Clicked = activeCards.includes('card-1');
    const isCard2Clicked = activeCards.includes('card-2');
  
    return classnames({
      'saturday': dayOfWeek === 6 && isCard1Clicked,
      'monday': dayOfWeek === 1 && isCard2Clicked,
    });
  };

  const renderDaysOfMonth = () => {
    const days = [];
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const numDaysInMonth = new Date(year, month + 1, 0).getDate();

    // Remplir les jours vides avant le 1er jour du mois
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }
  
    // Remplir les jours du mois
    for (let day = 1; day <= numDaysInMonth; day++) {
      const dayOfWeek = new Date(year, month, day).getDay(); 
      const dayClassName = classnames('day', getDayClass(dayOfWeek));
      days.push(<div key={day} className={dayClassName}>{day}</div>);
    }
  
    return days;
  };

  
  const getMonthYearHeader = () => {
    const monthName = months[month];
    const firstDayOfMonth = new Date(year, month, 1);
  
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
  const cartesData = [
    { id: 'card-1', titre: 'Sciences islamiques 1ère année', horaire: 'Jeu 18h00 à 12h00' },
    { id: 'card-2', titre: 'Sciences islamiques 2ème année', horaire: 'Lun 14h00 à 18h00' },
    { id: 'card-3', titre: 'Sciences islamiques 3ème année', horaire: 'Mar 14h00 à 18h00' },

  ];

  return (
    <div className="Agenda">
            <div className="groupesRes" >
            <div className="month-year">
                <img src={left} alt='' onClick={handlePrevMonthClick} />
                <h3> {getMonthYearHeader()}</h3>
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
              <div className="days-of-month">
                {renderDaysOfMonth()}
              </div>
          <div className='group-card-cont'>
          { /*
                  Route : Récupération de la liste de TOUS les groupes du prof
                  URL :
                    Informations transmises :
                    Identifiant du prof
                  Informations attendues :
                    Liste des groupes du prof
                */}
            {cartesData.map((carte) => (
            <div
            key={carte.id}
            className={classnames('group-card', { 'clicked': activeCards.includes(carte.id) })}
            onClick={() => handleCardClick(carte.id)}
            >
              <h3>{carte.titre}</h3>
              <div>
                <p className='group-card-day'>{carte.horaire}</p>
                { /*
                  Route : Récupération du nom du groupe et de son horaire
                  URL :
                  Informations transmises :
                      Identifiant du groupe
                  Informations attendues :
                      Nom du groupe (h3)
                      Horaire du groupe (p)
                  */}
              </div>
              </div>
              ))}
            </div>
         </div>
       
    </div>

          
  );
}

export default Agenda;