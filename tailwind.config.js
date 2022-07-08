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
      blueTheme: {
        300: '#4263EB',
        400: '#364FC7',
        900: '#00082F',
      }
    }
  },
  plugins: [],
}