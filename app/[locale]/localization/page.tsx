import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { StatCounter } from "@/components/StatCounter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const title = locale === "es" ? "Localización — MTPE y control de calidad" : "Localization — MTPE & Linguistic QA";
  return {
    title,
    description: dict.localization.heroBody,
    alternates: { canonical: `/${locale}/localization` },
  };
}

export default async function LocalizationPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const l = dict.localization;
  const featured = l.domains.find((d) => d.featured);
  const rest = l.domains.filter((d) => !d.featured);

  return (
    <>
      {/* 1. Scope — 60vh, medium, plain confident statement */}
      <section className="flex min-h-[60vh] items-center py-9t">
        <Reveal className="container-wide max-w-3xl">
          <h1 className="text-display-l text-ink dark:text-ink-dark">{l.heroHeadline}</h1>
          <p className="mt-5t text-body-l text-ink-muted dark:text-ink-muted-dark">{l.heroBody}</p>
        </Reveal>
      </section>

      {/* 2. Domain expertise — 90vh, expansive, asymmetric with healthcare featured */}
      <section className="min-h-[90vh] border-t border-border py-9t dark:border-border-dark">
        <div className="container-wide">
          <Reveal>
            <h2 className="mb-8t text-display-m text-ink dark:text-ink-dark">{l.domainsHeading}</h2>
          </Reveal>
          <div className="grid gap-8 desktop:grid-cols-[3fr_2fr]">
            {featured && (
              <Reveal className="border border-border p-8 dark:border-border-dark">
                <span className="label text-label uppercase tracking-wide text-accent dark:text-accent-dark">
                  {locale === "es" ? "Especialización principal" : "Primary specialization"}
                </span>
                <p className="mt-3t text-display-s text-ink dark:text-ink-dark">{featured.name}</p>
                <p className="mt-3t text-body-m text-ink-muted dark:text-ink-muted-dark">{featured.description}</p>
              </Reveal>
            )}
            <div className="flex flex-col gap-6">
              {rest.map((d, i) => (
                <Reveal key={d.name} delay={i * 0.05} className="border-b border-border pb-6t dark:border-border-dark">
                  <p className="text-display-s text-ink dark:text-ink-dark">{d.name}</p>
                  <p className="mt-1t text-body-m text-ink-muted dark:text-ink-muted-dark">{d.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Methodology — 80vh, competence-proof moment */}
      <section className="border-t border-border py-9t dark:border-border-dark">
        <div className="container-wide grid items-start gap-10 desktop:grid-cols-2 desktop:gap-16">
          <Reveal>
            <h2 className="text-display-m text-ink dark:text-ink-dark">{l.methodologyHeading}</h2>
            <p className="mt-4t text-body-m text-ink-muted dark:text-ink-muted-dark">{l.methodologyBody}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <MethodologyDiagram steps={l.methodologySteps} />
          </Reveal>
        </div>
      </section>

      {/* 4. Tools/formats — 35vh, compact, marquee */}
      <section className="py-8t">
        <Reveal className="container-wide">
          <h2 className="mb-4t text-display-s text-ink dark:text-ink-dark">{l.toolsHeading}</h2>
        </Reveal>
        <Marquee items={l.tools} />
      </section>

      {/* 5. Portfolio link — 50vh, medium */}
      <section className="py-9t">
        <Reveal className="container-wide max-w-2xl">
          <p className="text-display-s text-ink-muted dark:text-ink-muted-dark">
            {l.portfolioTeaser.replace(/[\d.,]+/, "")}
            <span className="text-ink dark:text-ink-dark">
              <StatCounter value={40000} suffix={locale === "es" ? " palabras" : " words"} />
            </span>
          </p>
          <div className="mt-6t">
            <Button href={`/${locale}/portfolio`} variant="text">
              {l.portfolioLink}
            </Button>
          </div>
        </Reveal>
      </section>

      {/* 6. Contact CTA — 45vh, compact, centered resolution */}
      <section className="border-t border-border py-9t dark:border-border-dark">
        <Reveal className="container-wide flex flex-col items-center gap-6t text-center">
          <h2 className="max-w-xl text-display-m text-ink dark:text-ink-dark">{l.ctaHeadline}</h2>
          <Button href={`/${locale}/contact`} variant="primary">
            {l.ctaButton}
          </Button>
        </Reveal>
      </section>
    </>
  );
}

function MethodologyDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="border border-border p-8 dark:border-border-dark">
      <ol className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <li key={step} className="relative flex items-center gap-4 py-3t">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-s border border-accent text-body-s text-accent dark:border-accent-dark dark:text-accent-dark">
              {i + 1}
            </span>
            <span className="text-body-m text-ink dark:text-ink-dark">{step}</span>
            {i < steps.length - 1 && (
              <span
                className="absolute left-4 top-11 h-3t w-px bg-border dark:bg-border-dark"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
