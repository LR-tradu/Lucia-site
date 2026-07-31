"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function CaseCard({
  category,
  title,
  context,
  approach,
  outcome,
  reverse = false,
}: {
  category: string;
  title: string;
  context: string;
  approach: string;
  outcome: string;
  reverse?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`group grid gap-8 rounded-m desktop:grid-cols-2 desktop:items-center desktop:gap-12 ${
        reverse ? "desktop:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="overflow-hidden rounded-m">
        <div className="transition-transform duration-slow ease-standard group-hover:scale-105">
          <ImagePlaceholder label={`${title} — supporting image`} ratio="landscape" />
        </div>
      </div>
      <div>
        <span className="label text-label uppercase tracking-wide text-accent dark:text-accent-dark">
          {category}
        </span>
        <h3 className="mt-2t text-display-m text-ink dark:text-ink-dark">{title}</h3>
        <p className="mt-4t text-body-m text-ink-muted dark:text-ink-muted-dark">{context}</p>
        <p className="mt-3t text-body-m text-ink-muted dark:text-ink-muted-dark">{approach}</p>
        <p className="mt-3t text-body-m text-ink dark:text-ink-dark">{outcome}</p>
      </div>
    </motion.article>
  );
}
