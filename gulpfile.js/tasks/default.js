var gulp = require('gulp');

gulp.task('default', ['clean','sass', 'lint', 'images', 'markup', 'misc', 'watch']);

gulp.task('appx:dev', ['clean', 'sass', 'lint', 'images', 'markup', 'misc', 'watchappx']);
