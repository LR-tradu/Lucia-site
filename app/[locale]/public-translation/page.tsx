import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { Button } from "@/components/Button";
import { Reveal, RevealStagger, StaggerItem } from "@/components/Reveal";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { documentIcon } from "@/components/icons";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const title =
    locale === "es"
      ? "Traducción Pública — Documentos certificados"
      : "Public Translation — Certified Documents";
  return {
    title,
    description: dict.publicTranslation.heroBody,
    alternates: { canonical: `/${locale}/public-translation` },
  };
}

export default async function PublicTranslationPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.publicTranslation;

  return (
    <>
      {/* 1. Intro — 70vh, medium, information-first, no image */}
      <section className="flex min-h-[70vh] items-center py-9t">
        <Reveal className="container-wide max-w-3xl">
          <h1 className="text-display-l text-ink dark:text-ink-dark">{t.heroHeadline}</h1>
          <p className="mt-5t text-body-l text-ink-muted dark:text-ink-muted-dark">{t.heroBody}</p>
        </Reveal>
      </section>

      {/* 2. Document types — 90vh, expansive, asymmetric */}
      <section className="border-t border-border py-9t dark:border-border-dark">
        <div className="container-wide">
          <Reveal>
            <h2 className="mb-8t text-display-m text-ink dark:text-ink-dark">{t.documentsHeading}</h2>
          </Reveal>
          <RevealStagger className="grid gap-8 desktop:grid-cols-2">
            {t.documents.map((doc, i) => {
              const Icon = documentIcon[doc.icon];
              return (
                <StaggerItem
                  key={doc.name}
                  className={`group flex items-start gap-5 border-b border-border pb-6t dark:border-border-dark ${
                    i < 2 ? "desktop:col-span-2" : ""
                  }`}
                >
                  <span className="mt-1 h-10 w-10 shrink-0 text-ink transition-colors duration-fast group-hover:text-accent dark:text-ink-dark dark:group-hover:text-accent-dark">
                    {Icon && <Icon className="h-full w-full" />}
                  </span>
                  <div>
                    <p className="text-display-s text-ink dark:text-ink-dark">{doc.name}</p>
                    <p className="mt-1t text-body-m text-ink-muted dark:text-ink-muted-dark">{doc.examples}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* Trust artifact — the certified translation seal */}
      <section className="py-8t">
        <div className="container-wide grid items-center gap-10 desktop:grid-cols-2 desktop:gap-16">
          <Reveal>
            <ImagePlaceholder label="Detail of a certified translation seal, signature, and ribbon" ratio="landscape" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-display-s text-ink dark:text-ink-dark">
              {locale === "es"
                ? "Cada traducción certificada lleva mi firma y mi sello — es lo que le da validez legal."
                : "Every certified translation carries my seal and signature — that's what gives it legal standing."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. Process — 60vh, medium */}
      <section className="border-t border-border py-9t dark:border-border-dark">
        <div className="container-wide">
          <Reveal>
            <h2 className="mb-8t text-display-m text-ink dark:text-ink-dark">{t.processHeading}</h2>
          </Reveal>
          <ProcessSteps steps={t.processSteps} />
        </div>
      </section>

      {/* 4. Pricing/turnaround — 40vh, compact */}
      <section className="py-8t">
        <Reveal className="container-wide max-w-2xl">
          <h2 className="text-display-s text-ink dark:text-ink-dark">{t.pricingHeading}</h2>
          <p className="mt-3t text-body-m text-ink-muted dark:text-ink-muted-dark">{t.pricingBody}</p>
        </Reveal>
      </section>

      {/* 5. FAQ — 80vh, medium */}
      <section className="border-t border-border py-9t dark:border-border-dark">
        <div className="container-wide max-w-3xl">
          <Reveal>
            <h2 className="mb-6t text-display-m text-ink dark:text-ink-dark">{t.faqHeading}</h2>
          </Reveal>
          <FAQAccordion items={t.faq} />
        </div>
      </section>

      {/* 6. Submission CTA — 45vh, compact, centered resolution */}
      <section className="py-9t">
        <Reveal className="container-wide flex flex-col items-center gap-6t text-center">
          <h2 className="max-w-xl text-display-m text-ink dark:text-ink-dark">{t.ctaHeadline}</h2>
          <Button href={`/${locale}/contact`} variant="primary">
            {t.ctaButton}
          </Button>
        </Reveal>
      </section>

      <StickyMobileCTA href={`/${locale}/contact`} label={t.ctaButton} />
    </>
  );
}
