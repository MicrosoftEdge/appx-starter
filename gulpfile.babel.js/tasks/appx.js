import gulp from 'gulp';
import config from '../config';
import * as path from 'path';
import {registerApp} from 'hwa';

gulp.task('appx', done => {
  registerApp(path.resolve(config.appx.src));
  done();
});
