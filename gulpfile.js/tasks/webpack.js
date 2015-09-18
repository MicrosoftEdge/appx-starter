'use strict';
var config = require('../config');
var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');

function checkErrors(err, stats) {
  if (err) {
    throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString());
  }
  if (stats.compilation.errors.length) {
    gutil.log(stats.compilation.errors[0].toString());
  }
}

gulp.task('webpack', function(done) {
  if (config.watch) {
    webpack(config.webpack).watch(200, function(err, stats) {
      checkErrors(err, stats);
      gutil.log(gutil.colors.cyan('webpack'), 'task watching files...');
    });
  } else {
    webpack(config.webpack, function(err, stats) {
      checkErrors(err, stats);
      done();
    });
  }
});
