/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#BAF247",
        secondColor: "#ADE549",
        grayColor: "#D2D2D2",
        oliveColor: "#b5cc18"
      }
    },
  },
  plugins: [],
}