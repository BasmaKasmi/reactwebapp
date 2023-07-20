import React, { useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import cldr from '../../assets/calendar.svg';
import st from '../../assets/student.svg';
import user from '../../assets/2 User.png'

// Définition d'un composant fonctionnel Dashboard

const Dashboard = () => {
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedDateCard, setSelectedDateCard] = useState(null);
  const[showAp, setshowAp] = useState(false);
  const[selectStudent, setselectStudent] = useState(false);
  const[declareAp, setdeclareAp] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);


  const handleConfirmationClick = () => {
    setShowConfirmation(true);
  };
  const handleOverlayClick = () => {
    setShowConfirmation(false);
    document.body.classList.remove('modal-open');
  };

  const handleShowAp = () => {
    setshowAp(true)
  }
  const handleCloseShowAp = () => {
    setshowAp(false);
  };
  const handleSelectStudent = () => {
    setselectStudent(true)
  }
  const handleCloseSelectStudent = () => {
    setselectStudent(false);
  };

  const handleDeclareAp = () => {
    setdeclareAp(true)
  }
  const handleCloseDeclareAp = () => {
    setdeclareAp(false);
  };

  // Retourne du JSX qui va être rendu dans l'application
  return (
    <div className="dashboard">
      <div className="column-Enf">
        <div className="column-header">
          <h2>Emargements non faits</h2> 
        </div>
        <Link to={{
          pathname: '/nomdetudiant',
          state: { title: 'Sciences islamiques 2ème année', day: 'Jeu 18h00 à 12h00' }
        }}
        onClick={() => {
          setSelectedTitle('Sciences islamiques 2ème année');
          setSelectedDay('Jeu 18h00 à 12h00');
        }}
        >
        <div className='int-block'>
        <h1 className='date'>Jeudi 15 Dec 2022</h1> 
        <div className="card">
          <h3>Sciences islamiques 2ème année</h3>
          <div className='row'>
          <p className='day'>Jeu 18h00 à 12h00</p>
          <p className='session'>11/32</p>
          </div> 
        </div>
        </div>
        </Link>
      </div>
      
      <div className="pink-box">
          <h2>Emargement(s) non fait(s)</h2>
        <div className="content">
          <div className="entry">
            <h3>Sciences islamiques 2ème année</h3>
            <div className="details">
              <p className="date">Samedi 10 Déc 2022</p>
              <p className="count">11/32</p>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="column-header orange-bg">
          <h2>Mes emargements</h2>
        </div>
          <Link to={{
            pathname: '/nomdetudiant',
            state: { title: 'Sciences islamiques 2ème année', day: 'Jeu 18h00 à 12h00' }
          }}
          onClick={() => {
            setSelectedTitle('Sciences islamiques 2ème année');
            setSelectedDay('Jeu 18h00 à 12h00');
          }}
          >
        <div className='int-block'>
        <h1 className='date'>Samedi 17 Dec 2022</h1>
        <div className="card">
          <h3>Sciences islamiques 2ème année</h3>
          <div className='row'>
          <p className='day'>Jeu 18h00 à 12h00</p>
          <p className='session'>11/32</p>
          </div>
        </div>
        </div>
        </Link>
      </div>
      
      <div className="column">
        <div className="column-header orange-bg">
          <h2>Mon agenda</h2>
        </div>
        <div className='int-block'>
        <h1 className='date'>Samedi 17 Dec 2022</h1>
        <div className="card">
          <h3>Sciences islamiques 2ème année</h3>
          <div className='row'>
          <p className='day'>Jeu 18h00 à 12h00</p>
          <p className='session'>11/32</p>
          </div>
        </div>
        <div className="card">
          <h3>Sciences islamiques 1ére année</h3>
          <div className='row'>
          <p className='day'>Jeu 18h00 à 12h00</p>
          <p className='session'>11/32</p>
          </div>
        </div>
        </div>
        <div className='int-block'>
        <h1 className='date'>Samedi 19 Dec 2022</h1>
        <div className="card">
          <h3>Sciences islamiques 2ème année</h3>
          <div className='row'>
          <p className='day'>Jeu 18h00 à 12h00</p>
          <p className='session'>11/32</p>
          </div>
        </div>
        </div>
      </div>
      <div className="column-r">
      <div className="date-section">
        <h2>Samedi 17 Déc 2022</h2>
      </div>
      <div className="dashboard-entry">
        <div className="time">
          <p>10h15</p>
          <p>13h15</p>
        </div>
        <div className="divider"></div>
        <div className="details">
          <p>Sciences islamiques 2ème année</p>
          <div className="extra-info">
            <p className="room">Salle n°2</p>
            <p className="count">11/32</p>
          </div>
        </div>
      </div>
      <div className="dashboard-entry">
        <div className="time">
          <p>10h15</p>
          <p>13h15</p>
        </div>
        <div className="divider"></div>
        <div className="details">
          <p>Sciences islamiques 2ème année</p>
          <div className="extra-info">
            <p className="room">Salle n°2</p>
            <p className="count">11/32</p>
          </div>
        </div>
      </div>
        <button className="ap-button" onClick={handleShowAp}>Déclarer une AP</button>
    </div>
    {showAp && (
        <div className="modal-overlay" onClick={handleCloseShowAp}>
          <div className="modal">
            <h2> Déclarer une AP </h2>
            <div className="agenda-row">
              <img src={cldr} alt='' />
                <h3>Choisir dates :</h3>
            </div>
            <div className="date-input">
              <input type="text" placeholder=" Saisir un nom d’étudiant " />
              <img src={st} alt='' />
            </div>
            <div className="ap-row">
              <img src={user} alt='' />
                <h3>Rechercher par groupe :</h3>
            </div>
            <div className="g" onClick={handleSelectStudent}>
            <h3>Sciences islamiques 1ére année</h3>
            <div>
            <p className='d'>Jeu 18h00 à 12h00</p>
            </div>
          </div>
          <div className="g" onClick={handleSelectStudent}>
            <h3>Sciences islamiques 1ére année</h3>
            <div>
            <p className='d'>Jeu 18h00 à 12h00</p>
            </div>
          </div>
          <div className="g" onClick={handleSelectStudent}>
            <h3>Sciences islamiques 1ére année</h3>
            <div>
            <p className='d'>Jeu 18h00 à 12h00</p>
            </div>
          </div>
          <button className="cancel-button">Annuler</button>
          </div>
        </div>
)}
{selectStudent && (
        <div className="modal-overlay" onClick={handleCloseSelectStudent}>
          <div className="modal">
          <div className="pop-up-title">
          <h2> Sciences islamiques </h2>
          <h3>Date et heure du cours</h3>
          </div>
            <div className="ap-row">
              <img src={user} alt='' />
                <h3>Rechercher par groupe :</h3>
            </div>
          <div className="nom-stu" onClick={handleDeclareAp}>
              <h3>Nom de l’étudiant</h3>
            <div>
              <p className='abs'>Absence(s) : 3</p>
            </div>
          </div>
          <div className="nom-stu" onClick={handleDeclareAp}>
              <h3>Nom de l’étudiant</h3>
            <div>
              <p className='abs'>Absence(s) : 3</p>
            </div>
          </div>
          <div className="nom-stu" onClick={handleDeclareAp}>
              <h3>Nom de l’étudiant</h3>
            <div>
              <p className='abs'>Absence(s) : 3</p>
            </div>
          </div>
          <div className="nom-stu" onClick={handleDeclareAp}>
              <h3>Nom de l’étudiant</h3>
            <div>
              <p className='abs'>Absence(s) : 3</p>
            </div>
          </div>
          <button className="cancel-button">Annuler</button>
          </div>
        </div>
)}
{declareAp && (
        <div className="modal-overlay" onClick={handleCloseDeclareAp}>
          <div className="modal">
            <h2>Nom de l'étudiant</h2>
            <div className="agenda-row">
              <img src={cldr} alt='' />
                <h3>Choisir dates :</h3>
            </div>
            <div className="date-inputs">
              <input type="text" placeholder="01/01/2023" />
              <input type="text" placeholder="28/01/2023" />
              <img src={st} alt='' />
            </div>
            <div className="ap-row">
              <img src={user} alt='' />
                <h3>Sélectionner les AP :</h3>
            </div>
            <div className="date-card">
            <h3>01/02/2023</h3>
            </div>
            <div className="date-card">
            <h3>01/02/2023</h3>
            </div>
            <div className="date-card">
            <h3>14/07/2023</h3>
            </div>
            <div className="date-card">
            <h3>14/07/2023</h3>
            </div>
              <div className="buttons-row">
                <button className="validate-button" onClick={handleConfirmationClick}>Valider</button>
                <button className="cancel-button">Annuler</button>
              </div>
          </div>
        </div>
)}
{showConfirmation && (
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="confirmation-card">
        <div className="icon-container">
              <i className="fas fa-check-circle"></i>
            </div>
          <div className="confirmation-content">
            <h3>Vous déclarez avoir :</h3>
            <div className="confirmation-details">
              <p>Nb Présents</p>
              <p>Nb Absents</p>
            </div>
            <div className="confirmation-buttons">
              <button className="valider-button">Valider</button>
              <button className="annuler-button">Annuler</button>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default Dashboard; // Exporte le composant Dashboard pour être utilisé aille