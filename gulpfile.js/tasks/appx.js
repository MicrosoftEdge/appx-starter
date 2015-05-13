var gulp = require('gulp');

var run = require('gulp-run');

gulp.task('appxold', function() {
  var cwd = process.cwd();
  run('start-process powershell -verb runas -ArgumentList "Set-ExecutionPolicy Unrestricted"', {
    usePowerShell: true
  }).exec();
  run('start-process powershell -verb runas -ArgumentList "-noexit","dir ' + cwd + '/gulpfile.js/AppxUtilities/*.ps1 | Unblock-File"', {
    usePowerShell: true
  }).exec()
  run('start-process powershell -verb runas -ArgumentList "-noexit","' + cwd + '/gulpfile.js/AppxUtilities/Add-AppxPackageExt.ps1 ' + cwd + '/src/AppxManifest.xml"', {
    usePowerShell: true
  }).exec()
});


gulp.task('appx', function() {
  var cwd = process.cwd();
  run('start-process powershell -verb runas -ArgumentList "-noexit", "' + cwd + '\\gulpfile.js\\AppxUtilities\\Start.ps1 ' + cwd + '"', {
    usePowerShell: true
  }).exec();

});
