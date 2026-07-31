import { ImageResponse } from "next/og";
import { getDictionary, type Locale } from "@/lib/dictionaries";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#F7F3EC",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, color: "#B5563A", letterSpacing: 2, textTransform: "uppercase" }}>
          {locale === "es" ? "Traductora Pública · Inglés–Español" : "Certified Public Translator · English–Spanish"}
        </div>
        <div style={{ display: "flex", fontSize: 76, color: "#22201C", marginTop: 24, fontFamily: "serif" }}>
          Lucía Reser
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#6B655C", marginTop: 24, maxWidth: 900 }}>
          {dict.home.heroSub}
        </div>
      </div>
    ),
    { ...size }
  );
}
