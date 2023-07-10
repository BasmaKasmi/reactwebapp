import React from 'react';
import cldr from '../../assets/calendar.svg';
import st from '../../assets/student.svg';
import './CardDetails.css';

const CardDetails = () => {
  return (
    <div className='Details'>
      <div className="agenda-row">
        <img src={cldr} alt='' />
        <h3>Choisir dates :</h3>
      </div>
      <div className="date-inputs">
        <input type="text" placeholder="01/01/2023" />
        <input type="text" placeholder="28/01/2023" />
        <img src={st} alt='' />
      </div>
      <div className="c">
        <div className='row'>
          <h3>semaine 1</h3>
          <span className="status-f">FAIT</span>
        </div>
      </div>
      <div className="c">
        <div className='row'>
          <h3>semaine 2</h3>
          <span className="status-f">FAIT</span>
        </div>
      </div>
      <div className="c">
        <div className='row'>
          <h3>semaine 3</h3>
          <span className="status-n">NON FAIT</span>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
