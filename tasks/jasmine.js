const gulp = require('gulp');
const jasmineBrowser = require('gulp-jasmine-browser');
const webpack = require('webpack-stream');

const moduleLoaders = {loaders: [
        { test: /\.css$/, loader: "style!css" },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {presets: ['es2015', 'react']}
        }
      ]
    };
 
gulp.task('jasmine', function() {
  const JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
  const plugin = new JasminePlugin();
  return gulp.src(['spec/**/*_spec.js'])
    .pipe(webpack({watch: true,
      module: moduleLoaders,
      output: {filename: 'spec.js'}, 
      plugins: [plugin]}))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});

gulp.task('spec', function() {
  const JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
  const plugin = new JasminePlugin();
  return gulp.src(['spec/**/*_spec.js'])
    .pipe(webpack({watch: false,
      module: moduleLoaders,
      output: {filename: 'spec.js'},
      plugins: [plugin]}))
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless({driver: 'phantomjs'}))
    .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});