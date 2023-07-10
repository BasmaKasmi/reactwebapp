// Importation des modules nécessaires depuis 'react-router-dom' et 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
// Importation du fichier CSS
import './App.css';
// Importation de la page LoginPage
import LoginPage from "./pages/LoginPage";
import DashboardPage from './pages/DashboardPage';
import MesemargementsPage from './pages/MesemargementsPage';
import PasswordPage from './pages/PasswordPage';
import NewPasswordPage from './pages/NewPasswordPage';
import EmNavigation1 from './pages/EmNavigation1';

// Définir la fonction App
function App() {
    return (
      // 'container' principal de l'application
      <div className="container">
      {/* Initialisation du BrowserRouter */}
        <BrowserRouter>
        {/* Déclaration des routes */}
        <Routes>
        {/* Définition de la route par défaut qui affiche la page LoginPage*/}
        <Route index element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/émargements' element={<MesemargementsPage/>} />
        <Route path='/password' element={<PasswordPage/>} />
        <Route path='/newpassword' element={<NewPasswordPage/>} />
        <Route path='/emnavigation1' element={<EmNavigation1/>} />
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
 // Exportation de la fonction App comme composant principal de l'application
  export default App;