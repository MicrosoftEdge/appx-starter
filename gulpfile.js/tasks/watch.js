/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp');
var config   = require('../config');
var watchify = require('./browserify')
var watch = require('gulp-watch');

gulp.task('watch', ['watchify','browserSync']);

gulp.task('watchappx', ['watchify','browserSync'], function(callback) {
  //standardTasks();
  //gulp.start('appx');
});

gulp.task('watchext', ['watchify','browserSync'], function(callback) {
  //gulp.start('ngrok');
  //standardTasks();
});
