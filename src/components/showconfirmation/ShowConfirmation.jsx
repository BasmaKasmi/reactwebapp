import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ShowConfirmation.css';
import status from '../../assets/statusup.svg';
import DeclareAp from '../declareap/DeclareAp';


const ShowConfirmation = () => {
    const[declareAp, setdeclareAp] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [isValidationDone, setIsValidationDone] = useState(false);
    const navigate = useNavigate(); // Utilisation le hook useNavigate de React Router
    const handleDeclareAp = () => {
        setdeclareAp(true)
      }
  const handleOverlayClick = () => {
    setShowConfirmation(false);
    document.body.classList.remove('modal-open');
  };
  const handleConfirmationClick = () => {
    setShowConfirmation(true);
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
                        <h3>Absences prévues le :</h3>
                        <div className="confirmation-details">
                            <p>14/01/2023</p>
                            <p>21/01/2023</p>
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

export default ShowConfirmation;
