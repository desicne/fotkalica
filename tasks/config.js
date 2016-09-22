
var gulp = require('gulp');
var removeLogs = require('gulp-removelogs');
var strip = require('gulp-strip-comments');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');

gulp.task('develop', function (cb) {
  pump([
        gulp.src('./app/scripts/*.js'),
        removeLogs(),
    	strip(),
        uglify(),
        rename({ extname: '.min.js' }),
        gulp.dest('./app/dist/')
    ],
    cb
  );
});