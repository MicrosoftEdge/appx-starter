var gulp = require('gulp');

gulp.task('default', ['clean','sass', 'lint', 'images', 'markup', 'misc', 'watch']);

gulp.task('appx:dev', ['clean', 'sass', 'lint', 'images', 'markup', 'misc', 'watchappx']);

gulp.task('ext', ['clean', 'sass', 'lint', 'images', 'markup', 'misc', 'watchext']);

gulp.task('appx:ext', ['appx']);
