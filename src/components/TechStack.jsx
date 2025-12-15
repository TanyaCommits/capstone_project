import React from "react";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiCamera,
  FiGitMerge,
  FiActivity,
  FiMove,
  FiMonitor
} from "react-icons/fi";

const stack = [
  {
    title: "Simulation",
    icon: <FiCpu />,
    text: "Webots simulator with UR5e and Robotiq 3-Finger Gripper"
  },
  {
    title: "Perception",
    icon: <FiCamera />,
    text: "RGB camera for color detection, distance sensor for timing"
  },
  {
    title: "Control (FSM)",
    icon: <FiGitMerge />,
    text: "Finite State Machine coordinating sensing, grasping, placement"
  },
  {
    title: "Kinematics",
    icon: <FiActivity />,
    text: "Joint-space reasoning with forward/inverse kinematics"
  },
  {
    title: "Motion",
    icon: <FiMove />,
    text: "Trajectory execution via Webots motor & sensor APIs"
  },
  {
    title: "Frontend",
    icon: <FiMonitor />,
    text: "React + Framer Motion for interactive visualization"
  }
];

export default function TechStack() {
  return (
    <motion.section
      id="tech"
      className="tech-pipeline"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="tech-title">System Architecture</h2>

      <div className="pipeline">
        {stack.map((item, i) => (
          <motion.div
            key={i}
            className="pipeline-step"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <div className="pipeline-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>

            {/* Arrow except for last item */}
            {i < stack.length - 1 && <div className="pipeline-arrow">→</div>}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
