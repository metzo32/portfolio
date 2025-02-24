import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface MotionProps {
  children: ReactNode;
  trigger: boolean;
  delay?: number;
}

export default function MotionAtOnce({ children, trigger, delay }: MotionProps) {
  const ref = useRef(null);
  const mainControls = useAnimation();

  useEffect(() => {
    if (trigger) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [trigger]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
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
