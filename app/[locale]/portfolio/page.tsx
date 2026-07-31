import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PortfolioList } from "@/components/PortfolioList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const title = locale === "es" ? "Portfolio" : "Portfolio";
  return {
    title,
    description: dict.portfolio.heroHeadline,
    alternates: { canonical: `/${locale}/portfolio` },
  };
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const p = dict.portfolio;

  return (
    <>
      {/* 1. Intro — 30vh, compact */}
      <section className="flex min-h-[30vh] items-center py-8t">
        <Reveal className="container-wide max-w-2xl">
          <h1 className="text-display-l text-ink dark:text-ink-dark">{p.heroHeadline}</h1>
          <p className="mt-3t text-body-m text-ink-muted dark:text-ink-muted-dark">{p.confidentialityNote}</p>
        </Reveal>
      </section>

      {/* 2 & 3. Filter row + case list */}
      <section className="border-t border-border py-8t dark:border-border-dark">
        <div className="container-wide">
          <PortfolioList filters={p.filters} cases={p.cases} />
        </div>
      </section>

      {/* 4. Contact CTA */}
      <section className="border-t border-border py-9t dark:border-border-dark">
        <Reveal className="container-wide flex flex-col items-center gap-6t text-center">
          <h2 className="max-w-xl text-display-m text-ink dark:text-ink-dark">{p.ctaHeadline}</h2>
          <Button href={`/${locale}/contact`} variant="primary">
            {p.ctaButton}
          </Button>
        </Reveal>
      </section>
    </>
  );
}
