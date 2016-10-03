module.exports = {
  entry: "./app/javascripts/main.js",
  output: {
      path: __dirname,
      filename: "static/bundle.js"
  },
  module: {
      loaders: [
          { test: /\.css$/, loader: "style!css" },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: [
                'es2015', 
                'react',
                'react-hmre'
              ]
            }
          }
          
      ]
  }
};