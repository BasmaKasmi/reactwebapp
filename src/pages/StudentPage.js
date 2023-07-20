// Importation des modules nécessaires depuis 'react' et 'login'
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Student from '../components/student/Student';
// Déclaration du composant StudentPage
const StudentPage = () => {
  return (
    <div>
    {/* Affichage du composant Navbar */}
        <Navbar />
    {/* Affichage du composant Sidebar */}
        <Sidebar />
    {/* Affichage du composant Student */}
        <Student />
    </div>
  )
};

//Exportation du composant StudentPage
export default StudentPage;