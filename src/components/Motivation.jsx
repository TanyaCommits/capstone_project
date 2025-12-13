import React from "react";
import AnimatedSection from "./AnimatedSection";

import { motion } from "framer-motion";

export default function Motivation() {
  return (
    <motion.section
      id="motivation"
      className="motivation"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="motivation-content">
        <h2>Why Color-Based Sorting?</h2>

        <p>
          Color-based sorting is a foundational robotics task that appears in
          manufacturing quality control, recycling systems, and logistics.
        </p>

        <p>
          It requires tightly integrating perception, state-based decision
          making, motion control, and timing under real-world constraints.
        </p>

        <p>
          This project serves as a compact benchmark for autonomous
          manipulation systems operating in dynamic environments.
        </p>
      </div>
    </motion.section>
  );
}
