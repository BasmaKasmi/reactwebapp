import React from 'react';
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar';
import Dashboard from '../components/dashboard/Dashboard';

const DashboardPage = () => {
  return (
    <div>
    <Navbar />
    <Sidebar />
    <Dashboard />
    </div>
);
};

export default DashboardPage;