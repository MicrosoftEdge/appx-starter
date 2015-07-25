'use strict';
var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync').create('AppX Server');
var ngrok = require('ngrok');
var argv = require('yargs').argv;

gulp.task('browserSync', function(done) {
  config.watch = true;
  if (argv.ext) {
    ngrok.connect(config.ngrok, function(err, url) {
      if (err) {
        console.log(err);
      } else {
        console.log('external URL: ' + url);
      }
    });
  }
  browserSync.watch('./dist/**').on('change', browserSync.reload);
  browserSync.init(config.browserSync, done);
});
