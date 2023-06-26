// Importation des modules nécessaires depuis 'react' et 'login'
import React from 'react';
import Login from '../components/login/Login';

// Déclaration du composant LoginPage
const LoginPage = () => {
  return (
    <div>
    {/* Affichage du composant Login */}
        <Login />
    </div>
  )
};

//Exportation du composant LoginPage
export default LoginPage;