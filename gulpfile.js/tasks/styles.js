var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var nano = require('gulp-cssnano');
var precss = require('precss');
var extname = require('gulp-extname');

gulp.task('styles', function () {
  var processors = [
    precss,
    autoprefixer({browsers: ['last 3 versions', '> 1%', 'ie >= 9']}),
  ];

  return gulp.src(['./src/styles/index.scss'])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(postcss(processors))
    .pipe(nano())
    .pipe(extname())
    .pipe(gulp.dest('./dest/assets/styles'))
    .pipe(notify('Styles task complete'));
});
