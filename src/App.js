import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import './App.css';
import LoginPage from "./pages/LoginPage";
import DashboardPage from './pages/DashboardPage';
import MesemargementsPage from './pages/MesemargementsPage';
import PasswordPage from './pages/PasswordPage';
import NewPasswordPage from './pages/NewPasswordPage';
import EmNavigation1 from './pages/EmNavigation1';
import RecapPage from './pages/RecapPage';
import GroupesPage from './pages/GroupesPage';
import RecapGpPage from './pages/RecapGpPage';
import StudentPage from './pages/StudentPage';
import AgendaPage from './pages/AgendaPage';
import RappelPage from './pages/RappelPage';
import RecapPopupPage from './pages/RecapPopupPage';
import RecapEmPage from './pages/RecapEmPage';
import Em from '../src/components/em/Em';

function App() {

    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route index element={<LoginPage />} />
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='/émargements' element={<MesemargementsPage />} />
                    <Route path='/password' element={<PasswordPage />} />
                    <Route path='/newpassword' element={<NewPasswordPage />} />
                    <Route path='/emnavigation1' element={<EmNavigation1 />} />
                    <Route path='/recap' element={<RecapPage />} />
                    <Route path='/rappel' element={<RappelPage />} />
                    <Route path='/recappopup' element={<RecapPopupPage />} />
                    <Route path='/recapgp' element={<RecapGpPage />} />
                    <Route path='/recapem' element={<RecapEmPage />} />
                    <Route path='/groupes' element={<GroupesPage />} />
                    <Route path='/nomdetudiant' element={<StudentPage />} />
                    <Route path='/agenda' element={<AgendaPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
