import Link from "next/link";
import type { Locale } from "@/lib/dictionaries";
import type { Dictionary } from "@/lib/dictionaries/types";
import { siteConfig } from "@/lib/config";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const links = [
    { href: `/${locale}/public-translation`, label: dict.nav.publicTranslation },
    { href: `/${locale}/localization`, label: dict.nav.localization },
    { href: `/${locale}/portfolio`, label: dict.nav.portfolio },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/blog`, label: dict.nav.blog },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-border dark:border-border-dark">
      <div className="container-wide grid gap-10 py-9t tablet:grid-cols-3">
        <div>
          <p className="font-display text-display-s text-ink dark:text-ink-dark">Lucía Reser</p>
          <p className="mt-2t text-body-s text-ink-muted dark:text-ink-muted-dark">
            {siteConfig.registration}
          </p>
        </div>
        <div>
          <p className="label text-label text-ink-muted dark:text-ink-muted-dark">{dict.footer.navHeading}</p>
          <ul className="mt-3t flex flex-col gap-2t">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-body-s underline-draw text-ink dark:text-ink-dark">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label text-label text-ink-muted dark:text-ink-muted-dark">{dict.footer.contactHeading}</p>
          <ul className="mt-3t flex flex-col gap-2t">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="text-body-s underline-draw text-ink dark:text-ink-dark">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-s underline-draw text-ink dark:text-ink-dark"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-wide flex flex-col items-start justify-between gap-3 border-t border-border py-6t text-body-s text-ink-muted dark:border-border-dark dark:text-ink-muted-dark tablet:flex-row tablet:items-center">
        <p className="font-display text-display-s italic text-ink dark:text-ink-dark">{dict.footer.tagline}</p>
        <p>
          © {new Date().getFullYear()} Lucía Reser. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
