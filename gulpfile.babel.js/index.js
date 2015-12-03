/*
  gulpfile
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  gulp/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/
import gulp from 'gulp';
import gulpsequence from 'gulp-sequence';
import requireDir from 'require-dir';
import config from './config';

// Require all tasks in gulp/tasks, including subfolders
requireDir('./tasks', { recurse: true });

gulp.task('core', gulpsequence('clean', ['copy', 'webpack']));

gulp.task('default', gulpsequence('core', 'browserSync', ['webpack', 'copy']));

gulp.task('production', gulpsequence('core', 'minify'));

gulp.task('appx:dev', gulpsequence('core','browserSync', ['webpack', 'copy', 'appx']));
