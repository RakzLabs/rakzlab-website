import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F6F0",
        "paper-alt": "#ECEEE4",
        ink: "#16211C",
        "ink-soft": "#4B564E",
        "ink-faint": "#7A8479",
        line: "#DBDED2",
        primary: {
          DEFAULT: "#0F5D4E",
          light: "#17836D",
          dark: "#0A4038",
        },
        teal: {
          DEFAULT: "#00685B",
          dark: "#004D43",
          light: "#138275",
        },
        mint: "#E8F5E9",
        accent: "#FF5A36",
        good: "#1E9E63",
        warn: "#D69A1B",
        bad: "#D6483F",
        under: "#3B7FC4",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(22,33,28,.04), 0 12px 32px -16px rgba(22,33,28,.18)",
        pop: "0 24px 60px -20px rgba(15,93,78,.35)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.25s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
