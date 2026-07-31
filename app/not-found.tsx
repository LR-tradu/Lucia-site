import Link from "next/link";

// Root-level not-found (outside [locale]) — catches requests that don't
// match any locale-prefixed route. Defaults to English since we have no
// locale context here; the locale-prefixed pages below handle real 404s
// within a known locale via the catch-all in each [locale] segment.
export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#F7F3EC] px-6 text-center font-sans text-[#22201C]">
        <p className="text-sm uppercase tracking-wide text-[#B5563A]">404</p>
        <h1 className="text-3xl">Page not found</h1>
        <p className="max-w-sm text-[#6B655C]">
          The page you're looking for doesn't exist, or has moved.
        </p>
        <Link href="/en" className="mt-2 underline">
          Back to home
        </Link>
      </body>
    </html>
  );
}
