const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  exposeConfig: true,
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
