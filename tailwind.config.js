/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        'aurous-darkGreen': '#00382B',
        'aurous-emeraldAccent': '#059669',
        'aurous-yellow': '#FFC800',
      },
    },
  },
  plugins: [],
};
