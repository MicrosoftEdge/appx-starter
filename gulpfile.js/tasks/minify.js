var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var size = require('gulp-filesize');

gulp.task('minify', function() {
  return gulp.src(config.dest + '/**/**')
    .pipe(gulpif('*.css', minifyCSS()))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
