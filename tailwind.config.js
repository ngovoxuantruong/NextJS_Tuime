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
      screens: {
        '2xl': '1400',
      },
    },
    extend: {
      screens: {
        large: { max: '1199px' },
        // => @media (max-width: 1199px) { ... }
        desktop: '1200px',
        // => @media (min-width: 1200px) { ... }
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
          'base-200': '#181818',
        },
      },
    ],
    styled: true,
  },
};
