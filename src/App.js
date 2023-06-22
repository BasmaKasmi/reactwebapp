import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import './App.css';
import LoginPage from "./pages/LoginPage";

function App() {
    return (
      <div className="container">
        <BrowserRouter>
        <Routes>
        <Route index element={<LoginPage />} />
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;