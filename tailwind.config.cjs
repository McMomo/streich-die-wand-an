const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  darkMode: false,
  theme: {
    colors: {
      white: colors.white,
      gray: colors.warmGray,
      black: colors.black,
      'kurz-green': '#468038',
      'kurz-brown': '#a37243',
      'kurz-white': '#FFF',
      'alt-white': '#FFFCF0',
      'kurz-gray': '#2a2a2a'
    },
  },
  variants: {
    extend: { inset: ['active'] },
  },
  plugins: [
  	require('@tailwindcss/aspect-ratio'),
  ],
}
