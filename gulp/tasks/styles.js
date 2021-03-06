'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');



module.exports = gulp.task('styles', function () {
  return gulp.src(config.paths.src.sass)
    .pipe(sass({ errLogToConsole: true }))
    .pipe(autoprefixer('last 1 version'))
    .pipe(gulpif(release, csso()))
    .pipe(gulpif(release, rename(config.filenames.release.styles), rename(config.filenames.build.styles)))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.styles), gulp.dest(config.paths.dest.build.styles)));
});
