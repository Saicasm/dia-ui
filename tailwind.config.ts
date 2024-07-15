import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: {
            primary: "#272727",
            secondary: "bg-gray-100",
          },
          text: {
            primary: "white",
            secondary: "black",
          },
          accent: {
            primary: "#C2DFE3",
            secondary: "#120D31",
          },
        },
        light: {
          bg: {
            primary: "#F0F5F9",
            secondary: "#C9D6DF",
            tertiary: "#bfc7d1",
          },
          text: {
            primary: "#1E2022",
            secondary: "#52616B",
          },
          accent: {
            primary: "#BCD4DE",
            secondary: "#e1e4e6",
          },
          border: {
            primary: "#C9D6DF",
            secondary: "bg-gray-500",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
// --primary-100:#1E2022;
// --primary-200:#34373b;
// --primary-300:#F0F5F9;
// --accent-100:#788189;
// --accent-200:#e1e4e6;
// --text-100:#1E2022;
// --text-200:#52616B;
// --bg-100:#F0F5F9;
// --bg-200:#C9D6DF;
// --bg-300:#bfc7d1;
