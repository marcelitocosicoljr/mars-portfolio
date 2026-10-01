import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Navy / white / mist palette
        navy: {
          950: "#070E30",
          900: "#0B1541",
          800: "#101D5A",
          700: "#1A2A78",
          600: "#26399A",
          500: "#3A50B8",
          400: "#6477D0",
        },
        mist: {
          50: "#F7F8FC",
          100: "#EEF1F8",
          200: "#E2E7F2",
          300: "#CDD5E6",
        },
        ink: "#141A36",
        slate: {
          DEFAULT: "#4D5675",
          light: "#7A83A1",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,29,90,0.04), 0 8px 24px -12px rgba(16,29,90,0.12)",
        lift: "0 2px 4px rgba(16,29,90,0.04), 0 24px 48px -16px rgba(16,29,90,0.28)",
        navy: "0 12px 32px -8px rgba(16,29,90,0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "spin-slow": "spinSlow 28s linear infinite",
        floaty: "floaty 5s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
