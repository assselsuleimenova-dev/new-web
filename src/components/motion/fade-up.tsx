"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className,
  distance = 28,
}: FadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
