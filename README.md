Build system for Windows 10 App Demos
============

Starter Gulp + Browserify project + Appx Tools

Includes the following tools, tasks, and workflows:

- [Browserify](http://browserify.org/) (with [browserify-shim](https://github.com/thlorenz/browserify-shim))
- Windows 10 Hosted App Build System
- [Watchify](https://github.com/substack/watchify) (caching version of browserify for super fast rebuilds)
- [SASS](http://sass-lang.com/) (super fast libsass with [source maps](https://github.com/sindresorhus/gulp-ruby-sass#sourcemap), and [autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer))
- [BrowserSync](http://browsersync.io) for live reloading and a static server
- [Image optimization](https://www.npmjs.com/package/gulp-imagemin)
- Error handling in the console [and in Notification Center](https://github.com/mikaelbr/gulp-notify)
- Shimming non common-js vendor code with other dependencies (like a jQuery plugin)
- Multiple bundles with shared dependencies
- Separate compression task for production builds

### Install npm dependencies
```
npm install
```

This runs through all dependencies listed in `package.json` and downloads them to a `node_modules` folder in your project directory.

### The `gulp` command
You can  install gulp globally with `npm install -g gulp`, which will add the gulp script to your global bin folder.

To use the version that's specified in your project's package.json.  You can simply alias `./node_modules/.bin/gulp` to `gulp`. Open up `~/.zshrc` or `~./bashrc` and add the following line:

```
alias gulp='node_modules/.bin/gulp'
```
Now, running `gulp` in the project directory will use the version specified and installed from the `package.json` file.

### Run gulp

```
gulp
```

This will run the `default` gulp task defined in `gulp/tasks/default.js`, which has the following task dependencies: `['sass', 'images', 'markup', 'watch']`
- The `sass` task compiles your css files.
- `images` moves images copies images from a source folder, performs optimizations, the outputs them into the build folder
- `markup` doesn't do anything but copy an html file over from src to build, but here is where you could do additional templating work.
- `watch` has `watchify` as a dependency, which will run the browserifyTask with a `devMode` flag that enables sourcemaps and watchify, a browserify add-on that enables caching for super fast recompiling. The task itself starts watching source files and will re-run the appropriate tasks when those files change.

#### gulp appx
This command will install your App as a hosted app pointing to `http://localhost:3000` and then launch it.

#### gulp production

There is also a `production` task you can run with `gulp production`, which will re-build optimized, compressed css and js files to the build folder, as well as output their file sizes to the console. It's a shortcut for running the following tasks: `['images', 'minifyCss', 'uglifyJs']`.

### Configuration
All paths and plugin settings have been abstracted into a centralized config object in `gulp/config.js`. Adapt the paths and settings to the structure and needs of your project.

### 
Application icon: [web design by Simple Icons from the Noun Project](https://thenounproject.com/search/?q=code&i=32232)

Project using: [Gulp Starter](https://github.com/greypants/gulp-starter) as base
