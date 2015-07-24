var gulp = require('gulp');
var gulpsequence = require('gulp-sequence');

gulp.task('core', gulpsequence('clean', 'copy'));

gulp.task('default', gulpsequence('core', 'browserSync'));

gulp.task('appx:dev', ['default', 'appx']);
