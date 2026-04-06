"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxHeroImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  distance?: number;
}

export function ParallaxHeroImage({
  src,
  alt,
  className,
  priority = false,
  distance = 80,
}: ParallaxHeroImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={className ?? "object-cover object-top"}
          unoptimized
        />
      </motion.div>
    </div>
  );
}
