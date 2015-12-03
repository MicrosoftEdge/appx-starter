import {create as createBSync} from 'browser-sync';
import config from '../config';
import gulp from 'gulp';
const browserSync = createBSync('AppX Server');
import {argv} from 'yargs';
import ngrok from 'ngrok';

gulp.task('browserSync', done => {
  config.watch = true;
  if (argv.ext) {
    ngrok.connect(config.ngrok, (err, url) => {
      if (err) {
        console.log(err);
      } else {
        console.log('external URL: ' + url);
      }
    });
  }
  browserSync.watch('./dist/**').on('change', browserSync.reload);
  browserSync.init(config.browserSync, done);
});
