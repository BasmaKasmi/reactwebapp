import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ShowValidation.css';
import status from '../../assets/statusup.svg';
import DeclareAp from '../declareap/DeclareAp';


const ShowValidation = () => {
    const[declareAp, setdeclareAp] = useState(false);
    const [showValidation, setshowValidation] = useState(false);
    const [isValidationDone, setIsValidationDone] = useState(false);
    const navigate = useNavigate(); // Utilisation le hook useNavigate de React Router
    const handleDeclareAp = () => {
        setdeclareAp(true)
      }
  const handleOverlayClick = () => {
    setshowValidation(false);
    document.body.classList.remove('modal-open');
  };
  const handleConfirmationClick = () => {
    setshowValidation(true);
    setIsValidationDone(true);

  navigate('/dashboard');
  };

  return (
    <div>
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="confirmation-card">
            <div className="icon-container">
              <i className="fas fa-check-circle"></i>
            </div>
          <div className="confirmation-content">
            <h3>Vous avez déclarez avoir :</h3>
            <div className="confirmation-details">
              <p> 17 présents </p>
              <p> 5 Absents </p>
            </div>
            <div className="confirmation-buttons">
              <button className="valider-button" onClick={handleConfirmationClick}>Valider</button>
              <button className="annuler-button">Annuler</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ShowValidation;
