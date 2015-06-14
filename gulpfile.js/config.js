var dest = './build';
var src = './src';
var port = 3000;

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest,
      port: port
    }
  },
  sass: {
    src: src + '/sass/*.{sass,scss}',
    dest: dest,
    settings: {
      // Required if you want to use SASS syntax
      // See https://github.com/dlmanning/gulp-sass/issues/81
      sourceComments: 'map',
      imagePath: '/images' // Used by the image-url helper
    }
  },
  lint: {
    src: [src + '/bundles/**/*.js', src + '/misc/**/*.js']
  },
  images: {
    src: src + '/images/**',
    dest: dest + '/images'
  },
  markup: {
    src: [src + '/htdocs/**/*.html', '!**/templates/**'],
    watch: src + '/htdocs/**/*.html',
    dest: dest,
    swig: {
      defaults: {cache: false}
    }
  },
  misc: {
    src: src + '/misc/**',
    dest: dest
  },
  ngrok: {
    port: port
  },
  appx: {
    src: src + '/appxmanifest.xml',
    dest: dest + '/appxmanifest.xml'
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/bundles/main.js',
      dest: dest,
      outputName: 'main.js',
      // list of modules to make require-able externally
      require: ['jquery', 'underscore']
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  },
  clean: {
    src: dest
  },
  deploy: {
    src: dest + '/**/*'
  }
};
