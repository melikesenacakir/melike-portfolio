/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     colors: {
        darkBlue: '#182848',
        lightBlue: '#4B6CB7',
        cuteBlue: '#4BB1C5',
        navyBlue: '#080C46'
     },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        }
      },
    },
  },
  plugins: [],
};
