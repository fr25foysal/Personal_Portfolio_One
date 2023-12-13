/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "react": '#61DBFB'
        }
        }]
      },
  theme: {
    colors: {
    //   primary: '#5c6c4',
    //   secondary: '#ecc94b',
    //   transparent: 'transparent',
      "black": "#000000",
      "white": "#ffffff",
      "react": "#61DBFB",
    //   success: '#61DBFB'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

