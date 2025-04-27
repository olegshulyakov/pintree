module.exports = {
  mode: 'jit',
  purge: ['./**/*.html', './js/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'ui-sans-serif', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}