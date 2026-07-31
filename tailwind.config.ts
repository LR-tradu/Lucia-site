import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#F7F3EC",
          dark: "#1C1A17",
        },
        ink: {
          DEFAULT: "#22201C",
          muted: "#6B655C",
          dark: "#EDE7DA",
          "muted-dark": "#A39C8E",
        },
        accent: {
          DEFAULT: "#B5563A",
          dark: "#D97B5B",
        },
        legal: "#24344D",
        support: "#8B9A7C",
        border: {
          DEFAULT: "#E4DDD0",
          dark: "#38352E",
        },
        surface: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.05" }],
        "display-l": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.1" }],
        "display-m": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15" }],
        "display-s": ["clamp(1.375rem, 2vw, 1.75rem)", { lineHeight: "1.2" }],
        "body-l": ["1.25rem", { lineHeight: "1.6" }],
        "body-m": ["1.125rem", { lineHeight: "1.6" }],
        "body-s": ["1rem", { lineHeight: "1.55" }],
        label: ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
      },
      spacing: {
        "1t": "8px",
        "2t": "16px",
        "3t": "24px",
        "4t": "32px",
        "5t": "48px",
        "6t": "64px",
        "7t": "96px",
        "8t": "128px",
        "9t": "160px",
      },
      borderRadius: {
        none: "0px",
        s: "4px",
        m: "8px",
      },
      boxShadow: {
        "hover-s": "0 4px 12px rgba(34,32,28,0.08)",
        nav: "0 1px 0 rgba(34,32,28,0.08)",
      },
      maxWidth: {
        reading: "680px",
        wide: "1280px",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        instant: "100ms",
        fast: "200ms",
        standard: "400ms",
        slow: "600ms",
      },
      screens: {
        tablet: "600px",
        desktop: "1024px",
        wide: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
