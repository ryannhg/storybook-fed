// Base
const gulp = require('gulp')
const path = require('path')

// Scripts
const browserify = require('browserify')
const source = require('vinyl-source-stream')
// Implicit dependencies
// require('gulp-babel')
// require('aliasify')
// require('babelify')
// require('babel-core')
// require('babel-preset-env')
// require('babel-preset-stage-2')

// Styles
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

// Removing & Watching Files
const del = require('del')
const series = require('run-sequence')
const gulpWatch = require('gulp-watch')
const watchConfig = { usePolling: process.env.CHOKIDAR_USEPOLLING === 'true' }
const watch = (files, taskNames) =>
  gulpWatch(files, watchConfig, () => taskNames.forEach(taskName => series(taskName)))

// Paths
const dest = process.env.ASSETS_DESTINATION || path.join(__dirname, 'dist')
const paths = {
  del: [
    path.join(dest, 'css'),
    path.join(dest, 'js')
  ],
  styles: {
    watch: path.join(__dirname, 'styles', '**', '*.scss'),
    src: path.join(__dirname, 'styles', '**', '*.scss'),
    dest: path.join(dest)
  },
  scripts: {
    main: path.join(__dirname, 'scripts', 'main.js'),
    src: path.join(__dirname, 'scripts', '**', '*.js'),
    dest: {
      folder: path.join(dest),
      file: 'bundle.js'
    }
  }
}

// Styles
gulp.task('styles', () =>
  gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer(),
      pxtorem({ propList: ['*'] })
    ]))
    .pipe(gulp.dest(paths.styles.dest))
)

gulp.task('watch:styles', [ 'styles' ], () =>
  watch(paths.styles.watch, [ 'styles' ])
)

// Scripts
gulp.task('scripts', () =>
  browserify(paths.scripts.main)
    .transform('babelify', {
      presets: [ 'env', 'stage-2' ]
    })
    .transform('aliasify', {
      aliases: { 'vue': path.join('vue', 'dist', 'vue.common.js') }
    })
    .bundle()
    .on('error', function (err) {
      console.error(err.codeFrame || err.toString())
      this.emit('end')
    })
    .pipe(source(paths.scripts.dest.file))
    .pipe(gulp.dest(paths.scripts.dest.folder))
)

gulp.task('watch:scripts', [ 'scripts' ], () =>
  watch(paths.scripts.src, [ 'scripts' ])
)

// Defaults
gulp.task('clean', () => del(paths.del, { force: true }))

gulp.task('build', [ 'styles', 'scripts' ])
gulp.task('watch', [ 'watch:styles', 'watch:scripts' ])

gulp.task('dev', (done) => series('clean', 'watch', done))
gulp.task('default', (done) => series('clean', 'build', done))
