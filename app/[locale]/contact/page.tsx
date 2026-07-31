import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.contact.heroHeadline,
    description: dict.contact.responseNote,
    alternates: { canonical: `/${locale}/contact` },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const c = dict.contact;

  return (
    <section className="py-9t">
      <div className="container-wide">
        <Reveal className="max-w-2xl">
          <h1 className="text-display-l text-ink dark:text-ink-dark">{c.heroHeadline}</h1>
        </Reveal>

        <div className="mt-9t grid gap-12 desktop:grid-cols-2">
          <Reveal>
            <p className="text-body-l text-ink dark:text-ink-dark">{c.responseNote}</p>
            <div className="mt-6t flex flex-col gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="label flex items-center justify-between border border-ink px-5 py-4 text-label text-ink transition-colors duration-fast hover:bg-ink/5 dark:border-ink-dark dark:text-ink-dark dark:hover:bg-ink-dark/10"
              >
                {c.emailLabel}
                <span aria-hidden="true">{siteConfig.email}</span>
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="label flex items-center justify-between bg-accent px-5 py-4 text-label text-base transition-colors duration-fast hover:bg-accent/90 dark:bg-accent-dark dark:text-base-dark"
              >
                {c.whatsappLabel}
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className="mt-6t text-body-s text-ink-muted dark:text-ink-muted-dark">{c.timezoneNote}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-5t text-body-m text-ink-muted dark:text-ink-muted-dark">{c.formHeading}</p>
            <ContactForm fields={c.formFields} locale={locale} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
