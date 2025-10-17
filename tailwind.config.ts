// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand / CTA — Marigold
        marigold: {
          DEFAULT: "#E59D2C",
          50: "#FFF5E6",
          100: "#FDECCF",
          200: "#F8D9A3",
          300: "#F4C374",
          400: "#EEAE47",
          500: "#E59D2C",
          600: "#C7811E",
          700: "#A2641A",
          800: "#7D4B15",
          900: "#5A3510",
        },

        // Surfaces / subtle fills — Buff
        buff: {
          DEFAULT: "#F3D58D",
          50: "#FFF8EA",
          100: "#FEF2D6",
          200: "#FBE5B0",
          300: "#F7D98F",
          400: "#F4CE75",
          500: "#F3D58D",
          600: "#D3B56B",
          700: "#B49551",
          800: "#8C713B",
          900: "#5F4C26",
        },

        // Paper / light surfaces — Pearl
        pearl: {
          DEFAULT: "#EBDDC5",
          50: "#FFFBF4",
          100: "#F8F2E5",
          200: "#F2E9D5",
          300: "#EBDDC5",
          400: "#DAC9A9",
          500: "#CBB995",
          600: "#B09C76",
          700: "#8D7B5B",
          800: "#6B5C44",
          900: "#473E2D",
        },

        // Ink / headings / borders — Police Blue
        police: {
          DEFAULT: "#2E4365",
          50: "#EEF3FA",
          100: "#DCE6F3",
          200: "#B9CBE6",
          300: "#92ADD6",
          400: "#6C8FC5",
          500: "#4E73AE",
          600: "#3E5D90",
          700: "#2E4365",
          800: "#23344D",
          900: "#172233",
        },

        // Accents / chips — Citrine Brown
        citrine: {
          DEFAULT: "#8A3B08",
          50: "#FBEFE7",
          100: "#F6E0D0",
          200: "#EFC2A2",
          300: "#E39D70",
          400: "#CD6E38",
          500: "#A94E1E",
          600: "#8A3B08",
          700: "#6C2F08",
          800: "#4F2407",
          900: "#361904",
        },

        // Neutral ink tuned for Pearl/Buff backgrounds
        ink: {
          DEFAULT: "#1C1A18",
          50: "#F7F6F4",
          100: "#EAE7E1",
          200: "#D6D0C6",
          300: "#B9B0A2",
          400: "#8F8578",
          500: "#6D665E",
          600: "#4E4943",
          700: "#393431",
          800: "#262321",
          900: "#1C1A18",
        },
      },

      boxShadow: {
        // warm brand lift: marigold glow + police base
        brand:
          "0 12px 28px -10px rgba(229,157,44,0.35), 0 8px 18px -10px rgba(46,67,101,0.25)",
        soft: "0 12px 22px -8px rgba(0,0,0,0.14), 0 6px 10px -6px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
