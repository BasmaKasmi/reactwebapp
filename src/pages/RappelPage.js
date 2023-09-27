// Importation des modules nécessaires
import React from 'react';
import NavEmarg from '../components/navEm/NavEmarg';
import RetourButton from '../components/retourbutton/RetourButton';
import Rappel from '../components/rappel/Rappel';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Student from '../components/student/Student';

// Déclaration du composant RappelPage
const RappelPage = () => {
  return (
    <div>
      <div className="nav-emarg-container">
      {/* Affichage du composant NavEmarg */}
        <NavEmarg />
        {/* Affichage du composant RetourButton */}
        <RetourButton />
        {/* Affichage du composant Rappel */}
        <Rappel />
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
        <div className="column" style={{ flexBasis: '75%', margin:'10px', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.12)'  }}>
          <Student />
        </div>
      </div>
      </div>
     </div>
  )
}

//Exportation du composant RappelPage
export default RappelPage;