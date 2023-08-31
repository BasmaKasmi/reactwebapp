import React from 'react'; // Importation de la bibliothèque React
import cldr from '../../assets/calendar.svg'; // Importation de l'image du calendrier depuis les ressources
import st from '../../assets/student.svg'; // Importation de l'image de l'étudiant depuis les ressources
import { Link } from 'react-router-dom'; // Importation du composant de navigation Link depuis react-router-dom
import './CardDetails.css'; // Importation des styles CSS spécifiques pour ce composant

// Définition du composant fonctionnel CardDetails
const CardDetails = () => {
  return (
    <div className='Details'>  {/* Balise principale avec la classe CSS 'Details' */}
     {/* Balise div avec la classe CSS 'agenda-row' */}
      <div className="agenda-row">
      {/* Image du calendrier, la source est l'image importée */}
        <img src={cldr} alt='' />
        {/* Titre de niveau 3 indiquant de choisir des dates */}
        <h3>Choisir dates :</h3>
      </div>
      {/* Balise div avec la classe CSS 'date-inputs' */}
      <div className="da-inputs">
        {/* Champ de saisie de texte pour la première date */}
        <input type="text" placeholder="01/01/2023" />
        {/* Champ de saisie de texte pour la deuxième date */}
        <input type="text" placeholder="28/01/2023" />
        {/* Image de l'étudiant, la source est l'image importée */}
        <img src={st} alt='' />
      </div>
      <div className='c-em'>
      <h2>
        Mes dates :
      </h2>
      <div className='cart-cont'>
      {/* Composant de navigation Link avec une classe CSS 'c' */}
      <Link to="/recapem">
      <div className="cart">
      <div className='ligne'>
      {/* Titre de niveau 3 indiquant la semaine 3 */}
      <h3>Semaine 1</h3>
        {/* p indiquant que l'émargement de la semaine 3 n'est pas fait */}
        <p className="status-n">NON FAIT</p>
      </div>
      </div> 
      </Link>
      <Link to="/recapem">
      <div className="cart">
      <div className='ligne'>
      {/* Titre de niveau 3 indiquant la semaine 3 */}
      <h3>Semaine 2</h3>
        {/* p indiquant que l'émargement de la semaine 3 n'est pas fait */}
        <p className="status-f">FAIT</p>
      </div>
      </div> 
      </Link>
      <Link to="/recapem">
      <div className="cart">
      <div className='ligne'>
      {/* Titre de niveau 3 indiquant la semaine 3 */}
      <h3>Semaine 3</h3>
        {/* p indiquant que l'émargement de la semaine 3 n'est pas fait */}
        <p className="status-f">FAIT</p>
      </div>
      </div> 
      </Link>
      <Link to="/recapem">
      <div className="cart">
      <div className='ligne'>
      {/* Titre de niveau 3 indiquant la semaine 3 */}
      <h3>Semaine 4</h3>
        {/* p indiquant que l'émargement de la semaine 3 n'est pas fait */}
        <p className="status-n"> NON FAIT</p>
      </div>
      </div> 
      </Link>
      <Link to="/recapem">
      <div className="cart">
      <div className='ligne'>
      {/* Titre de niveau 3 indiquant la semaine 3 */}
      <h3>Semaine 5</h3>
        {/* p indiquant que l'émargement de la semaine 3 n'est pas fait */}
        <p className="status-f">FAIT</p>
      </div>
      </div> 
      </Link>
      <Link to="/recapem">
      <div className="cart">
      <div className='ligne'>
      {/* Titre de niveau 3 indiquant la semaine 3 */}
      <h3>Semaine 6</h3>
        {/* p indiquant que l'émargement de la semaine 3 n'est pas fait */}
        <p className="status-f">FAIT</p>
      </div>
      </div> 
      </Link>
      <Link to="/recapem">
      <div className="cart">
      <div className='ligne'>
      {/* Titre de niveau 3 indiquant la semaine 3 */}
      <h3>Semaine 7</h3>
        {/* p indiquant que l'émargement de la semaine 3 n'est pas fait */}
        <p className="status-n"> NON FAIT</p>
      </div>
      </div> 
      </Link>
      <Link to="/recapem">
      <div className="cart">
      <div className='ligne'>
      {/* Titre de niveau 3 indiquant la semaine 3 */}
      <h3>Semaine 8</h3>
        {/* p indiquant que l'émargement de la semaine 3 n'est pas fait */}
        <p className="status-n"> NON FAIT</p>
      </div>
      </div> 
      </Link>
      <Link to="/recapem">
      <div className="cart">
      <div className='ligne'>
      {/* Titre de niveau 3 indiquant la semaine 3 */}
      <h3>Semaine 9</h3>
        {/* p indiquant que l'émargement de la semaine 3 n'est pas fait */}
        <p className="status-f">FAIT</p>
      </div>
      </div> 
      </Link>
      <Link to="/recapem">
      <div className="cart">
      <div className='ligne'>
      {/* Titre de niveau 3 indiquant la semaine 3 */}
      <h3>Semaine 10</h3>
        {/* p indiquant que l'émargement de la semaine 3 n'est pas fait */}
        <p className="status-f">FAIT</p>
      </div>
      </div> 
      </Link>
      </div>
      </div>
    </div>
  );
};


// Exportation du composant CardDetails
export default CardDetails; 