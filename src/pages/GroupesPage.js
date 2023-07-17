import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import RetourButton from '../components/retourbutton/RetourButton';
import Groupes from '../components/groupes/Groupes';
import NavGrp from '../components/navGp/NavGrp';

const GroupesPage = () => {
  return (
    <div>
      <div className="nav-emarg-container">
        <NavGrp />
        <RetourButton />
        <Groupes />
      </div>
      <div className="desktop-container">
        <Navbar />
        <Sidebar />
        <Groupes />
      </div>
    </div>
  );
};

export default GroupesPage;
