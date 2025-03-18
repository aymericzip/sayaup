/** @type {import('tailwindcss').Config} */

import baseConfig from "../../tailwind.config";

module.exports = {
  presets: [baseConfig],

  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../libs/**/src/*.{js,ts,jsx,tsx}",
    "../../libs/**/dist/*.{js,ts,jsx,tsx}",
  ],
};
