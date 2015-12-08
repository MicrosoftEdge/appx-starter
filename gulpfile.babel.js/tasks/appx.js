import gulp from 'gulp';
import config from '../config';
import * as path from 'path';
import * as os from 'os';

let registerApp = null;
if (os.platform() === 'win32') {
  try {
    registerApp = require('hwa');
  } catch (err) {
    console.log(err);
  }
}

gulp.task('appx', done => {
  if (registerApp) {
    registerApp(path.resolve(config.appx.src));
  } else {
    console.log('You need to be running Windows 10 launch the app');
  }

  done();
});
