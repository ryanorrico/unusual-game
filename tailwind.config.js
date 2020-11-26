// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        cyan: colors.cyan,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        green: colors.emerald,
        gray: colors.trueGray,
        orange: colors.orange,
        pink: colors.pink,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
