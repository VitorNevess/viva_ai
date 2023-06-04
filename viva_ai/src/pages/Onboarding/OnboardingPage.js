import React from 'react'
import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// CSS
import styles from "./OnboardingPage.module.css";

// Componentes
import Onboarding from '../../components/Onboarding';
import RegisterOne from "../../components/RegisterOne";

import { useStatePage } from "../../hooks/useStatePage";


const OnboardingPage = () => {
  // Properties
  const { vivaStage, startForm, useGoToHome } = useStatePage();

  // Component
  return (
    <div>
      {vivaStage === "onboarding" && (
        <Onboarding startForm={startForm} goToHome={useGoToHome}/>
        )}
      {vivaStage === "form_1" && (
      <RegisterOne startOnboarding={startForm}/>
      )} 
    </div>
  )
}

export default OnboardingPage