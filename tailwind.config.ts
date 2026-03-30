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
        navy: "#0f1f3d",
        "navy-light": "#162a52",
        orange: "#FF6B00",
        "orange-hover": "#e65f00",
        gray: {
          50: "#f8f9fa",
        },
      },
    },
  },
  plugins: [],
};
export default config;
