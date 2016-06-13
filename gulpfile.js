var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "gulp.sj"
    });
});

gulp.task('html-watch', ['browser-sync'], function () {
	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['html-watch']);