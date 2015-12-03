import gulp from 'gulp';
import config from '../config';
import del from 'del';

gulp.task('clean', done => {
  del([config.clean.src], done);
});
