// Single-weight line icons (1.5px stroke), no fill, one ink color —
// per the brand's illustration system. Used for document categories,
// process wayfinding, and the hobby hover-reveal moments on the About page.
import type { ReactElement } from "react";

type IconProps = { className?: string };

const base = "stroke-current fill-none";
const strokeWidth = 1.5;

export function IconCertificate({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} strokeWidth={strokeWidth}>
      <rect x="8" y="6" width="32" height="30" className={base} />
      <path d="M14 14h20M14 20h20M14 26h12" className={base} />
      <circle cx="24" cy="38" r="6" className={base} />
      <path d="M20 38l3 3 5-6" className={base} />
    </svg>
  );
}

export function IconScale({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} strokeWidth={strokeWidth}>
      <path d="M24 6v34M14 40h20" className={base} />
      <path d="M8 14h12M28 14h12" className={base} />
      <path d="M8 14l-4 10a4 6 0 008 0zM28 14l-4 10a4 6 0 008 0z" className={base} />
    </svg>
  );
}

export function IconDiploma({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} strokeWidth={strokeWidth}>
      <path d="M10 12h20l6 6v18H10z" className={base} />
      <path d="M30 12v6h6" className={base} />
      <path d="M15 22h15M15 27h15M15 32h9" className={base} />
    </svg>
  );
}

export function IconMedical({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} strokeWidth={strokeWidth}>
      <rect x="8" y="10" width="32" height="28" rx="1" className={base} />
      <path d="M24 18v12M18 24h12" className={base} />
    </svg>
  );
}

export function IconPassport({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} strokeWidth={strokeWidth}>
      <rect x="12" y="6" width="24" height="34" rx="2" className={base} />
      <circle cx="24" cy="19" r="5" className={base} />
      <path d="M17 32c1-4 4-6 7-6s6 2 7 6" className={base} />
    </svg>
  );
}

export function IconCamera({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} strokeWidth={strokeWidth}>
      <rect x="6" y="14" width="36" height="24" rx="2" className={base} />
      <path d="M17 14l3-5h8l3 5" className={base} />
      <circle cx="24" cy="26" r="7" className={base} />
    </svg>
  );
}

export function IconBook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} strokeWidth={strokeWidth}>
      <path d="M24 12c-4-3-10-4-16-3v26c6-1 12 0 16 3 4-3 10-4 16-3V9c-6-1-12 0-16 3z" className={base} />
      <path d="M24 12v26" className={base} />
    </svg>
  );
}

export function IconVinyl({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} strokeWidth={strokeWidth}>
      <circle cx="24" cy="24" r="18" className={base} />
      <circle cx="24" cy="24" r="12" className={base} />
      <circle cx="24" cy="24" r="7" className={base} />
      <circle cx="24" cy="24" r="2" className={base} />
    </svg>
  );
}

export function IconBaking({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} strokeWidth={strokeWidth}>
      <path d="M10 20h28l-3 18H13z" className={base} />
      <path d="M14 20c0-6 4-11 10-11s10 5 10 11" className={base} />
    </svg>
  );
}

export function IconCollage({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} strokeWidth={strokeWidth}>
      <rect x="6" y="6" width="20" height="20" className={base} />
      <rect x="22" y="22" width="20" height="20" className={base} />
    </svg>
  );
}

export function IconMuseum({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} strokeWidth={strokeWidth}>
      <path d="M6 18l18-10 18 10" className={base} />
      <path d="M8 18v20M18 18v20M30 18v20M40 18v20" className={base} />
      <path d="M4 38h40" className={base} />
    </svg>
  );
}

export const hobbyIcon: Record<string, (props: IconProps) => ReactElement> = {
  photography: IconCamera,
  reading: IconBook,
  music: IconVinyl,
  baking: IconBaking,
  collage: IconCollage,
  museums: IconMuseum,
};

export const documentIcon: Record<string, (props: IconProps) => ReactElement> = {
  certificate: IconCertificate,
  scale: IconScale,
  diploma: IconDiploma,
  medical: IconMedical,
  passport: IconPassport,
};
