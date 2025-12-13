import React from "react";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="hero-content">
        <h1>Vision-Based Color Sorting with a UR5e</h1>
        <p>
          Real-time perception, FSM control, and autonomous manipulation
        </p>
      </div>
    </motion.section>
  );
}
