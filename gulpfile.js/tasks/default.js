var gulp = require('gulp');
var gulpsequence = require('gulp-sequence');

gulp.task('core', gulpsequence('clean', 'copy', 'webpack'));

gulp.task('default', gulpsequence('browserSync', 'core', 'webpack'));

gulp.task('appx:dev', ['default', 'appx']);
