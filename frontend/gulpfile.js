"use strict";

var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('algos')
    .pipe(webserver({
      port: 8085,
      host: 'localhost',
      livereload: true,
      directoryListing: true,
      open: true
    }));
});
