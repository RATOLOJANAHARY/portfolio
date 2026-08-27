/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // bleu (exemple)
        secondary: "#F59E0B", // orange (exemple)
      },
    },
  },
  plugins: [],
};
