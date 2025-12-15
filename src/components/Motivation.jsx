import React from "react";
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
          This task mirrors real-world automation problems such as sorting
          luggage on airport conveyor belts or separating parts on factory
          lines.
        </p>

        <p>
          Objects arrive continuously, decisions must be made quickly, and
          delays can lead to missed picks or incorrect placement.
        </p>

        <p>
          The robot must recognize each object, time its grasp precisely, and
          place it in the correct location — all without stopping the system.
          This makes color-based sorting a compact but powerful testbed for
          autonomous robotic manipulation in dynamic environments.
        </p>
      </div>
    </motion.section>
  );
}
