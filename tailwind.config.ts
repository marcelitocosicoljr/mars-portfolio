import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        theme: {
          orange: "#FC6E0A",
          orangeLight: "#FF884D",
          dark: "#0B0D10",
          darkAlt: "#12151C",
          card: "#1A1D26",
          border: "rgba(255,255,255,0.08)",
          white: "#FFFFFF",
          muted: "#94979F",
          // legacy aliases kept for compatibility
          blue: "#15295F",
          gray: "#94979F",
          orangeBackground: "#FEF5EE",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
