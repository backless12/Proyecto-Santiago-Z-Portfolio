/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        sourceCode: ["Source Code Pro", "monospace"],

      },
      colors: {
        'custom-color-pink': '#d4939d',
        'custom-color-blue': '#d4d8f0',
        'custom-color-violet': '#a786df',
        'custom-color-dark-blue': '#232946',
      }
    },
  },
  plugins: [],
};

