import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#087F5B",
          dark: "#065A40",
          hover: "#099268",
          light: "#EBFBEE",
          surface: "#F0FAF4",
        },
        mint: {
          DEFAULT: "#DDF7EA",
          light: "#EEFCF4",
          border: "#B2E7CC",
        },
        charcoal: {
          DEFAULT: "#202A27",
          muted: "#4A5551",
          light: "#6C7A75",
        },
        accent: {
          DEFAULT: "#F5C95D",
          hover: "#ECC048",
          light: "#FEF7E6",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F8FAF9",
          card: "#FFFFFF",
          border: "#E5ECE8",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        premium: "0 10px 30px -5px rgba(8, 127, 91, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)",
        "premium-hover": "0 20px 40px -10px rgba(8, 127, 91, 0.16), 0 8px 20px -4px rgba(0, 0, 0, 0.06)",
        card: "0 2px 10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
