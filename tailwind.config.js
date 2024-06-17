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
        softOrange: '#F3A457',
        pdorange: '#F37135',
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
      fontFamily: {
        'amatic-sc': ['"Amatic SC", sans-serif'],
        'hammersmith-one': ['"Hammersmith One"', 'sans-serif'],
      },
      dropShadow: {
        'custom-dark': '0 2px 2px rgba(0, 0, 0, 0.7)',
        'custom-tight-dark': '0 2px 2px rgba(0, 0, 0, 1)',
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

