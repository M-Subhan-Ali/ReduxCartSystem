/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'xs': '374px', // Custom breakpoint at 420px
      },
    },
  },
  plugins: [],
}

