import { useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';

export const useStatePage = (index) => {
    // Constants
    const stages = [
    { id: 1, name: "onboarding" },
    { id: 2, name: "form_1" },
    { id: 3, name: "form_2" },
    ];

    // Properties
    const [vivaStage, setVivaStage] = useState(stages[0].name);
    const navigate = useNavigate(); 
    
    const startForm = () => {
        console.log("Onboarding");
        setVivaStage(stages[1].name);
    };

    function useGoToHome() {
        try {
            navigate("/");
        } catch (error) {
            navigate("/error", { state: { message: "Failed to submit form" } }); 
        }
        
        setVivaStage(stages[0].name)
    };

    return {vivaStage,
            startForm,
            useGoToHome};
};