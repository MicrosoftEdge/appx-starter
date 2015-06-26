var gulp = require('gulp');
var config = require('../config').nodeCopy;
var pkg = require('../../package.json');
var browserSync = require('browser-sync');

gulp.task('node-copy', function() {
  if (pkg['node-copy']) {
    return gulp.src(pkg['node-copy'], {base: '.'})
      .pipe(gulp.dest(config.dest))
      .pipe(browserSync.reload({stream:true}));
  } else {
    return void 0;
  }
});
