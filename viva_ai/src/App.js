import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

// components
import { NavbarViva } from './components/NavbarViva';
import Footer from './components/Footer';

// pages
import Home from './pages/Home/Home';
import OnboardingPage from './pages/Onboarding/OnboardingPage';
import Pricing from './pages/Planos/Pricing';

// Funcions
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarViva />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Onboarding" element={<OnboardingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div> 
  );
}

export default App;
