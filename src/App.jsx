import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Motivation from "./components/Motivation";
import SystemSetup from "./components/SystemSetup";
import TechStack from "./components/TechStack";
import ProjectDemo from "./components/ProjectDemo";
import TechnicalSummary from "./components/TechnicalSummary";


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Motivation />
      <SystemSetup />
      <TechStack />
      <ProjectDemo />
      <TechnicalSummary />
    </>
  );
}
