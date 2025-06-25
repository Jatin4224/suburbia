import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./slices/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Example of fluid text

      padding: {
        fluid: "clamp(2.5rem, 6vw, 4rem)",
      },
    },
  },
  plugins: [],
};

export default config;
