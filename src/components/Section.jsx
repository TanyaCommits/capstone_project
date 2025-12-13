import { motion } from "framer-motion";
import React from "react";

export default function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>{title}</h2>
      {children}
    </motion.section>
  );
}
