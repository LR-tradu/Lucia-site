import type { ReactNode } from "react";

// Root layout is a pass-through: the [locale] segment layout owns the
// <html>/<body> tags so that `lang` can be set correctly per locale.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
