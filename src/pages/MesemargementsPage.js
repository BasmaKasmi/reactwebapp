import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Emargements from '../components/emargements/Emargements';
import NavEmarg from '../components/navEm/NavEmarg';
import './MesemargementsPage.css';
import RetourButton from '../components/retourbutton/RetourButton';

const MesemargementsPage = () => {
  return (
    <div>
      <div className="nav-emarg-container">
        <NavEmarg />
        <RetourButton />
        <Emargements />
      </div>
      <div className="desktop-container">
        <Navbar />
        <Sidebar />
        <Emargements />
      </div>
    </div>
  );
};

export default MesemargementsPage;
