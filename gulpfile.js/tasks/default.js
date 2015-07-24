var gulp = require('gulp');
var gulpsequence = require('gulp-sequence');

gulp.task('core', ['clean', 'copy']);

gulp.task('default', gulpsequence('browserSync', 'core --watch'));

gulp.task('appx:dev', ['core', 'watchappx']);

gulp.task('ext', ['core', 'watchext']);

gulp.task('appx:ext', ['appx']);
