import React from "react";
// import background_1 from "./background-1.png";

const BackgroundOnboarding = () => {
    const myStyle={
        backgroundImage: `url(${process.env.PUBLIC_URL+ "/background-1.png"})`,//TODO: Mudar para pasta privada
        height:'100vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
    <div style={myStyle}>
    </div>
    );
};

export default BackgroundOnboarding;