import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa el componente principal de tu portafolio
import MainPortfolioContent from "./pages/MainPortfolioContent"; 
// Importa el componente de la política de privacidad
import PoliticaDePrivacidad from "./pages/PoliticaDePrivacidad"; 
import PrivacyPolicies from "./pages/PrivacyPolicies";


export default function App() { // Cambiado a App, ya que es el componente principal ahora
  return (
    <Router>
      <Routes>
        {/* La ruta principal  */}
        <Route path="/" element={<MainPortfolioContent />} />
        {/* La ruta para la política de datos */}
        <Route path="/politica-datos" element={<PoliticaDePrivacidad />} />
        <Route path="/privacy-policy" element={<PrivacyPolicies />} /> 
      </Routes>
    </Router>
  );
}