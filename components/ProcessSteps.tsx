"use client";

import { motion } from "framer-motion";

export function ProcessSteps({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <div className="relative">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="absolute left-0 right-0 top-[22px] hidden h-px origin-left bg-border dark:bg-border-dark desktop:block"
      />
      <div className="grid gap-8t desktop:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative"
          >
            <span className="relative z-10 mb-2t block bg-base font-display text-display-m text-accent dark:bg-base-dark dark:text-accent-dark">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-display-s text-ink dark:text-ink-dark">{step.title}</h3>
            <p className="mt-1t text-body-m text-ink-muted dark:text-ink-muted-dark">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
