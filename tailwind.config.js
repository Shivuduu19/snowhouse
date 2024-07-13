/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'uml': { 'max': '991px' },
      'tablet': { 'max': '767px' }
    },
    extend: {
      animation: {

        scrollhorizantal2: 'scrollHorizontal2 45s linear infinite',
      },
      keyframes: {
        scrollHorizontal2: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' }
        }
      },
      fontFamily: {
        aeonik: ['Aeonik', 'sans-serif'],
        aeonikMedium: ["Aeonik Medium", 'sans-serif']
      }

    },
  },
  plugins: [],
}