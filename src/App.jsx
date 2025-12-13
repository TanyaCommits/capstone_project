import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Motivation from "./components/Motivation";
import SystemSetup from "./components/SystemSetup";
import ProjectDemo from "./components/ProjectDemo";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="scroll-container">
        <section id="hero" className="snap-section">
          <Hero />
        </section>

        <section id="motivation" className="snap-section">
          <Motivation />
        </section>

        <section id="setup" className="snap-section">
          <SystemSetup />
        </section>

        <section id="demo" className="snap-section">
          <ProjectDemo />
        </section>
      </main>
    </>
  );
}
