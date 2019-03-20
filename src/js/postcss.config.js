// npm install postcss-loader autoprefixer css-mqpacker cssnano precss --save-dev

module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          }
        }
      ]
    })    
  ]
}