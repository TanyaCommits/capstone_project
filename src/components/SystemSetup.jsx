import React from "react";
import AnimatedSection from "./AnimatedSection";

import { motion } from "framer-motion";

export default function SystemSetup() {
  return (
    <motion.section
      id="setup"
      className="system-setup"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="system-content">
        <h2>System Setup</h2>

        <div className="system-grid">
          <div>
            <h3>Robot</h3>
            <p>
              UR5e 6-DOF manipulator simulated in Webots, equipped with a
              Robotiq 3-Finger Gripper mounted via the tool slot.
            </p>
          </div>

          <div>
            <h3>Environment</h3>
            <p>
              Conveyor belt continuously delivers colored blocks to the pickup
              region, with three spatially separated crates used as sorting
              targets.
            </p>
          </div>

          <div>
            <h3>Sensors</h3>
            <p>
              An RGB camera provides color perception, while a distance sensor
              enables precise timing for grasp initiation.
            </p>
          </div>

          <div>
            <h3>Control</h3>
            <p>
              Joint-space control using Webots motor and position sensor APIs,
              coordinated through a finite state machine (FSM).
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
