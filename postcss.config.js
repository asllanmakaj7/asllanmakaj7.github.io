module.exports = {
    syntax: 'postcss-scss',
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('postcss-nested'), // or require('postcss-nesting')
      require('autoprefixer'),
    ],
  }