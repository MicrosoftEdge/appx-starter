import config from '../config';
import gulp from 'gulp';
import webpack from 'webpack';
import gutil from 'gulp-util';
import * as path from 'path';
import eslint from 'gulp-eslint';

let lint = () => {
  return gulp.src(path.join(config.webpack.entry.bundle, '../**/*.js'))
  .pipe(eslint())
  .pipe(eslint.format());
}

let once = fn => {
  let done = false;
  return () => done ? void 0 : ((done = true), fn());
}

function checkErrors(err, stats) {
  if (err) {
    throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString());
  }
  if (stats.compilation.errors.length) {
    gutil.log(stats.compilation.errors[0].toString());
  }
}

gulp.task('webpack:lint', lint);

gulp.task('webpack', ['webpack:lint'], done => {
  let oncedone = once(done);
  if (config.watch) {
    webpack(config.webpack).watch(200, (err, stats) => {
      checkErrors(err, stats);
      gutil.log(gutil.colors.cyan('webpack'), 'task watching files...');
      oncedone();
    });
  } else {
    webpack(config.webpack, (err, stats) => {
      checkErrors(err, stats);
      oncedone();
    });
  }
});
