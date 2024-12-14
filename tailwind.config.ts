import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import tailwindDelay from "tailwindcss-animation-delay";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    extend: {
      animation: {
        "slide-in-top":
          "slide-in-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "slide-in-bottom":
          "slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "slide-out-top":
          "slide-out-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
      keyframes: {
        "slide-in-top": {
          "0%": { transform: "translateY(-1000px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-out-top": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-1000px)", opacity: "0" },
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(1000px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animationDelay: {
        "400": "400ms",
        "550": "550ms",
        "750": "750ms",
        "850": "850ms",
        "900": "900ms",
      },
      transitionDuration:{
        "2000": "2000ms",
        "5000": "5000ms"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: ["selector", '[data-theme="dark"]'],
  plugins: [
    daisyui,
    tailwindDelay,
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-duration": (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme("transitionDuration") },
      );
    }),
  ],
} satisfies Config;
