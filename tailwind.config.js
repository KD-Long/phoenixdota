/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1/2': '50%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '1/10': '10%',
        '1/3': '33.333%',
        '2/3': '66.667%',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

