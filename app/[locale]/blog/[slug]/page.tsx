import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import { en } from "@/lib/dictionaries/en";
import { es } from "@/lib/dictionaries/es";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const dict = locale === "es" ? es : en;
    for (const post of dict.blog.posts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const dict = getDictionary(locale);
  const post = dict.blog.posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.takeaway,
    alternates: { canonical: `/${locale}/blog/${slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = getDictionary(locale);
  const post = dict.blog.posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.takeaway,
    inLanguage: locale,
    author: { "@type": "Person", name: "Lucía Reser" },
  };

  return (
    <article className="py-9t">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Reveal className="container-reading">
        <p className="label text-label uppercase tracking-wide text-accent dark:text-accent-dark">
          {post.category} · {post.readingTime}
        </p>
        <h1 className="mt-3t text-display-l text-ink dark:text-ink-dark">{post.title}</h1>
        <p className="mt-5t text-body-l text-ink dark:text-ink-dark">{post.takeaway}</p>

        <div className="mt-7t flex flex-col gap-5">
          {post.body.map((paragraph) => (
            <p key={paragraph} className="text-body-m leading-loose text-ink-muted dark:text-ink-muted-dark">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-9t border-t border-border pt-7t dark:border-border-dark">
          <h2 className="text-display-s text-ink dark:text-ink-dark">{post.ctaHeadline}</h2>
          <div className="mt-4t">
            <Button href={`/${locale}/contact`} variant="primary">
              {post.ctaButton}
            </Button>
          </div>
        </div>
      </Reveal>
    </article>
  );
}
