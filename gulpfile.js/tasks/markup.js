var gulp = require('gulp');
var plumber = require('gulp-plumber');
var panini = require('panini');
var notify = require('gulp-notify');

gulp.task('markup', function() {
  return gulp.src('./src/markup/pages/**/*.html')
    .pipe(panini({
      root: './src/markup/pages/',
      layouts: './src/markup/layouts/',
      partials: './src/markup/partials/'
    }))
    .pipe(gulp.dest('./dest'))
    .pipe(notify('Markup task complete'));
});
