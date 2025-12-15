import React from "react";
import { motion } from "framer-motion";
import { FiCpu, FiLayers, FiEye, FiSettings } from "react-icons/fi";

export default function SystemSetup() {
  const items = [
    {
      icon: <FiCpu />,
      title: "Robot",
      text:
        "UR5e 6-DOF manipulator simulated in Webots, equipped with a Robotiq 3-Finger Gripper mounted via the tool slot.",
    },
    {
      icon: <FiLayers />,
      title: "Environment",
      text:
        "A conveyor belt continuously delivers colored blocks to the pickup region, with three spatially separated crates used as sorting targets.",
    },
    {
      icon: <FiEye />,
      title: "Sensors",
      text:
        "An RGB camera provides color perception, while a distance sensor enables precise timing for grasp initiation.",
    },
    {
      icon: <FiSettings />,
      title: "Control",
      text:
        "Joint-space control using Webots motor and position sensor APIs, coordinated through a finite state machine (FSM).",
    },
  ];

  return (
    <motion.section
      id="setup"
      className="system-setup"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="system-title">System Setup</h2>


      <div className="system-card-grid">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="system-card"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="system-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
