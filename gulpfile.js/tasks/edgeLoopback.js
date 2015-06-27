var gulp = require('gulp');
var run = require('gulp-run');

gulp.task('edge-loopback', function() {
  run('start-process powershell -verb runas CheckNetIsolation LoopbackExempt -a -n=Microsoft.Windows.Spartan_cw5n1h2txyewy', {
    usePowerShell: true
  }).exec();
});
