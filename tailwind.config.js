/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: '#1A1D21',
      lightBlack1: '#262B31',
      lightBlack2: '#464F59',
      yellow: '#FFAE40',
      lightBrown1: '#CFC7C3',
      lightBrown2: '#F2ECE8',
      white: '#E6E7E9',
    }
  },
  plugins: [],
}