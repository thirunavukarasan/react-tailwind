module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.js'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
  prefix: 'tru-'
}
