// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira"],
        sans: ["Fira", "sans-serif"],
      },
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "	1280px",
      "2xl": "1536px",
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
