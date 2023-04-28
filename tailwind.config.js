/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      primary: '#282828',
      sexyGreen: '#C7DFC5',
      vibrantYellow: '#E1E99C',
      gassyGray: '#6A6A6A'
    },
    fontFamily: {
      'sarabun': ['Sarabun', 'sans-serif'],
      'cormorant': ['Cormorant', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

