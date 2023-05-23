/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },   
    colors: {
      transparent: "transparent",
      primary: "#010B40",
      secondary: "#F2F2F2",
      "green-light": "#cceeec",
      green: "#007c85",
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
    },

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
}

