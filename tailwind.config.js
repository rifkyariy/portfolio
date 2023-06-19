/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        // you can either spread `colors` to apply all the colors
        ...colors,
        primary: '#2771D8',
        secondary: '#D9D9D9',
        accent: '#9f7aea',
        error: '#f56565',
        info: '#4299e1',
        success: '#38b2ac',
        warning: '#ed8936',
        dark: '#1C1B21',
        light: '#F8F8F8',
        transparent: 'transparent',
        neon: '#83FA26',
        darkAccent: '#312F3D',
      },
      screens: {
        'sm': '0px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}
