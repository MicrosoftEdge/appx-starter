var gulp = require('gulp');
var config = require('../config');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var path = require('path');
var util = require('util');
var fs = require('fs');

var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var watch = require('gulp-watch');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var autoprefixer = require('gulp-autoprefixer');

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var lazypipe = require('lazypipe');
var pipe = require('multipipe');

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

  var stream = gulp.src(srcFiles)
    .pipe(gulpif(watching, doWatch()))
    .pipe(changed(config.dest))
    .pipe(gulpif('*.scss', doScss()))
    .pipe(gulpif('*.js', doLint()))
    //.pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest(config.dest));

    stream.on('data', function(chunk) {
      var filepath = chunk.path;
      fs.lstat(filepath, function(err, stats) {
        if (!err && stats.isFile()) {
          var file = filepath.split(path.sep);
          var len = file.length;
          console.log('copied: ' + file.slice(len - 2, len).join(path.sep));
        }
      });
    });
});
