var gulp = require('gulp');

gulp.task('default', ['sass', 'lint', 'images', 'markup', 'watch']);

gulp.task('appx:dev', ['sass', 'lint', 'images', 'markup', 'watchappx']);
