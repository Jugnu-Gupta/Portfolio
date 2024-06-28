/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#05cbf7',
        'secondary': '#fff',
        'dark': '#000',
        'dark-light': '#6a7280',
      },
      keyframes: {
        'left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'left': 'left 0.5s ease-in',
        'right': 'right 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

