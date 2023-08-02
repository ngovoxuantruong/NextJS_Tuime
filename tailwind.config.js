/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
  },

  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    themes: [
      {
        myTheme: {
          primary: '#721b65',
          secondary: '#ffd868',
          accent: '#4ca240',
          neutral: '#474654',
          'base-100': '#fff',
        },
      },
      'cmyk',
      'dark',
    ],
    styled: true,
  },
};
