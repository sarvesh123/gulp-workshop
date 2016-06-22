var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var jshint		= require('gulp-jshint');
var uglify 		= require('gulp-uglify');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('js-lint', function() {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('html-watch', ['browser-sync'], function () {
	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('js-compress', function() {
  return gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['html-watch', 'js-lint', 'js-compress']);