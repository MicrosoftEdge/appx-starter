var gulp = require('gulp');
var fs = require('fs');
var config = require('../config').appx;

function manifest() {
  var buffer = fs.readFileSync(config.src, 'utf-8');
  var manifest = buffer.split('\n');
  var updated = [];
  var versionBump = '';
  manifest.forEach(function(line) {
    if (~line.indexOf('<!--Build ')) {
      versionBump = line.replace(/\d+/, function(n){ return ++n; });
    } else {
      updated.push(line);
    }
  });
  updated.push(versionBump);
  fs.writeFileSync(config.src, updated.join('\n'));
}

gulp.task('manifest', manifest);
