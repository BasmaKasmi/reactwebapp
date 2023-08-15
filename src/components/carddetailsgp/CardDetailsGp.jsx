import React from 'react'; // Importation du module React
import cldr from '../../assets/calendar.svg'; // Importation de l'icône de calendrier depuis les assets
import st from '../../assets/student.svg'; // Importation de l'icône d'étudiant depuis les assets
import { Link } from 'react-router-dom'; // Importation du composant Link pour la navigation
import './CardDetailsGp.css'; // Importation du fichier CSS pour les styles du composant
 
const CardDetails = () => { // Définition du composant fonctionnel CardDetails
  return (
    <div className='Details'> {/* Div principale avec la classe 'Details' */}
    {/* Div pour la ligne "Choisir dates :" */}
      <div className="agenda-row">
      {/* Affichage de l'icône de calendrier */}
        <img src={cldr} alt='' />
        {/* Titre "Choisir dates :" */}
        <h3>Choisir dates :</h3>
      </div>
      {/* Div pour les champs de saisie de date */}
      <div className="date-inputs">
        {/* Champ de saisie de date début */}
        <input type="text" placeholder="01/01/2023" />
        {/* Champ de saisie de date fin */}
        <input type="text" placeholder="28/01/2023" />
        {/* Affichage de l'icône d'étudiant */}
        <img src={st} alt='' />
      </div>
      {/* Lien de navigation vers "/recapgp" avec la classe 'c' */}
      <Link to="/recapgp" className="c">
      {/* Div pour une ligne d'informations */}
        <div className='row'>
        {/* Titre "semaine 1" */}
          <h3>semaine 1</h3>
           {/* Indication de statut "FAIT" */}
          <span className="status-f">FAIT</span>
        </div>
      </Link>
      {/* Lien de navigation vers "/recapgp" avec la classe 'c' */}
      <Link to="/recapgp" className="c"> 
       {/* Div pour une autre ligne d'informations */}
        <div className='row'> 
          {/* Titre "semaine 2" */} 
          <h3>semaine 2</h3> 
          {/* Indication de statut "FAIT" */}
          <span className="status-f">FAIT</span> 
        </div>
      </Link>
      {/* Lien de navigation vers "/recapgp" avec la classe 'c' */}
      <Link to="/recapgp" className="c">
      {/* Div pour une autre ligne d'informations */}
        <div className='row'>
        {/* Titre "semaine 3" */}
          <h3>semaine 3</h3>
          {/* Indication de statut "NON FAIT" */}
          <span className="status-n">NON FAIT</span>
        </div>
      </Link>
    </div>
  );
};

export default CardDetails; // Exportation du composant CardDetails