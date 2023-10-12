// version mobile emargements

import React from 'react'; 
import cldr from '../../assets/calendar.svg'; 
import st from '../../assets/student.svg'; 
import { Link } from 'react-router-dom'; 
import './CardDetails.css'; 

const CardDetails = () => {

  const semaines = [
    { id: 1, semaine: 'Semaine 1', status: 'NON FAIT' },
    { id: 2, semaine: 'Semaine 2', status: 'FAIT' },
    { id: 3, semaine: 'Semaine 3', status: 'FAIT' },
  ];
  return (
    <div className='Details'>  
      <div className="agenda-row">
        <img src={cldr} alt='' />
        <h3>Choisir dates :</h3>
      </div>
      <div className="da-inputs">
        {/* Champ de saisie de texte pour la première date */}
        <input type="text" placeholder="01/01/2023" />
        {/* Champ de saisie de texte pour la deuxième date */}
        <input type="text" placeholder="28/01/2023" />
        <img src={st} alt='' />
      </div>
      <div className='c-em'>
      <h2>
        Mes dates :
      </h2>
      <div className='cart-cont'>
      {semaines.map(semaine => (
        <Link to="/recapem" key={semaine.id}>
          <div className="cart">
            <div className='ligne'>
              <h3>{semaine.semaine}</h3>
              <p className={semaine.status === 'FAIT' ? 'status-f' : 'status-n'}>{semaine.status}</p>
            </div>
          </div> 
        </Link>
      ))}
      </div>
      </div>
    </div>
  );
};


export default CardDetails; 