import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { Button } from "@/components/Button";
import { Reveal, RevealStagger, StaggerItem } from "@/components/Reveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ProcessSteps } from "@/components/ProcessSteps";
import { StatCounter } from "@/components/StatCounter";
import { HeroPhoto } from "@/components/HeroPhoto";
import { HomeHero } from "@/components/HomeHero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.meta.homeTitle, description: dict.meta.homeDescription };
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const h = dict.home;

  return (
    <>
      {/* 1. Hero — 90vh, expansive */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-9t">
        <div className="container-wide grid items-center gap-10 desktop:grid-cols-[3fr_2fr] desktop:gap-16">
          <HomeHero
            kicker={h.heroKicker}
            headline={h.heroHeadline}
            sub={h.heroSub}
            ctaPrimary={h.ctaPrimary}
            ctaSecondary={h.ctaSecondary}
            ctaPrimaryHref={`/${locale}/contact`}
            ctaSecondaryHref={`/${locale}/portfolio`}
          />
          <div className="order-first desktop:order-last">
            <HeroPhoto label="Lucía at her desk, natural light, annotated document in hand" />
          </div>
        </div>
      </section>

      {/* 2. Credential strip — 25vh, compact */}
      <section className="border-y border-border py-6t dark:border-border-dark">
        <RevealStagger className="container-wide grid grid-cols-2 gap-6 desktop:grid-cols-4 desktop:divide-x desktop:divide-border desktop:dark:divide-border-dark">
          {h.credentials.map((c) => (
            <StaggerItem key={c.label} className="desktop:px-6 first:desktop:pl-0">
              <p className="label text-label text-ink-muted dark:text-ink-muted-dark">{c.label}</p>
              <p className="mt-1t text-body-m text-ink dark:text-ink-dark">{c.value}</p>
            </StaggerItem>
          ))}
        </RevealStagger>
      </section>

      {/* 3. What I translate — 60vh, medium, photography-free */}
      <section className="py-8t">
        <div className="container-wide grid gap-8 desktop:grid-cols-[1fr_2fr] desktop:gap-16">
          <Reveal>
            <p className="text-display-m text-ink dark:text-ink-dark">{h.translateHeading}</p>
          </Reveal>
          <RevealStagger className="divide-y divide-border dark:divide-border-dark">
            {h.translateItems.map((item) => (
              <StaggerItem key={item.name} className="group flex items-baseline justify-between gap-6 py-5t">
                <div>
                  <p className="text-display-s text-ink transition-colors duration-fast group-hover:text-accent dark:text-ink-dark dark:group-hover:text-accent-dark">
                    {item.name}
                  </p>
                  <p className="mt-1t text-body-s text-ink-muted dark:text-ink-muted-dark">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
            <StaggerItem className="pt-5t">
              <Button href={`/${locale}/public-translation`} variant="text">
                {h.translateLink}
              </Button>
            </StaggerItem>
          </RevealStagger>
        </div>
      </section>

      {/* 4. Specialization spotlight — 100vh, expansive, the emotional centerpiece */}
      <section className="flex min-h-[100vh] items-center bg-[#F1EADC] py-9t dark:bg-[#221E18]">
        <div className="container-wide grid items-center gap-10 desktop:grid-cols-[3fr_2fr] desktop:gap-16">
          <Reveal className="desktop:order-2">
            <ImagePlaceholder
              label="Open notebook, soft warm light — specialization spotlight"
              ratio="portrait"
            />
          </Reveal>
          <Reveal delay={0.1} className="desktop:order-1">
            <p className="max-w-xl text-display-l text-ink dark:text-ink-dark">{h.specializationHeadline}</p>
            <div className="mt-6t">
              <Button href={`/${locale}/about`} variant="text">
                {h.specializationLink}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Featured work — 80vh, medium */}
      <section className="py-8t">
        <div className="container-wide grid items-center gap-10 desktop:grid-cols-2 desktop:gap-16">
          <Reveal>
            <div className="group overflow-hidden">
              <div className="transition-transform duration-slow ease-standard group-hover:scale-105">
                <ImagePlaceholder label="Reproductive health app UI detail, in-context" ratio="landscape" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="label text-label uppercase tracking-wide text-accent dark:text-accent-dark">
              {h.featuredWorkKicker}
            </p>
            <h2 className="mt-2t text-display-m text-ink dark:text-ink-dark">{h.featuredWorkTitle}</h2>
            <div className="mt-4t flex flex-col gap-3">
              {h.featuredWorkParagraphs.map((p) => (
                <p key={p} className="text-body-m text-ink-muted dark:text-ink-muted-dark">
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-4t text-body-s text-ink-muted dark:text-ink-muted-dark">
              <StatCounter value={6} /> {locale === "es" ? "variantes de español" : "Spanish variants shipped"}
            </p>
            <div className="mt-5t">
              <Button href={`/${locale}/portfolio`} variant="text">
                {h.featuredWorkLink}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. About teaser — 55vh, medium, balanced 50/50 */}
      <section className="py-8t">
        <div className="container-wide grid items-center gap-10 desktop:grid-cols-2 desktop:gap-16">
          <Reveal>
            <ImagePlaceholder label="Lucía, candid portrait, natural light" ratio="square" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-display-s text-ink dark:text-ink-dark">{h.aboutTeaserText}</p>
            <div className="mt-5t">
              <Button href={`/${locale}/about`} variant="text">
                {h.aboutTeaserLink}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Process — 70vh, medium */}
      <section className="py-8t">
        <div className="container-wide">
          <Reveal>
            <h2 className="mb-8t text-display-m text-ink dark:text-ink-dark">{h.processHeading}</h2>
          </Reveal>
          <ProcessSteps steps={h.processSteps} />
        </div>
      </section>

      {/* 8. Contact CTA — 50vh, compact, calm and centered (deliberate exception) */}
      <section className="py-9t">
        <Reveal className="container-wide flex flex-col items-center gap-6t text-center">
          <h2 className="max-w-2xl text-display-l text-ink dark:text-ink-dark">{h.closingHeadline}</h2>
          <div className="flex flex-col gap-4 tablet:flex-row">
            <Button href={`/${locale}/contact`} variant="primary">
              {h.ctaPrimary}
            </Button>
            <Button href={`/${locale}/portfolio`} variant="secondary">
              {h.ctaSecondary}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
