var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var webpack = require('webpack-stream');
 
gulp.task('jasmine', function() {
  var JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
  var plugin = new JasminePlugin();
  return gulp.src(['spec/**/*_spec.js'])
    .pipe(webpack({watch: true,
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
              'react'
            ]
          }
        }]
      },
      output: {filename: 'spec.js'}, 
      plugins: [plugin]}))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});