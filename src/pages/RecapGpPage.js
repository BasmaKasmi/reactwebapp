// Importation des modules nécessaires
import React, { useState } from 'react';
import NavGrp from '../components/navGp/NavGrp';
import RetourButton from '../components/retourbutton/RetourButton';
import RecapGp from '../components/recapgp/RecapGp';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import ColonneGroupes from '../components/colonnegroupes/ColonneGroupes';
import ColonneGroupe2 from '../components/colonnegroupe2/ColonneGroupe2';

// Déclaration du composant RecapGpPage
const RecapGpPage = () => {
  const [selectedCard, setSelectedCard] = useState({ title: '', date: '' });

  const handleCardClick = (title, date) => {
    setSelectedCard({ title, date });
  };
  return (
    <div>
      <div className="nav-emarg-container">
      {/* Affichage du composant NavGrp */}
        <NavGrp />
        <RetourButton />
        <RecapGp />
      </div>
      <div className="desktop-container">
      {/* Affichage du composant Navbar */}
      <div className="full-row" style={{height:'100px'}}>
      <Navbar />
      </div>
      <div className="three-columns" style={{display: 'flex', padding: '10px', maxHeight: '50vh' }}>
        <div className="column" style={{ flexBasis: '25%', margin:'10px', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.12)'  }}>
        <Sidebar />
        </div>
        <div className="column" style={{ flexBasis: '25%', margin:'10px', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.12)'  }}>
        <ColonneGroupes onCardClick={handleCardClick} />
        </div>
        {selectedCard.title && <div className="column" style={{ flexBasis: '50%', margin:'10px',  opacity:'0 !important', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.12)'}}>
        <ColonneGroupe2 selectedCard={selectedCard} />   
        </div>}
      </div>
      </div>
     </div>
  )
}

//Exportation du composant RecapGpPage
export default RecapGpPage;