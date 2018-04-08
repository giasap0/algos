"use strict";

var gulp = require('gulp');
var webserver = require('gulp-webserver');

// first run 'ng build', then run this task
gulp.task('webserver', function() {
  return gulp.src('./dist/')
    .pipe(webserver({
      port: 8085,
      host: 'localhost',
      livereload: true,
      directoryListing: false,
	  open: true,
	  fallback: 'index.html',
	  proxies : [
		  //{ source: '/api' , target: 'http://localhost:8080/algos/rest' }
	  ]
    }));
});

gulp.task('default', ["webserver"] );
