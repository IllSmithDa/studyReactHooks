/** @type {import('tailwindcss').Config} */
// https://stackoverflow.com/questions/72944736/why-is-tailwindcss-not-working-when-building-my-vite-project
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
