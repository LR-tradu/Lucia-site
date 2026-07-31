import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { Reveal, RevealStagger, StaggerItem } from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.blog.heroHeadline,
    description: dict.blog.heroSub,
    alternates: { canonical: `/${locale}/blog` },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const b = dict.blog;

  return (
    <section className="py-9t">
      <div className="container-wide">
        <Reveal className="max-w-2xl">
          <h1 className="text-display-l text-ink dark:text-ink-dark">{b.heroHeadline}</h1>
          <p className="mt-3t text-body-l text-ink-muted dark:text-ink-muted-dark">{b.heroSub}</p>
        </Reveal>

        <RevealStagger className="mt-9t divide-y divide-border dark:divide-border-dark">
          {b.posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="group flex flex-col gap-2 py-6t tablet:flex-row tablet:items-baseline tablet:justify-between tablet:gap-8"
              >
                <div className="max-w-2xl">
                  <p className="label text-label uppercase tracking-wide text-accent dark:text-accent-dark">
                    {post.category}
                  </p>
                  <h2 className="mt-2t text-display-s text-ink transition-colors duration-fast group-hover:text-accent dark:text-ink-dark dark:group-hover:text-accent-dark">
                    {post.title}
                  </h2>
                  <p className="mt-2t text-body-m text-ink-muted dark:text-ink-muted-dark">{post.takeaway}</p>
                </div>
                <span className="shrink-0 text-body-s text-ink-muted dark:text-ink-muted-dark">
                  {post.readingTime}
                </span>
              </Link>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
