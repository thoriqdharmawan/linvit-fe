import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "512px",
      },
      animation: {
        fadeIn: "fadeIn 10s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0" },
          "60%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
