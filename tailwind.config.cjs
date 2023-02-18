/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "beyond-infinity": ["Beyond Infinity", "sans-serif"],
      Kristi: ["Kristi", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss-font-inter")({
      // font family name
      family: "Inter",
      // weight variants to generate
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    }),
  ],
};
