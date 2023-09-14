// Importation des modules nécessaires
import React from 'react';
import './MesemargementsPage.css'
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import RetourButton from '../components/retourbutton/RetourButton';
import Groupes from '../components/groupes/Groupes';
import NavGrp from '../components/navGp/NavGrp';
import RecapGp from '../components/recapgp/RecapGp';
import DashEmarg from '../components/dashemargements/DashEmarg';
import EmargementsColumn from '../components/emargementscolumn/EmargementsColumn';

// Déclaration du composant GroupesPage
const MesemargementsPage = () => {
  return (
    <div>
      <div className="nav-emarg-container">
      {/* Affichage du composant NavGrp */}
        <NavGrp />
        {/* Affichage du composant RetourButton */}
        <RetourButton />
        {/* Affichage du composant Groupes */}
        <Groupes />
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
          <DashEmarg />
        </div>
        <div className="column" style={{ flexBasis: '50%', margin:'10px', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.12)'}}>
          <EmargementsColumn />
        </div>
      </div>
      </div>
    </div>
  );
};

//Exportation du composant GroupesPage
export default MesemargementsPage;
