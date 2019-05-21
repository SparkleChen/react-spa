var path = require('path');
module.exports = {
    resolve: {
       modules:[path.resolve(__dirname,'node_modules')],
       extensions: ['.js', '.css', '.json'],
       mainFields: ['main']
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react']
              }
            }
          }
        ]
      }
}