import React from 'react'
import './TdbMobile.css';
const TdbMobile = () => {
  return (
    <div className="container">
      <div className="date-section">
        <h2>Samedi 17 Décembre 2022</h2>
      </div>
      <div className="dashboard-entry">
        <div className="time">
          <p>10h15</p>
          <p>13h15</p>
        </div>
        <div className="divider"></div>
        <div className="details">
          <h3>Sciences islamiques 2ème année</h3>
          <div className="extra-info">
            <p className="room">Salle n°2</p>
            <p className="count">12/32</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <button className="ap-button">Déclarer une AP</button>
      </div>
    </div>
  );
}

export default TdbMobile
