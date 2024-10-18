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
        // lima: {
        //   "50": "#f4ffe6",
        //   "100": "#e6fec9",
        //   "200": "#cdfc9a",
        //   "300": "#acf75f",
        //   "400": "#8dec2f",
        //   "500": "#6ace0f",
        //   "600": "#52a808",
        //   "700": "#3f800b",
        //   "800": "#34650f",
        //   "900": "#2d5512",
        //   "950": "#143003",
        // },
      },
    },
  },
  plugins: [],
};
export default config;
