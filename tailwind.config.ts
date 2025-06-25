// suburbia-jatin/tailwind.config.ts
import type { Config } from "tailwindcss";
import fluid, { extract } from "fluid-tailwind";

const config: Config = {
  content: {
    files: [
      "./app/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./slices/**/*.{ts,tsx}",
    ],
    extract,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-bowlby-sc)"],
        mono: ["var(--font-dm-mono)"],
      },
    },
  },
  plugins: [fluid],
};

export default config;
