// Importation des bibliothèques React et ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Importation du composant App depuis le fichier "./App"
import App from "./App";
// Importation du module de service worker pour l'enregistrement du service worker
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// Rendu du composant App dans le point d'entrée de l'application (élément avec l'ID "root")
ReactDOM.render(
  // Utilisation du mode strict de React pour des vérifications supplémentaires en développement
  <React.StrictMode>
   {/* Rendu du composant App */}
    <App />
  </React.StrictMode>,
  // Sélection de l'élément avec l'ID "root"
  document.getElementById("root")
);

// Enregistrement du service worker pour gérer les fonctionnalités hors connexion et la mise en cache
serviceWorkerRegistration.register();