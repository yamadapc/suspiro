'use strict';
var gulp = require('gulp');
var connect = require('gulp-connect');

var paths = {
  js: ['ui/app'],
};

gulp.task('server', function() {
  connect.server({
    root: 'ui',
    livereload: true,
    directoryListing: true,
    open: true
  });
});
