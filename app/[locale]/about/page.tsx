import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { HoverReveal } from "@/components/HoverReveal";
import { hobbyIcon } from "@/components/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.about.heroHeadline,
    description: dict.about.opening,
    alternates: { canonical: `/${locale}/about` },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const a = dict.about;

  return (
    <>
      {/* 1. Opening + portrait — 90vh, expansive */}
      <section className="flex min-h-[90vh] items-center py-9t">
        <div className="container-wide grid items-center gap-10 desktop:grid-cols-[2fr_3fr] desktop:gap-16">
          <Reveal>
            <ImagePlaceholder label="Lucía at her desk, natural light" ratio="portrait" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-display-l text-ink dark:text-ink-dark">{a.opening}</p>
          </Reveal>
        </div>
      </section>

      {/* 2. Path — 50vh, medium, compact quieter register */}
      <section className="border-t border-border py-8t dark:border-border-dark">
        <Reveal className="container-wide max-w-2xl">
          <h2 className="label text-label uppercase tracking-wide text-ink-muted dark:text-ink-muted-dark">
            {a.pathHeading}
          </h2>
          <p className="mt-3t text-body-l text-ink dark:text-ink-dark">{a.pathBody}</p>
        </Reveal>
      </section>

      {/* 3. Specialization in own words — 60vh, medium */}
      <section className="py-8t">
        <div className="container-wide grid items-center gap-10 desktop:grid-cols-[3fr_2fr] desktop:gap-16">
          <Reveal>
            <h2 className="text-display-s text-ink dark:text-ink-dark">{a.specializationHeading}</h2>
            <p className="mt-4t text-body-m text-ink-muted dark:text-ink-muted-dark">{a.specializationBody}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ImagePlaceholder label="Open notebook, soft light" ratio="landscape" />
          </Reveal>
        </div>
      </section>

      {/* 4. Currently learning — 55vh, medium, single illustration flourish lives here */}
      <section className="border-t border-border py-8t dark:border-border-dark">
        <Reveal className="container-wide max-w-2xl">
          <div className="mb-4t text-accent dark:text-accent-dark" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M24 40c0-12 4-20 4-26a4 4 0 00-8 0c0 6 4 14 4 26z" />
              <path d="M14 40h20" />
            </svg>
          </div>
          <h2 className="text-display-s text-ink dark:text-ink-dark">{a.learningHeading}</h2>
          <p className="mt-3t text-body-m text-ink-muted dark:text-ink-muted-dark">{a.learningBody}</p>
        </Reveal>
      </section>

      {/* 5. Outside work — 45vh, compact, playful hover-reveal moments */}
      <section className="py-8t">
        <Reveal className="container-wide max-w-3xl">
          <h2 className="mb-4t text-display-s text-ink dark:text-ink-dark">{a.outsideHeading}</h2>
          <p className="flex flex-wrap gap-x-2 gap-y-4 text-body-l leading-loose text-ink-muted dark:text-ink-muted-dark">
            {a.hobbies.map((hobby, i) => {
              const Icon = hobbyIcon[hobby.name];
              return (
                <span key={hobby.name}>
                  <HoverReveal icon={Icon ? <Icon className="h-full w-full" /> : null} caption={hobby.label}>
                    {hobby.label}
                  </HoverReveal>
                  {i < a.hobbies.length - 1 ? "," : "."}
                </span>
              );
            })}
          </p>
        </Reveal>
      </section>

      {/* 6. Closing + CTA — 40vh, compact */}
      <section className="border-t border-border py-9t dark:border-border-dark">
        <Reveal className="container-wide flex flex-col items-center gap-6t text-center">
          <h2 className="text-display-m text-ink dark:text-ink-dark">{a.closingHeadline}</h2>
          <Button href={`/${locale}/contact`} variant="primary">
            {a.ctaButton}
          </Button>
        </Reveal>
      </section>
    </>
  );
}
