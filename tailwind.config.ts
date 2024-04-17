import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      colors: {
        'light-green': '#9EDBC8',  // Custom color from Crossmint color library 
        'med-green': '#36B37E', // Custom color from Crossmint color library
        'dark-green': '#278272', // color for buttons and navigation text, button text should be white 
        'background-grey': '#E7E9ED', //color for the payment widget 
      },
      },
    },
  },
  plugins: [],
};
export default config;
