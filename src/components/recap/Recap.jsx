import React, { useState } from 'react';
import status from '../../assets/statusup.svg';
import stu from '../../assets/2 User.png';
import './Recap.css';

const Recap = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='Recap'>
        <div className='header'>
        <h2>Sciences islamiques</h2>
        <h3>10h15 à 13h15</h3>
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
          </div>
          <div className='col'>
            <h3>2</h3>
            <p className="description">Abandon(s)</p>
          </div>
          <div className='col'>
            <h3>65%</h3>
            <p className="description">Présence</p>
          </div>
          <div className='col'>
            <h3>34%</h3>
            <p className="description">Progression</p>
          </div>
        </div>
      </div>
      <div className="stu-row">
        <img src={stu} alt='' />
        <h3> Nombre d’étudiants : 22 </h3>
      </div>
      <div className="nom-stu" onClick={handleClick}>
      <h3>Nom de l’étudiant</h3>
        <div>
          <p className='abs'>Absence(s) : 3</p>
        </div>
    </div>
    <div className="nom-stu" onClick={handleClick}>
      <h3>Nom de l’étudiant</h3>
        <div>
          <p className='abs'>Absence(s) : 3</p>
        </div>
    </div>
    {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal">
            <h2>Nom de l'étudiant</h2>
            <div className="recap-row">
              <img src={status} alt='' />
              <h3> Récapitulatif du groupe : </h3>
            </div>
            <div className='row'>
              <div className='col'>
                <h3>17</h3>
                <p className="description">Inscrits</p>
              </div>
              <div className='col'>
                <h3>2</h3>
                <p className="description">Abandon(s)</p>
              </div>
              <div className='col'>
                <h3>65%</h3>
                <p className="description">Présence</p>
              </div>
            </div>
            <div className="buttons-row">
              <button className="ap-button">Déclarer une AP</button>
              <button className="an-button">Annuler</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Recap;
