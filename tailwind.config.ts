import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f3f5",
        "surface-container": "#eeeef0",
        "surface-container-high": "#e8e8ea",
        "surface-container-highest": "#e2e2e4",
        surface: "var(--surface)",
        "surface-alt": "var(--surface-2)",
        foreground: "var(--foreground)",
        primary: "#030304",
        "on-primary": "#ffffff",
        secondary: "#5e5e63",
        outline: "#77767b",
        "outline-variant": "#c7c6ca",
        "on-surface": "#1a1c1d",
        "on-surface-variant": "#46464a",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-alt": "var(--accent-2)",
        border: "var(--border)",
      },
      fontFamily: {
        "body-md": ["var(--font-inter)", "sans-serif"],
        "body-lg": ["var(--font-inter)", "sans-serif"],
        "headline-md": ["var(--font-display)", "sans-serif"],
        "headline-lg": ["var(--font-display)", "sans-serif"],
        "display-lg": ["var(--font-display)", "sans-serif"],
        "display-lg-mobile": ["var(--font-display)", "sans-serif"],
        "label-md": ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["40px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "500" }],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0, 0, 0, 0.24)",
      },
      maxWidth: {
        "container-max": "1200px",
      },
      spacing: {
        gutter: "24px",
        "stack-sm": "16px",
        "stack-md": "32px",
        "stack-lg": "80px",
        "margin-mobile": "24px",
        "margin-desktop": "64px",
        unit: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
