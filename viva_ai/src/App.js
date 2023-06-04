import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

// components
// import Onboarding from "./components/Onboarding";
import RegisterOne from "./components/RegisterOne";
import { NavbarViva } from './components/NavbarViva';
import Footer from './components/Footer';

// pages
import Home from './pages/Home/Home';
import Onboarding from './pages/Onboarding/Onboarding';
import Pricing from './pages/Planos/Pricing';

// Constants
const stages = [
  { id: 1, name: "onboarding" },
  { id: 2, name: "form_1" },
  { id: 3, name: "form_2" },
];

// Funcions
function App() {
  // Properties
  const [vivaStage, setVivaStage] = useState(stages[0].name);

  const startForm = () => {
    setVivaStage(stages[1].name);
  };
  
  const startOnboarding = () => {
    setVivaStage(stages[0].name); 
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarViva />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Onboarding" element={<Onboarding />} />
        </Routes>
        <Footer />
        {/* {vivaStage === "onboarding" && (
        <Onboarding startForm={startForm} startOnboarding={startOnboarding}/>
        )}
        {vivaStage === "form_1" && (
        <RegisterOne startOnboarding={startOnboarding}/>
        )}  */}
      </BrowserRouter>
    </div> 
  );
}

export default App;
