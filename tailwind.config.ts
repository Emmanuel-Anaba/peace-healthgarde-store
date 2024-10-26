import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        laurel: {
          "50": "#e9ffe0",
          "100": "#cbffbb",
          "200": "#9bff80",
          "300": "#5aff37",
          "400": "#22ff00",
          "500": "#01ff00",
          "600": "#00d309",
          "700": "#009f07",
          "800": "#007b03",
          "900": "#006602",
          "950": "#003b07",
        },
        gray: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#808080",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#262626",
        },
      },
    },
  },
  plugins: [],
};
export default config;
