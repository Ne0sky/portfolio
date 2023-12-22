/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Sedgwick Ave Display', 'cursive'],
        'secondary': ['Special Elite', 'seriff'],
        'tertiary':['Montserrat'],
        'special': ["Kalnia"]

    },
    animation: {
      'spin-slow': 'spin 10s linear infinite',
      'spin-slow-2' : 'spin 8s linear infinite'
    }
  }
  },
  plugins: [],
}

