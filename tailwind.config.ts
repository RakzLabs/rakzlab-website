import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        ink: "#202124",
        teal: {
          DEFAULT: "#00685B",
          dark: "#004D43",
          light: "#138275",
        },
        mint: "#E8F5E9",
        line: "#E0E0E0",
      },
      fontFamily: {
        display: ["var(--font-lato)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
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
