import { motion } from "framer-motion";
import React from "react";

export default function Card({ title, children }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      {children}
    </motion.div>
  );
}
