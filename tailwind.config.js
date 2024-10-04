/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "4xl": "12 20px 20px gray",
      }, 
    },
    colors: {
      'white': {
        DEFAULT: '#FFFFFF',
      },
      'blue': {
        DEFAULT: '#404CCF',
      },
      green: {
        DEFAULT: '#22D566',
      },
      'black': {
        DEFAULT: '#323232',
      },
      'sec-blue': {
        DEFAULT: '#0D135A',
      },
      'gray': {
        DEFAULT: '#F3F5F5',
      },
    },
  },
  plugins: [],
}