"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Wraps a label (e.g. "Photography", "Healthcare") and reveals a small
 * floating card with an icon/illustration when hovered — the "playful but
 * elegant" interaction from the brief. Disabled on touch devices (no hover),
 * where the label works as plain text instead.
 */
export function HoverReveal({
  children,
  icon,
  caption,
}: {
  children: ReactNode;
  icon: ReactNode;
  caption: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
    >
      <span className="underline decoration-dotted decoration-1 underline-offset-4 decoration-ink-muted dark:decoration-ink-muted-dark cursor-default">
        {children}
      </span>
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="pointer-events-none absolute -top-28 left-1/2 z-20 flex w-24 -translate-x-1/2 flex-col items-center gap-1 rounded-m border border-border bg-surface p-3 shadow-hover-s dark:border-border-dark dark:bg-base-dark"
          >
            <span className="h-10 w-10 text-accent dark:text-accent-dark">{icon}</span>
            <span className="text-center text-[11px] leading-tight text-ink-muted dark:text-ink-muted-dark">
              {caption}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
