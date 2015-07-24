var gulp = require('gulp');
var exec = require('child_process').exec;
var os = require('os');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var fs = require('fs');
var config = require('../config').appx;

gulp.task('appxregister', function(done) {

  var buffer = fs.readFileSync(config.src, 'utf-8');
  parser.parseString(buffer, function(err, result) {
    var guid = result.Package.Identity[0]['$'].Name;

    if (os.platform() === 'win32') {
      var cwd = process.cwd();
      exec('start-process powershell runas -noexit ', +
           path.join(cwd, 'gulpfile.js/AppxUtilities/Start.ps1') + ' ' +
           cwd + ' ' + guid,
      function(err, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (err) {
          console.log('error: ' + err);
        }
        done();
      });
    }
  });
});

gulp.task('appx', ['manifest'], function() {
  gulp.start('appxregister');
});
