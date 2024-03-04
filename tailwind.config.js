/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        img: "url('./src/Header/Images/header-01.jpg')",
      },

      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      container: {
        center: true,
      },
    },
    plugins: [],
  },
});
