/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#F0F5FF',
        borders: '#828997',
        'btn-dark-bkgr': '#9ACA3C',
        'btn-light-bkgr': '#B6D973',
        'dark-blue': '#0D477B',
        headlines: '#212529',
        lock: '#707070',
        'lock-bg': '#F3F3F3',
        error: '#BA0000',
        orange: '#FABE16',
        'microscopy-label': '#525965',
        bodycopy: '#343B41',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.font-format-title': { fontSize: '34px', fontWeight: '700' },
        '.font-format-subtitle': { fontSize: '20px', lineHeight: '26px', fontWeight: '400' },
        '.font-format-card-title': { fontSize: '20px', lineHeight: '26px', fontWeight: '600' },
        '.font-format-card-title-big': { fontSize: '28px', fontWeight: '600' },
        '.font-format-body': { fontSize: '16px', lineHeight: '21px', fontWeight: '400' },
        '.font-format-body-semibold': { fontSize: '16px', lineHeight: '21px', fontWeight: '600' },
        '.font-format-micro': { fontSize: '14px', fontWeight: '400' },
        '.font-format-micro-semibold': { fontSize: '14px', fontWeight: '600' },
        '.font-format-heading-h1': { fontSize: '40px', lineHeight: '60px', fontWeight: '700' },
        '.font-format-heading-button': { fontSize: '16px', fontWeight: '700' },
        '.font-format-label': { fontSize: '16px', fontWeight: '700' },
        '.font-format-label-large': { fontSize: '32px', fontWeight: '600' },
      })
    })
  ],
}