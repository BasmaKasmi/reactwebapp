// Importation des modules nécessaires
import React, { useState } from 'react';
import RetourButton from '../components/retourbutton/RetourButton';
import CardDetails from '../components/carddetails/CardDetails';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import NavEmarg from '../components/navEm/NavEmarg';
import DashEmarg from '../components/dashemargements/DashEmarg';
import EmargementsColumn from '../components/emargementscolumn/EmargementsColumn';

// Déclaration du composant RecapEmPage
const CarddetailsPage = () => {
    const [selectedCard, setSelectedCard] = useState({ title: '', date: '' });

    const handleCardClick = (title, date) => {
      setSelectedCard({ title, date });
    };
    
  return (
    <div>
      <div className="nav-emarg-container">
      {/* Affichage du composant NavEmarg */}
        <NavEmarg/>
        {/* Affichage du composant RetourButton */}
        <RetourButton />
        {/* Affichage du composant Em */}
        <CardDetails />
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
          <DashEmarg onCardClick={handleCardClick} />
        </div>
        {selectedCard.title && <div className="column" style={{ flexBasis: '50%', margin:'10px', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.12)'}}>
           <EmargementsColumn selectedCard={selectedCard} />  
        </div>} 
      </div>
      </div>
     </div>
  )
}

//Exportation du composant RecapEmPage
export default CarddetailsPage;