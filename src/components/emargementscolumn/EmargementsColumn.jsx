import React, { useState, useEffect } from 'react';
import classnames from 'classnames'; // importation de la bibliothèque 'classnames'
import { Link } from 'react-router-dom';
import cldr from '../../assets/calendar.svg'; 
import st from '../../assets/student.svg'; 
import './EmargementsColumn.css'; 
import Emarg2 from '../emarg2/Emarg2';

const EmargementsColumn = (props) => {
  
 
   // Utilisation de l'état local pour suivre l'état de la carte active
   const [activeCard, setActiveCard] = useState(null);
   const [emargementId, setEmargementId] = useState(null);
   const { selectedCard } = props;
 
 
   useEffect(() => {
     // Mettez à jour l'état local lorsque selectedCard dans les props change
     if (props.selectedCard) {
       setActiveCard(props.selectedCard.title); // Mettez à jour activeCard avec le titre
     }
   }, [props.selectedCard]);


  if (emargementId !== null) {
   return (
     <Emarg2
     emargementId={emargementId}
     setEmargementId={setEmargementId}
     activeCard={activeCard}
     />
   );
 }


  return (
    <div> 
      <div className='groupes-res'>
    {/* Affiche le titre "Mes groupes :" */}
    <div className='t'>
    <h3> Mes groupes :</h3>
    </div>
    {/* Crée un conteneur pour les cartes */}
    <div className='grp-carte'>
    {/* Crée un lien vers la page /grpnavigation1 */}
    <Link to='/emnavigation1'>
    {/* Crée une carte */}
    <div className="carte">
    {/* Affiche le titre de la carte */}
      <h3>Sciences islamiques 1ére année</h3>
        <div>
          {/* Affiche l'horaire */}
          <p className='carte-day'>Jeu 18h00 à 12h00</p>
        </div>
    </div>
    </Link>
    {/* Crée un lien vers la page /grpnavigation1 */}
    <Link to='/emnavigation1'>
    {/* Crée une autre carte */}
    <div className="carte">
    {/* Affiche le titre de la carte */}
      <h3>Sciences islamiques 1ére année</h3>
        <div>
        {/* Affiche l'horaire */}
          <p className='carte-day'>Jeu 18h00 à 12h00</p>
        </div>
    </div>
    </Link>
    {/* Crée un lien vers la page /grpnavigation1 */}
    <Link to='/emnavigation1'>
    {/* Crée une autre carte */}
    <div className="carte">
      {/* Affiche le titre de la carte */}
      <h3>Sciences islamiques 1ére année</h3>
        <div>
          {/* Affiche l'horaire */}
          <p className='carte-day'>Jeu 18h00 à 12h00</p>
        </div>
    </div>
    </Link>
    </div>
    </div>

      <div className='groupe'>
        {/* Div pour l'en-tête de colonne */}
        <div className="column-head">
          {/* Affiche le titre sélectionné */}
          {activeCard && <h3>{activeCard}</h3>}
          {/* Affiche le jour sélectionné */}
          {selectedCard && <p className='day'>{selectedCard.date}</p>}
        </div>
        {/* Div pour la section de l'agenda */}
        <div className="agenda-info">
          {/* Affiche une image d'icône d'agenda */}
          <img src={cldr} alt=''/>
          {/* Affiche un texte "Choisir dates :" */}
          <span>Choisir dates :</span>
        </div>
        {/* Div pour les entrées de date */}
        <div className="d-inputs">
            {/* Champ de saisie pour la date de début */}
            <input type="text" placeholder="01/01/2023" />
            {/* Champ de saisie pour la date de fin */}
            <input type="text" placeholder="28/01/2023" />
            {/* Affiche une image l'icône */}
            <img src={st} alt=''/>
        </div> 
        {[
         {id : 'emargementId1', status: 'FAIT', date : '12/12/2022'},
         {id : 'emargementId2', status: 'NON FAIT', date: '10/12/2022'},
       ].map(({id, status, date}) => (
         <div key={id} className='c' onClick={() => setEmargementId(id)}>
           <div className='row'>
             <h3>Emargement : {date}</h3>
             <span className={status === 'FAIT' ? 'status-f' : 'status-n'}>
               {status}
             </span>
           </div>
         </div>
       )
       )
       }

      </div>
  
    </div>
  );
}

export default EmargementsColumn;