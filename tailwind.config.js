/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {
          'min': '0px', 'max': '640px'
        },
        'sm': {
          'min': '641px', 'max': '768px'
        },
      },
      colors: {
        'primary': '#05cbf7',
        'secondary': '#fff',
        'dark': '#000',
        'dark-light': '#6a7280',
        'dark-lighter': '#D1D5DB',
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
        'float': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'left': 'left 0.5s ease-in-out forwards',
        'right': 'right 0.5s ease-in-out forwards',
        'floating': 'float 4s infinite',
      },
    },
  },
  plugins: [],
}

