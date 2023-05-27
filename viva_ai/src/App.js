import logo from './logo.svg';
import './App.css';

import Onboarding from "./components/Onboarding";
import BackgroundOnboarding from "./components/BackgroundOnboarding";

function App() {
  return (
    <div className="App">
      <BackgroundOnboarding/>
      <Onboarding/>
    </div> 
  );
}

export default App;
