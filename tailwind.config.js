/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        discord: '#5865F2',
        herald: '#525F25',
        guardian: '#4A3117',
        crusader: '#168079',
        archon: '#73A980',
        legend: '#5F002F',
        ancient: '#7348A6',
        divine: '#D7C349',
        immortal: '#98221',
      },
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
  daisyui: {
    themes: [
      'black',
      'light',
      'cupcake',
      'dark',
    ],
  }
}

