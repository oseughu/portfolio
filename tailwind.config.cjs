const daisyui = require('daisyui')

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
    fontFamily: {
      marck: ['"Dancing Script"', 'cursive'],
      sans: ['Nunito', 'sans-serif']
    }
  },

  plugins: [daisyui]
}

module.exports = config
