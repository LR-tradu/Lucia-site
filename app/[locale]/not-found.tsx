"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";

export default function LocaleNotFound() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/es") ? "es" : "en";

  const copy =
    locale === "es"
      ? {
          eyebrow: "404",
          title: "Esta página no existe",
          body: "El documento que buscás no está acá — puede que se haya movido, o el enlace tenga un error.",
          cta: "Volver al inicio",
        }
      : {
          eyebrow: "404",
          title: "This page doesn't exist",
          body: "The document you're looking for isn't here — it may have moved, or the link may be off.",
          cta: "Back to home",
        };

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-4t text-center">
      <p className="label text-label uppercase tracking-wide text-accent dark:text-accent-dark">
        {copy.eyebrow}
      </p>
      <h1 className="text-display-l text-ink dark:text-ink-dark">{copy.title}</h1>
      <p className="max-w-md text-body-m text-ink-muted dark:text-ink-muted-dark">{copy.body}</p>
      <div className="mt-2t">
        <Button href={`/${locale}`} variant="primary">
          {copy.cta}
        </Button>
      </div>
      <Link href={`/${locale}/contact`} className="mt-1 text-body-s underline-draw text-ink-muted dark:text-ink-muted-dark">
        {locale === "es" ? "¿No encontrás lo que buscás? Escribime." : "Can't find what you need? Get in touch."}
      </Link>
    </section>
  );
}
