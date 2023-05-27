import React from "react";

function clickMe() {
    alert("You clicked me!");
}

const RegisterOne = ({startOnboarding}) => {
  return (
    <div className="">
      <div>
        <button onClick={startOnboarding}>Voltar</button>
      </div>
    </div>
  );
};

export default RegisterOne;