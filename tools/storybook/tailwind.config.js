/** @type {import('tailwindcss').Config} */

const baseConfig = require("../../tailwind.config");

export default {
  presets: [baseConfig],
  content: [
    "../../apps/*/src/**/*.{js,ts,jsx,tsx}",
    "../../libs/*/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#E6FFFA",
        "primary-200": "#B2F5EA",
        "primary-300": "#81E6D9",
        "primary-400": "#4FD1C5",
        "primary-500": "#38B2AC",
        "primary-600": "#319795",
        "primary-700": "#2C7A7B",
        "primary-800": "#285E61",
        "primary-900": "#234E52",
      },
    },
  },
  plugins: [],
};
