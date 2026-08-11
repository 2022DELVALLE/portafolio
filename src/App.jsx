import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import VenturePipeline from './components/VenturePipeline/VenturePipeline';
import VerLaEstrategia from './components/Verlaestrategia/Ver_la_estrategia';
import Portada from './components/VisualAI/visual_ai';
import FinancialCaseStudy from './components/FinancialCaseStudy/FinancialCaseStudy';
import FinancialModelViewer from './components/FinancialModelViewer/FinancialModelViewer';
import Certificates from './components/Certificates/Certificates';

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/ventures" element={<VenturePipeline />} />
          <Route path="/estrategia" element={<VerLaEstrategia />} />
          <Route path="/arquitectura" element={<VerLaEstrategia />} />
          <Route path="/visual-ia" element={<Portada />} />
          <Route path="/case-study" element={<FinancialCaseStudy />} />
          <Route path="/modelo-financiero" element={<FinancialModelViewer />} />
          <Route path="/certificados" element={<Certificates />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;