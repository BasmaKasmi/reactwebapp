import React, { useState } from 'react';
import status from '../../assets/statusup.svg';
import stu from '../../assets/2 User.png';
import cldr from '../../assets/calendar.svg';
import st from '../../assets/student.svg';
import user from '../../assets/useredit.svg';
import './RecapGp.css';
import ShowModal from '../showmodal/ShowModal';

const RecapGp = () => {
  const [showModal, setShowModal] = useState(false);
  const[showAp, setshowAp] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateCardClick = (date) => {
    // Vérifier si la date est déjà sélectionnée
    if (selectedDates.includes(date)) {
      // Si elle est sélectionnée, la retirer de la liste
      setSelectedDates(selectedDates.filter(d => d !== date));
    } else {
      // Si elle n'est pas sélectionnée, l'ajouter à la liste
      setSelectedDates([...selectedDates, date]);
    }
  };


  const handleClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowAp = () => {
    setshowAp(true)
  }
  const handleCloseShowAp = () => {
    setshowAp(false);
  };
  const handleConfirmationClick = () => {
    setShowConfirmation(true);
  };
  const handleOverlayClick = () => {
    setShowConfirmation(false);
    document.body.classList.remove('modal-open');
  };


  return (
    <div className='Recap'>
        <div className='header'>
        <h2>Sciences islamiques</h2>
        <h3>Date du cours</h3>
        { /*
            Route : Récupération du nom du groupe sélectionné et de son horaire
            URL :
            Informations transmises :
                Identifiant du groupe
            Informations attendues :
                Nom du groupe (h3)
                Horaire du groupe (p)
            */}
        </div>
        <div className="recap-row">
        <img src={status} alt='' />
        <h3> Récapitulatif du groupe : </h3>
        </div>
      <div className="c">
        <div className='row'>
          <div className='col'>
            <h3>17</h3>
            <p className="description">Inscrits</p>
            {/* Route : Récupération du nombre d'étudiants inscrits au groupe
                    URL :
                    Informations transmises :
                    Identifiant du groupe
                    Informations attendues :
                    Nb d'inscrits (Abandons exclus)*/}
          </div>
          <div className='col'>
            <h3>2</h3>
            <p className="description">Abandon(s)</p>
            {/* Route : Récupération du nombre d'étudiants déclarer en "abandon"
                    URL :
                    Informations transmises :
                    Identifiant du groupe
                    Informations attendues :
                    Nb d'abandons*/}
          </div>
          <div className='col'>
            <h3>65%</h3>
            <p className="description">Présence</p>
            {/* Route : Récupération du taux de présence moyen du groupe en %
                    URL :
                    Informations transmises :
                    Identifiant du groupe
                    Informations attendues :
                    Taux de présence moyen du groupe en %*/}
          </div>
          <div className='col'>
            <h3>2/32</h3>
            {/* Route : Récupération du taux de progression
                    URL :
                    Informations transmises :
                    Identifiant du groupe
                    Informations attendues :
                    Taux de prograssion du groupe au format (nb de séance faites / nb de séance sur l'année)
                    */}
            <p className="description">Progression</p>
          </div>
        </div>
      </div> 
      <div className="stu-row">
        <img src={stu} alt='' />
        <h3> Nombre d’étudiants : 22 </h3>
        { /*
            Route : Récupération du nb d'inscrits (hors abandons)
            URL :
            Informations transmises :
                Identifiant du groupe
            Informations attendues (sous forme de card):
                Nombre d'inscrit au groupe (hors abandons)
            */}
      </div>
      <div className='card-cont'>
      { /*
            Route : Récupération de la liste des étudiants du groupe sélectionné
            URL :
            Informations transmises :
                Identifiant du groupe
            Informations attendues :
                Liste des étudiants
            */}

      <div className="card" onClick={handleClick}>
      <div className='col'>
      <h3>Nom de l'étudiant</h3>
        <p>Absence(s) : 3</p>
        { /*
            Route : Récupération des infos de l'étudiant
            URL :
            Informations transmises :
                Identifiant de l'étudiant
            Informations attendues (sous forme de card):
                Nom & prénom de l'étudiant
                Nb d'absences de l'étudiant (AP+AI)
            */}
      </div>
      </div>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <ShowModal handleOverlayClick={handleOverlayClick} />
        </div>
      )}
    </div>
  )
}

export default RecapGp;