"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function HeroPhoto({ label }: { label: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ scale: 1 }}
        animate={reduceMotion ? {} : { scale: 1.04 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
      >
        <ImagePlaceholder label={label} ratio="portrait" />
      </motion.div>
    </div>
  );
}
