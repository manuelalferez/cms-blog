// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "320px",
      md: "375px",
      lg: "425px",
      xl: "768px",
      "2xl": "1024px",
    },
  },
  variants: {
    extend: {
      borderStyle: ["responsive", "hover"],
      borderWidth: ["responsive", "hover"],
    },
  },
  plugins: [],
};
