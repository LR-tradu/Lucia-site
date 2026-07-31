"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

/** Magnetic hover: the button nudges slightly toward the cursor within its bounds. */
export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setOffset({ x, y });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  const base = "inline-flex items-center gap-2 label text-label transition-colors duration-fast";
  const styles = {
    primary: "bg-accent text-base px-6 py-3 hover:bg-accent/90 dark:bg-accent-dark dark:text-base-dark dark:hover:bg-accent-dark/90",
    secondary: "border border-ink text-ink px-6 py-3 hover:bg-ink/5 dark:border-ink-dark dark:text-ink-dark dark:hover:bg-ink-dark/10",
    text: "text-ink underline-draw dark:text-ink-dark",
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.5 }}
      className="inline-block"
    >
      <Link href={href} className={clsx(base, styles[variant], className)}>
        {children}
        {variant === "text" && <span aria-hidden="true">→</span>}
      </Link>
    </motion.div>
  );
}
