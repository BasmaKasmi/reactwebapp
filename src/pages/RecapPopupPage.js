// Importation des modules nécessaires
import React from 'react';
import RetourButton from '../components/retourbutton/RetourButton';
import RecapPopup from '../components/recappopup/RecapPopup';
import NavSt from '../components/navst/NavSt';
import Sidebar from '../components/sidebar/Sidebar';
import DashEnf from '../components/dashenf/DashEnf';
import DashEm from '../components/DashEm/DashEm';
import DashAgenda from '../components/dashagemda/DashAgenda';
import Navbar from '../components/navbar/Navbar';

// Déclaration du composant RecapPopupPage
const RecapPopupPage = () => {
  return (
    <div>
    <div className="nav-emarg-container">
    <NavSt />
    <RetourButton />
    <RecapPopup />
    </div>
    <div className="desktop-container">
      {/* Affichage du composant Navbar */}
      <div className="full-row" style={{height:'100px'}}>
      <Navbar />
      </div>
      <div className="three-columns" style={{display: 'flex', padding: '10px', maxHeight: '50vh' }}>
        <div className="column" style={{ flexBasis: '25%', margin:'10px'  }}>
        <Sidebar />
        </div>
        <div className="column" style={{ flexBasis: '25%', margin:'10px'}}>
          <DashEnf />
        </div>
        
        <div className="column" style={{ flexBasis: '25%', margin:'10px'}}>
          <DashEm />
        </div>
        <div className="column" style={{ flexBasis: '25%', margin:'10px' }}>
          <DashAgenda />
        </div>
      </div>
      </div>
    </div>
  )
}

//Exportation du composant RecapPopupPage
export default RecapPopupPage;
