// Importation des modules nécessaires depuis 'react-router-dom' et 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
// Importation du fichier CSS
import './App.css';
// Importation des composants nécessaires
import LoginPage from "./pages/LoginPage";
import DashboardPage from './pages/DashboardPage';
import MesemargementsPage from './pages/MesemargementsPage';
import PasswordPage from './pages/PasswordPage';
import NewPasswordPage from './pages/NewPasswordPage';
import EmNavigation1 from './pages/EmNavigation1';
import RecapPage from './pages/RecapPage';
import GroupesPage from './pages/GroupesPage';
import GrpNavigation1 from './pages/GrpNavigation1';
import RecapGpPage from './pages/RecapGpPage';
import StudentPage from './pages/StudentPage';
import AgendaPage from './pages/AgendaPage';
import RappelPage from './pages/RappelPage';
import RecapPopupPage from './pages/RecapPopupPage';

// Définir la fonction App
function App() {
    return (
      // 'container' principal de l'application
      <div className="container">
      {/* Initialisation du BrowserRouter */}
        <BrowserRouter>
        {/* Déclaration des routes */}
        <Routes>
        {/* Définition de les routes par défaut qui affiche les pages*/}
        <Route index element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/émargements' element={<MesemargementsPage/>} />
        <Route path='/password' element={<PasswordPage/>} />
        <Route path='/newpassword' element={<NewPasswordPage/>} />
        <Route path='/emnavigation1' element={<EmNavigation1/>} />
        <Route path='/grpnavigation1' element={<GrpNavigation1/>} />
        <Route path='/recap' element={<RecapPage/>} />
        <Route path='/rappel' element={<RappelPage/>} />
        <Route path='/recappopup' element={<RecapPopupPage/>} />
        <Route path='/recapgp' element={<RecapGpPage/>} />
        <Route path='/groupes' element={<GroupesPage/>} />
        <Route path='/nomdetudiant' element={<StudentPage/>} />
        <Route path='/agenda' element={<AgendaPage/>} />

        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
 // Exportation de la fonction App comme composant principal de l'application
  export default App;