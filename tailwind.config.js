/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
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