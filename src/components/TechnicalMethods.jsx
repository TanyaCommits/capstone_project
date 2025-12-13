import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function TechnicalMethods() {
    return (
      <section className="section">
        <h2>Technical Methods</h2>
  
        <div className="grid">
          <div className="card">
            <h3>Perception</h3>
            <ul>
              <li>RGB color averaging over image center</li>
              <li>Distance-based trigger for grasp timing</li>
            </ul>
          </div>
  
          <div className="card">
            <h3>Control & Kinematics</h3>
            <ul>
              <li>Joint-space control via Webots motors</li>
              <li>Forward kinematics to verify end-effector pose</li>
              <li>Custom inverse kinematics for pick-and-place</li>
              <li>Smooth joint interpolation for stable grasps</li>
            </ul>
          </div>
  
          <div className="card">
            <h3>FSM Logic</h3>
            <ul>
              <li>WAITING → ANALYZING → GRASPING</li>
              <li>ROTATING → RELEASING → RETURNING</li>
              <li>Enables clean timing + debugging</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  