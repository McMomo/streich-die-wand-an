const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  darkMode: false,
  theme: {
    colors: {
      white: colors.white,
      gray: colors.warmGray,
      'kurz-green': '#468038',
      'kurz-brown': '#a37243',
      'kurz-white': '#FFFCF0'
    },
  },
  variants: {
    extend: { inset: ['active'] },
  },
  plugins: [
  	require('@tailwindcss/aspect-ratio'),
  ],
}
