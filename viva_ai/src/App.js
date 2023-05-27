import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from "react";

import Onboarding from "./components/Onboarding";
import RegisterOne from "./components/RegisterOne";

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
      {vivaStage === "onboarding" && (
      <Onboarding startForm={startForm} startOnboarding={startOnboarding}/>
      )}
     {vivaStage === "form_1" && (
      <RegisterOne startOnboarding={startOnboarding}/>
      )} 
    </div> 
  );
}

export default App;
