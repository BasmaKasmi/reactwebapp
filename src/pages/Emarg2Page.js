// Importation des modules nécessaires
import React, { useState, useEffect} from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import './MesemargementsPage.css'
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import RetourButton from '../components/retourbutton/RetourButton';
import NavEmarg from '../components/navEm/NavEmarg';
import RecapEm from '../components/recapem/RecapEm';
import DashEmarg from '../components/dashemargements/DashEmarg';
import Emarg2 from '../components/emarg2/Emarg2';
// Déclaration du composant GroupesPage
const Emarg2Page = () => {
  const { title, date } = useParams();
  const [selectedCard, setSelectedCard] = useState({ title: '', date: '' });

  const handleCardClick = (title, date) => {
    setSelectedCard({ title, date });
  };
  
  return (
    <div>
      <div className="nav-emarg-container">
      {/* Affichage du composant NavGrp */}
        <NavEmarg />
        {/* Affichage du composant RetourButton */}
        <RetourButton />
        {/* Affichage du composant Groupes */}
        <RecapEm />
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
        <div className="column" style={{ flexBasis: '50%', margin:'10px', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.12)'}}>
          <Routes>
              <Route path="/emarg2/:title/:date" element={<Emarg2 selectedCard={selectedCard} />} />
          </Routes>
        </div>
      </div>
      </div>
    </div>
  );
};

//Exportation du composant GroupesPage
export default Emarg2Page;
