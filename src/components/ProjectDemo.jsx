import Section from "./Section";
import ReactPlayer from "react-player";
import React from "react";

import AnimatedSection from "./AnimatedSection";

export default function ProjectDemo() {
  return (
    <AnimatedSection id="demo">
      <h2 className="center">Live Demo</h2>

      <div className="video-container">
        <video controls>
          <source src="/videos/639.mp4" type="video/mp4" />
        </video>
      </div>

      <p className="subtle center">
        Real-time color-based pick-and-place using vision + FSM control.
      </p>
    </AnimatedSection>
  );
}
