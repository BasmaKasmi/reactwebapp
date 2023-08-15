// Importation des modules nécessaires
import React from 'react';
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar';
import Dashboard from '../components/dashboard/Dashboard';

// Déclaration du composant DashboardPage
const DashboardPage = () => {
  return (
    <div>
    {/* Affichage du composant Navbar */}
    <Navbar />
    {/* Affichage du composant Sidebar */}
    <Sidebar />
    {/* Affichage du composant Dashboard */}
    <Dashboard />
    </div>
);
};

//Exportation du composant DashboardPage
export default DashboardPage;