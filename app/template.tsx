"use client";

import { motion } from "framer-motion";
import type React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      {children}
    </motion.main>
  );
}
