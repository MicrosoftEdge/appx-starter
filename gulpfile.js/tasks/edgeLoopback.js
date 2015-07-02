var gulp = require('gulp');
var run = require('gulp-run');

gulp.task('edge-loopback', function() {
  run('CheckNetIsolation LoopbackExempt -a -n="Microsoft.MicrosoftEdge_8wekyb3d8bbwe"', {
    usePowerShell: true
  }).exec();
});
