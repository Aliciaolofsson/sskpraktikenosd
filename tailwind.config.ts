module.exports = {
  purge: {
    content: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
    options: {
      // Specify additional content files if needed.
    },
  },
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#E7007E',
        secondary: '#C1006B',        
        third: '#750041',
        thirdDark: '#420025',
        text: '#fff',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // Add any additional plugins here.
  ],
}
