var config = require('../config');

var gulp = require('gulp');
var gulpif = require('gulp-if');
var lazypipe = require('lazypipe');
var path = require('path');
var fs = require('fs');

var changed = require('gulp-changed');
var watch = require('gulp-watch');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('copy', function() {
  var watching = true;
  var srcFiles = [
    path.join(config.src, '**/**'),
    '!' + path.join(config.src, 'bundles/**'),
    '!' + config.appx.src,
  ];
  var doWatch = lazypipe().pipe(watch, srcFiles);

  var doLint = lazypipe()
    .pipe(jshint)
    .pipe(jshint.reporter, stylish);

  var doScss = lazypipe()
    .pipe(sourcemaps.init)
    .pipe(sass, config.sass.settings)
    .pipe(autoprefixer, { browsers: ['last 2 version'] })
    .pipe(sourcemaps.write);

  gulp.src(srcFiles)
    .pipe(gulpif(watching, doWatch()))
    .pipe(changed(config.dest))
    .pipe(gulpif('*.scss', doScss()))
    .pipe(gulpif('*.js', doLint()))
    .pipe(gulp.dest(config.dest));
});
