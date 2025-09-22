/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     colors: {
        darkBlue: '#182848',
        lightBlue: '#4B6CB7',
        cuteBlue: '#4BB1C5',
     },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
