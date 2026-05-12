/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'taeil-light': '#55B76F',
        'taeil-dark': '#40776D',
      },
    },
  },
  plugins: [],
}
