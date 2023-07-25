/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primLight:'#c3edc0',
        primDark:'#164b60',
        textLight:'#1b6b96',
        textDark:'#E9FFC2',
      }
    },
    screens: {
      'tab': '880px',
      'tel': '450px',
      'lg': '1300px'
    },
  },
  plugins: [],
}

