import config from '../config';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import minifyCSS from 'gulp-minify-css';
import uglify from 'gulp-uglify';
import size from 'gulp-filesize';

gulp.task('minify', () => {
  return gulp.src(config.dest + '/**/**')
    .pipe(gulpif('*.css', minifyCSS()))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
