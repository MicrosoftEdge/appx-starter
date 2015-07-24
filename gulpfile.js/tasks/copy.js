var config = require('../config');

var gulp = require('gulp');
var gulpif = require('gulp-if');
var lazypipe = require('lazypipe');
var path = require('path');
var fs = require('fs');
var argv = require('yargs').argv;
var gutil = require('gulp-util');

var changed = require('gulp-changed');
var watch = require('gulp-watch');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('copy', function(done) {
  var srcFiles = [
    path.join(config.src, '**/**'),
    '!' + path.join(config.src, 'bundles/**'),
    '!' + path.join(config.src, 'AppxManifest.xml')
  ];

  var doLint = lazypipe()
    .pipe(jshint)
    .pipe(jshint.reporter, stylish);

  var doScss = lazypipe()
    .pipe(sourcemaps.init)
    .pipe(sass, config.sass.settings)
    .pipe(autoprefixer, { browsers: ['last 2 version'] })
    .pipe(sourcemaps.write);

  // Seems to be necessary
  var doWatch = argv.watch
    ? lazypipe().pipe(watch, srcFiles)
    : lazypipe().pipe(gutil.noop);

  gulp.src(srcFiles)
    .pipe(gulpif(argv.watch, doWatch()))
    .pipe(changed(config.dest))
    .pipe(gulpif('*.scss', doScss()))
    .pipe(gulpif('*.js', doLint()))
    .pipe(gulp.dest(config.dest));
});
