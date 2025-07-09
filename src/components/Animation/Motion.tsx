"use client"

import { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface MotionProps {
  children: ReactNode;
  delay?: number;
}

export default function Motion({ children, delay = 0 }: MotionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView]);

  return (
    <div ref={ref} className="w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 90, },
          visible: { opacity: 100, y: 0,},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
