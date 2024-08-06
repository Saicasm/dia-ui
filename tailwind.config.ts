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
            primary: "#f2f2f2",
            secondary: "#52616B",
          },
          accent: {
            primary: "#587f2f",
            secondary: "#e1e4e6",
          },
          border: {
            primary: "#e5e5e5",
            secondary: "bg-gray-500",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(#549fc0, #013558 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
