/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    transparent: "transparent",
    primary: "#010B40",
    secondary: "#8090A6",
    "green-light": "#8090A6",
    green: "#131A40",
    "green-dark": "#065a68",
    "blue-light": "#b3d6f1",
    blue: "#0074d1",
    "blue-dark": "#072344",
    black: "#000000",
    white: "#ffffff",
    "yellow-lighter": "#f6e8c6",
    "yellow-light": "#f8edd0",
    yellow: "#f4d06f",
    "yellow-dark": "#daa512",
    "grey-lightest": "#eff0f3",
    "grey-lighter": "#eceef1",
    "grey-light": "#ccd7e0",
    grey: "#adb6c4",
    pink: "rgb(248 113 113)",
    bg: "#fef0f3",
  },
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
    colors: colors,

    border: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
    },

    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      modifiers: [],
    }),
    require("@tailwindcss/forms"),
  ],
};
