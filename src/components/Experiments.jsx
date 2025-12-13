import Section from "./Section";
import Card from "./Card";
import React from "react";

export default function Experiments() {
  return (
    <Section id="experiments" title="Technical Methods">
      <div className="card-grid">
        <Card title="Perception">
          <ul>
            <li>RGB camera-based color classification</li>
            <li>Distance sensor for precise grasp timing</li>
          </ul>
        </Card>

        <Card title="Control & Kinematics">
          <ul>
            <li>Joint-space control</li>
            <li>Forward kinematics verification</li>
            <li>Custom inverse kinematics</li>
          </ul>
        </Card>

        <Card title="Finite State Machine">
          <ul>
            <li>WAITING → ANALYZING → GRASPING</li>
            <li>ROTATING → RELEASING → RETURNING</li>
            <li>Safe timing & repeatability</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
