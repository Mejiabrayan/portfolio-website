const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        gray: {
          0: '#fff',
          100: '#ededed',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#111010',
          800: '#222222',
          900: '#171717',
          910: '#161616',
          'gradient-start': '#111010',
          'gradient-mid': '#100C0B',
          'gradient-end': '#9B8074',
        },
        mustard: {
          100: '#d1f229',
          200: '#cde11f',
          300: '#c9d015',
          400: '#c5c90b',
        }
      },
        fontFamily: {
        sans: ["var(--body)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
    },

    plugins: [],
  },
};
