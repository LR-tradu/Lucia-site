"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/dictionaries";
import { otherLocale } from "@/lib/dictionaries";

export function LocaleToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const next = otherLocale(locale);
  const rest = pathname.replace(`/${locale}`, "") || "/";
  const href = `/${next}${rest === "/" ? "" : rest}`;

  return (
    <Link
      href={href}
      onClick={() => {
        document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000`;
      }}
      className="label text-label uppercase tracking-wide text-ink/70 transition-colors duration-fast hover:text-accent dark:text-ink-dark/70 dark:hover:text-accent-dark"
      aria-label={`Switch to ${next === "en" ? "English" : "Español"}`}
    >
      {locale === "en" ? "ES" : "EN"}
    </Link>
  );
}
