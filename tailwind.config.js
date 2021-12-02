const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Libre Baskerville"],
        serif: ["Sanchez"],
        body: ["ABeeZee"],
        mono: ["Fira Code"],
      },
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "	1280px",
      "2xl": "1536px",
    },
    colors: {
      mypink: "#EC9192",
      mylightpink: "#F0A8A9",
      myblack: "#222222",
      myblue: "#5C95FF",
      mywhite: "#FFFDF7",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
  },
  variants: {
    extend: {
      borderStyle: ["responsive", "hover"],
      borderWidth: ["responsive", "hover"],
      fontFamily: ["hover", "focus"],
      boxShadow: ["active"],
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
