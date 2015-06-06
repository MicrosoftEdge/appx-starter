var changed    = require('gulp-changed');
var gulp       = require('gulp');
var config     = require('../config').misc;

gulp.task('misc', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});
