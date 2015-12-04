import config from '../config';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import lazypipe from 'lazypipe';
import * as path from 'path';
import gutil from 'gulp-util';
import useref from 'gulp-useref';
import babel from 'gulp-babel';
import changed from 'gulp-changed';
import watch from 'gulp-watch';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import eslint from 'gulp-eslint';

gulp.task('copy', done => {
  const srcFiles = [
    path.join(config.src, '**/**'),
    '!' + path.join(config.src, 'bundles/**'),
    '!' + path.join(config.src, 'AppxManifest.xml'),
    '!' + path.join(config.src, '**/.*')
  ];

  const doJS = lazypipe()
    .pipe(eslint)
    .pipe(eslint.format)
    .pipe(babel);

  const doScss = lazypipe()
    .pipe(sourcemaps.init)
    .pipe(sass, config.sass.settings)
    .pipe(autoprefixer, { browsers: ['last 2 version'] })
    .pipe(sourcemaps.write);

  // Seems to be necessary
  const doWatch = config.watch
    ? lazypipe().pipe(watch, srcFiles)
    : lazypipe().pipe(gutil.noop);


  if (config.watch) {
    gutil.log(gutil.colors.cyan('copy'), 'task watching files...');
  }

  return gulp.src(srcFiles)
    //.pipe(gulpif(argv.watch, doWatch()))
    .pipe(doWatch())
    .pipe(changed(config.dest))
    .pipe(gulpif('*.scss', doScss()))
    .pipe(gulpif('*.js', doJS()))
    .pipe(gulp.dest(config.dest))

  done();
});
