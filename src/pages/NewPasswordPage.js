// Importation des modules nécessaires depuis 'react' et 'newpassword'
import React from 'react';
import NewPassword from '../components/newpassword/NewPassword';

// Déclaration du composant NewPasswordPage
const NewPasswordPage = () => {
  return (
    <div>
    {/* Affichage du composant NewPassword */}
    <NewPassword />
    </div>
);
};

//Exportation du composant NewPasswordPage
export default NewPasswordPage;