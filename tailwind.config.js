/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      whiteTheme: {
        800: '#EDF2FF',
        900: '#EDF2FF',
      },
      redTheme: {
        600: '#dc2626',
        700: '#b91c1c',
        900: '#7f1d1d',
      }
    }
  },
  plugins: [],
}