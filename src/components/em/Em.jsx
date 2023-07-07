import React, { useState } from 'react';
import './Em.css';

const Em = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const handleCardClick = (cardId, cardTitle, cardDay) => {
    setActiveCard(cardId);
    setSelectedTitle(cardTitle);
    setSelectedDay(cardDay);
  };

  return (
    <div className='Emargements'>
      <div className="co">
        <div className="column-header">
          <h2>Mes emargements</h2>
        </div>
        <div className="card-container">
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
            onClick={() => handleCardClick('card-3', 'Sciences islamiques 3èmee année', 'Sam 14h30 à 17h30')}
          >
            <h3>Sciences islamiques 3ème année</h3>
            <div className='row'>
              <p className='day'>Sam 14h30 à 17h30</p>
              <p className='session'>11/32</p>
            </div>
          </div>
        </div>
      </div>
      <div className="groupes">
        <div className="column-head">
          <h3>{selectedTitle}</h3>
          <p className='day'>{selectedDay}</p>
        </div>
        <div className='card-container'>
        </div>
        <div className='card-container'>
        <div className="std">
          <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
            <div className="student-buttons">
              <button>AP</button>
              <button>AI</button>
            </div>
          </div>
        </div>
        <div className="std">
          <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
            <div className="student-buttons">
              <button>AP</button>
              <button>AI</button>
            </div>
          </div>
        </div>
        </div>
        <div className='card-container'>
        <div className="std">
          <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
            <div className="student-buttons">
              <button>AP</button>
              <button>AI</button>
            </div>
          </div>
        </div>
        <div className="std">
          <div className='row'>
          <div className='col'>
          <h3>Nom de l'étudiant</h3>
          <span>Absence(s) : 3</span>
          </div>
            <div className="student-buttons">
              <button>AP</button>
              <button>AI</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Em;