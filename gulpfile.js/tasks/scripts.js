var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');

gulp.task('scripts', function() {
  return gulp.src(['./src/scripts/vendor/*.js', './src/scripts/index.js'])
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dest/assets/scripts'))
    .pipe(notify('Scripts task complete'));
});
