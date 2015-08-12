'use strict';
var config = require('../config');
var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');

gulp.task('webpack', function(done) {
  if (config.watch) {
    webpack(config.webpack).watch(200, function(err, stats) {
      if (err) {
        console.log(err);
      }
      gutil.log(gutil.colors.cyan('webpack'), 'task watching files...');
    });
  } else {
    webpack(config.webpack, function(err, stats) {
      if (err) {
        console.log(err);
      }
      done();
    });
  }
});
