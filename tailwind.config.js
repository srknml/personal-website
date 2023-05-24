/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-darkmode="dark"]'],
  // &[data-darkmode="true"]
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "md-max": { max: "767px" },
      md: "768px",
    },
    extend: {},
  },
  plugins: [],
};
