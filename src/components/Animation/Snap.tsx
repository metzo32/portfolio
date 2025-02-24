"use client"

import { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface SnapProps {
  children: ReactNode;
  delay?: number;
}

export default function Snap({ children }: SnapProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 100, y: 0 },
        }}
        initial="hidden"
        whileInView={"visible"}
        // viewport={{ margin: "-200px" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
