var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', ['scripts', 'styles', 'markup'], function() {
  browserSync.init({
    server: {
      baseDir: './dest'
    }
  });

  gulp.watch([
    './src/scripts/**/*.js'
  ], ['scripts']).on('change', browserSync.reload);
  gulp.watch([
    './src/styles/**/*.scss'
  ], ['styles']).on('change', browserSync.reload);
  gulp.watch([
    './src/markup/pages/**/*.html',
    './src/markup/layouts/*.hbs',
    './src/markup/partials/**/*.hbs'
  ], ['markup']).on('change', browserSync.reload);
});
