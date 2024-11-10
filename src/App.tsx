import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderLayout from './layouts/HeaderLayout';
import Acasa from './pages/Acasa';
import './App.css'

function App() {
  return (
    <Router>
      {/* Header-ul este afișat pe toate paginile */}
      <HeaderLayout />
      <Routes>
        <Route path="/acasa" element={<Acasa />} />
        <Route path="/" element={<Acasa />} />
      </Routes>
    </Router>
  );
}

export default App;
