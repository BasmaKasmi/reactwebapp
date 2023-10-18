// Importation des modules nécessaires
import React from 'react';
import './DashboardPage.css';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Dashboard from '../components/dashboard/Dashboard';
import DashEnf from '../components/dashenf/DashEnf';
import DashEm from '../components/DashEm/DashEm';
import DashAgenda from '../components/dashagemda/DashAgenda';

// Déclaration du composant StudentPage
const DashboardPage = () => {
  return (
    <div>
      <div className="nav-emarg-container">
        <Navbar />
        <Dashboard />
      </div>
      <div className="desktop-container">
      {/* Affichage du composant Navbar */}
      <div className="full-row" >
      <Navbar />
      </div>
      <div className="page-content">
              <div className="column">
                  <Sidebar />
              </div>
              <div className="three-columns">
                  <div className="column">
                      <DashEnf />
                  </div>

                  <div className="column">
                      <DashEm />
                  </div>
                  <div className="column">
                      <DashAgenda />
                  </div>
              </div>
      </div>
     </div>
     </div>
  )
}

export default DashboardPage;