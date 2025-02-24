"use client"; 

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function MotionWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
