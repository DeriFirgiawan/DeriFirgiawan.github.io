module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'md': {'max': '991.98px'}
    },
    extend: {
      screens: {
        'xs': {'max': '575.98px'}
      },
      colors: {
        black: '#444444',
        gray: {
          100: '#E7E7E7',
          400: '#999999',
          500: '#666666'
        }
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['responsive', 'hover'],
      fontSize: ['hover']
    },
  },
  plugins: [],
}