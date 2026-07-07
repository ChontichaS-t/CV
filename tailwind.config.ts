import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#fafafa",
        "surface-container": "#f4f4f5",
        "surface-container-high": "#e4e4e7",
        "surface-container-highest": "#d4d4d8",
        surface: "var(--surface)",
        "surface-alt": "var(--surface-2)",
        foreground: "var(--foreground)",
        primary: "#000000",
        "on-primary": "#ffffff",
        secondary: "#52525b",
        outline: "#a1a1aa",
        "outline-variant": "#e4e4e7",
        "on-surface": "#09090b",
        "on-surface-variant": "#27272a",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-alt": "var(--accent-2)",
        border: "var(--border)",
      },
      fontFamily: {
        "body-md": ["-apple-system", "BlinkMacSystemFont", "var(--font-inter)", "sans-serif"],
        "body-lg": ["-apple-system", "BlinkMacSystemFont", "var(--font-inter)", "sans-serif"],
        "headline-md": ["-apple-system", "BlinkMacSystemFont", "var(--font-inter)", "sans-serif"],
        "headline-lg": ["-apple-system", "BlinkMacSystemFont", "var(--font-inter)", "sans-serif"],
        "display-lg": ["-apple-system", "BlinkMacSystemFont", "var(--font-inter)", "sans-serif"],
        "display-lg-mobile": ["-apple-system", "BlinkMacSystemFont", "var(--font-inter)", "sans-serif"],
        "label-md": ["-apple-system", "BlinkMacSystemFont", "var(--font-inter)", "sans-serif"],
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
        soft: "0 12px 40px rgba(0, 0, 0, 0.04)",
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
