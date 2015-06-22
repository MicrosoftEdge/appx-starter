var gulp = require('gulp');

gulp.task('core', ['clean', 'sass', 'lint', 'images', 'markup', 'misc', 'js', 'node-copy']);

gulp.task('default', ['core', 'watch']);

gulp.task('appx:dev', ['core', 'watchappx']);

gulp.task('ext', ['core', 'watchext']);

gulp.task('appx:ext', ['appx']);
