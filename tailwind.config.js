/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'first': "url('/src/assets/happyweekend.webp')",
      }
    },
  },
  plugins: [],
}