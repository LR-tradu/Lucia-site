import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import { siteConfig } from "@/lib/config";
import "../globals.css";

const displayFont = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.meta.homeTitle,
      template: `%s — ${dict.meta.siteName}`,
    },
    description: dict.meta.homeDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
      },
    },
    openGraph: {
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      url: `${siteConfig.url}/${locale}`,
      siteName: dict.meta.siteName,
      locale: locale === "es" ? "es_AR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lucía Reser",
    jobTitle: locale === "es" ? "Traductora Pública" : "Certified Public Translator",
    url: siteConfig.url,
    email: siteConfig.email,
    knowsLanguage: ["es", "en"],
    address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
  };

  return (
    <html lang={locale} className={`${displayFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-base"
          >
            {locale === "es" ? "Saltar al contenido principal" : "Skip to main content"}
          </a>
          <Navbar locale={locale} dict={dict} />
          <main id="main">{children}</main>
          <Footer locale={locale} dict={dict} />
        </ThemeProvider>
      </body>
    </html>
  );
}
