var gulp = require('gulp');
var gulpsequence = require('gulp-sequence');

gulp.task('core', gulpsequence('clean', 'copy', 'webpack'));

gulp.task('default', gulpsequence('clean', 'browserSync', 'copy', 'webpack'));

gulp.task('production', gulpsequence('core', 'minify'));

gulp.task('appx:dev', ['default', 'appx']);
