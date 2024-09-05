/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      light: "#fff",
      dark: "#000",
      aquamarine: {
        50: "#e7fff9",
        100: "#c6fff0",
        200: "#92ffe6",
        300: "#4dffdf",
        400: "#00ffd1",
        500: "#00e8bc",
        600: "#00be9b",
        700: "#009881",
        800: "#007867",
        900: "#006256",
        950: "#003832",
      },
    },
    extend: {},
  },
  plugins: [],
};
