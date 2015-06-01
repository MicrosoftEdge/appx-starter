var gulp = require('gulp');
var run = require('gulp-run');
var os = require('os');

gulp.task('appxregister', function() {
  if (os.platform() !== 'darwin') {
    var cwd = process.cwd();
    run('start-process powershell -verb runas -ArgumentList "-noexit", "' + cwd + '\\gulpfile.js\\AppxUtilities\\Start.ps1 ' + cwd + '"', {
      usePowerShell: true
    }).exec();
  }
});

gulp.task('appx', ['manifest'], function() {
  gulp.start('appxregister');
});
