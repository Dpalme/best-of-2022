/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: 'Jost, sans-serif',
      animation: {
        'slide-left': 'slide-left .2s cubic-bezier(0, 0, 0.2, 1)',
        'slide-right': 'slide-right .2s cubic-bezier(0, 0, 0.2, 1)',
        'squeeze': 'squeeze 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        'squeeze': {
          '0%,100%': { transform: 'scaleY(100%)' },
          '50%': { transform: 'scaleY(70%)' }
        }
      }
    },
  },
  plugins: [],
}