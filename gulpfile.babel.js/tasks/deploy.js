import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
import config from '../config';

gulp.task('deploy', () => {
  return gulp.src(config.deploy.src)
  .pipe(ghPages())
});
