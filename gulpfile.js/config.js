var dest = './dist';
var src = './src';
var port = 3000;

module.exports = {
  src: src,
  dest: dest,
  browserSync: {
    server: {
      baseDir: dest,
      port: port
    }//,
    //files: [dest + '/dist/**']
  },
  sass: {
    settings: {
      sourceComments: 'map',
      imagePath: '/img' // Used by the image-url helper
    }
  },
  appx: {
    src: src + '/AppxManifest.xml'
  },
  ngrok: {
    port: port
  },
  browserify: {
    bundleConfigs: [{
      entries: src + '/bundles/bundle.js',
      dest: dest + '/bundles',
      outputName: 'bundle.js'
    }]
  },
  production: {
    cssSrc: dest + '/**/*.css',
    jsSrc: dest + '/**/*.js',
    dest: dest
  },
  clean: {
    src: dest
  },
  deploy: {
    src: dest + '/**/*'
  }
};
