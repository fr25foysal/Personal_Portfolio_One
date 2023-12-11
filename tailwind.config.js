/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#5c6ac4',
      secondary: '#ecc94b',
      transparent: 'transparent',
      "black": "#000000",
      "white": "#ffffff",
      "react": "#61DBFB"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

