"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/dictionaries/types";

export function ContactForm({ fields, locale }: { fields: Dictionary["contact"]["formFields"]; locale: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    if (!data.get("name")) {
      next.name = locale === "es" ? "Contame tu nombre." : "Add your name.";
    }
    if (!data.get("email")) {
      next.email = locale === "es" ? "Contame tu email para responderte." : "Add your email so I can reply.";
    }
    if (!data.get("documentType")) {
      next.documentType =
        locale === "es"
          ? "Contame qué necesitás traducir."
          : "Add what you need translated so I know what to quote.";
    }
    if (!data.get("languagePair")) {
      next.languagePair = locale === "es" ? "Agregá el par de idiomas." : "Add the language pair so I know what to quote.";
    }
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const validation = validate(data);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    try {
      // Wire this up to your form handler / email service of choice.
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-body-l text-ink dark:text-ink-dark">
        {locale === "es"
          ? "Gracias — recibí tu mensaje y te respondo pronto."
          : "Thank you — your message is in, I'll reply soon."}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4t">
      <Field label={fields.name} name="name" error={errors.name} />
      <Field label={fields.email} name="email" type="email" error={errors.email} />
      <Field label={fields.documentType} name="documentType" error={errors.documentType} />
      <Field label={fields.languagePair} name="languagePair" error={errors.languagePair} />
      <Field label={fields.timeline} name="timeline" />
      <FieldArea label={fields.message} name="message" />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="label mt-2t w-full bg-accent px-6 py-3 text-label text-base transition-colors duration-fast hover:bg-accent/90 disabled:opacity-40 dark:bg-accent-dark dark:text-base-dark tablet:w-auto"
      >
        {status === "submitting" ? "…" : fields.submit}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="label mb-1t block text-label text-ink-muted dark:text-ink-muted-dark">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="w-full rounded-s border border-border bg-surface px-3 py-2t text-body-m text-ink outline-none transition-colors duration-fast focus:border-2 focus:border-accent dark:border-border-dark dark:bg-[#252119] dark:text-ink-dark"
      />
      {error && (
        <p id={`${name}-error`} className="mt-1t text-body-s text-[#9A3E28] dark:text-[#E08A6E]">
          {error}
        </p>
      )}
    </div>
  );
}

function FieldArea({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <label htmlFor={name} className="label mb-1t block text-label text-ink-muted dark:text-ink-muted-dark">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        className="w-full rounded-s border border-border bg-surface px-3 py-2t text-body-m text-ink outline-none transition-colors duration-fast focus:border-2 focus:border-accent dark:border-border-dark dark:bg-[#252119] dark:text-ink-dark"
      />
    </div>
  );
}
