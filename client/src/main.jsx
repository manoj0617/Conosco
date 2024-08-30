import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import LandingPage from './LandingPage.jsx';
import './index.css'; // Ensure this path is correct

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add other routes here */}
          <Route path="*" element={<App />} /> {/* Fallback route */}
        </Routes>
      </Router>
    </StrictMode>
  );
}
