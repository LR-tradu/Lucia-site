"use client";

import { useState } from "react";
import { CaseCard } from "./CaseCard";

type Case = {
  category: string;
  title: string;
  context: string;
  approach: string;
  outcome: string;
};

export function PortfolioList({ filters, cases }: { filters: string[]; cases: Case[] }) {
  const [active, setActive] = useState(filters[0]);

  const filtered = active === filters[0] ? cases : cases.filter((c) => c.category === active);

  return (
    <div>
      <div className="mb-9t flex gap-3 overflow-x-auto pb-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={`label whitespace-nowrap px-4 py-2 text-label transition-colors duration-fast ${
              active === f
                ? "bg-ink text-base dark:bg-ink-dark dark:text-base-dark"
                : "text-ink-muted hover:text-ink dark:text-ink-muted-dark dark:hover:text-ink-dark"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-9t">
        {filtered.map((c, i) => (
          <CaseCard key={c.title} {...c} reverse={i % 2 === 1} />
        ))}
      </div>
    </div>
  );
}
