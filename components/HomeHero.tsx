"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";

export function HomeHero({
  kicker,
  headline,
  sub,
  ctaPrimary,
  ctaSecondary,
  ctaPrimaryHref,
  ctaSecondaryHref,
}: {
  kicker: string;
  headline: string;
  sub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
}) {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="label text-label uppercase tracking-wide text-accent dark:text-accent-dark"
      >
        {kicker}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3t max-w-xl text-display-xl text-ink dark:text-ink-dark"
      >
        {headline}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5t max-w-md text-body-l text-ink-muted dark:text-ink-muted-dark"
      >
        {sub}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-7t flex flex-col gap-4 tablet:flex-row"
      >
        <Button href={ctaPrimaryHref} variant="primary">
          {ctaPrimary}
        </Button>
        <Button href={ctaSecondaryHref} variant="secondary">
          {ctaSecondary}
        </Button>
      </motion.div>
    </div>
  );
}
