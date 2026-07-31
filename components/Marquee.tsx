"use client";

import { useReducedMotion } from "framer-motion";

export function Marquee({ items }: { items: string[] }) {
  const reduceMotion = useReducedMotion();
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-2t border-y border-border dark:border-border-dark">
      <div
        className={reduceMotion ? "flex flex-wrap gap-8" : "flex w-max gap-12 animate-marquee"}
      >
        {(reduceMotion ? items : doubled).map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap label text-label text-ink-muted dark:text-ink-muted-dark"
          >
            {item}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
      `}</style>
    </div>
  );
}
