"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/lib/dictionaries";
import type { Dictionary } from "@/lib/dictionaries/types";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleToggle } from "./LocaleToggle";

export function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setSolid(y > 60);
      setHidden(y > lastY && y > 200);
      setLastY(y);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const links = [
    { href: `/${locale}/public-translation`, label: dict.nav.publicTranslation },
    { href: `/${locale}/localization`, label: dict.nav.localization },
    { href: `/${locale}/portfolio`, label: dict.nav.portfolio },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/blog`, label: dict.nav.blog },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-standard ease-standard ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${solid ? "bg-base/95 shadow-nav backdrop-blur dark:bg-base-dark/95" : "bg-transparent"}`}
    >
      <div className="container-wide flex h-16 items-center justify-between desktop:h-20">
        <Link href={`/${locale}`} className="font-display text-lg text-ink dark:text-ink-dark">
          Lucía Reser
        </Link>

        <nav className="hidden items-center gap-8 desktop:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="label text-label text-ink/80 underline-draw dark:text-ink-dark/80"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/contact`}
            className="label text-label border border-ink px-4 py-2 text-ink transition-colors duration-fast hover:bg-ink/5 dark:border-ink-dark dark:text-ink-dark dark:hover:bg-ink-dark/10"
          >
            {dict.nav.contact}
          </Link>
          <div className="flex items-center gap-4 border-l border-border pl-4 dark:border-border-dark">
            <LocaleToggle locale={locale} />
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-3 desktop:hidden">
          <Link
            href={`/${locale}/contact`}
            className="label text-label border border-ink px-3 py-1.5 text-ink dark:border-ink-dark dark:text-ink-dark"
          >
            {dict.nav.contact}
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-px w-6 bg-ink transition-transform duration-fast dark:bg-ink-dark ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ink transition-transform duration-fast dark:bg-ink-dark ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 flex flex-col bg-base p-8 dark:bg-base-dark desktop:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-display-m text-ink dark:text-ink-dark"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex items-center justify-between border-t border-border pt-4 dark:border-border-dark">
              <LocaleToggle locale={locale} />
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
