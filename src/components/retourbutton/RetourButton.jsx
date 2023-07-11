import React from 'react';
import { Link } from 'react-router-dom';
import './RetourButton.css';

const RetourButton = () => {
  return (
    <Link to='/dashboard' className="retour-button">Retour</Link>
  )
}

export default RetourButton;
