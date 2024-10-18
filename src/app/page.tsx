"use client";
import React, { useState } from "react";
import HeroSection from './components/HeroSection';
import CodingProfiles from './components/CodingProfiles';
import FooterSection from './components/FooterSection'; 
import ProjectSection from './components/ProjectSection'; 
import ResearchSection from './components/ResearchSection'; 
import "./globals.css";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", isDarkMode ? "light" : "dark");
  };

  return (
    <div className="w-full mx-auto md:max-w-xl lg:max-w-3xl my-11 px-10">
      {/* <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button> */}
      {/* <nav className="flex justify-between p-5">
        <h2 className="logo">Somesh Ghosh</h2>
      </nav> */}

      <HeroSection />
      <CodingProfiles />
      <ResearchSection />
      <ProjectSection />
      <FooterSection />
      
    </div>
  );
};

export default App;
