import React from "react";

// styles
import "./Onboarding.css";

function clickMe() {
    alert("You clicked me!");
}

const Onboarding = () => {
  return (
    <div className="formOnboarding">
      <h1>viva.ai</h1>
      <p>Boas vindas ao seu</p>
      <p>Onde a IA encontra a saúde mental - para uma mente e corpo mais saudáveis.</p>
      <div>
        <button onClick={clickMe}>Voltar</button>
        <button onClick={clickMe}>Iniciar</button>
      </div>
    </div>
  );
};

export default Onboarding;