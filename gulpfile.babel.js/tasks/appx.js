import gulp from 'gulp';
import {exec} from 'child_process';
import * as os from 'os';
import xml2js from 'xml2js';
import * as fs from 'fs';
import config from '../config';
import * as path from 'path';

const parser = new xml2js.Parser();

gulp.task('appxregister', done => {
  const buffer = fs.readFileSync(config.appx.src, 'utf-8');
  parser.parseString(buffer, function(err, result) {
    const guid = result.Package.Identity[0]['$'].Name;

    if (os.platform() === 'win32') {
      const cwd = process.cwd();
      exec('powershell -noprofile -ExecutionPolicy Bypass -Command "& {Start-Process PowerShell -ArgumentList \'-NoProfile -ExecutionPolicy Bypass -File "' +
           path.join(cwd, 'gulpfile.js/AppxUtilities/Start.ps1') +
           ' ' + cwd + ' ' + guid + '"\' -Verb Runas}"; ',
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
