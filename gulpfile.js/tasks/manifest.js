var gulp = require('gulp');
var fs = require('fs');

var parser = new xml2js.Parser({parseComments: true});

function manifest() {
  var buffer = fs.readFileSync('./src/AppxManifest.xml', 'utf-8');
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
  fs.writeFileSync('./src/AppxManifest.xml', updated.join('\n'));
}

gulp.task('manifest', manifest);
