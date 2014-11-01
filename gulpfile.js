var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');

var paths = {
  scripts: ['src/js/**/*.js'],
  styles: ['src/css/**/*.css'],
  copy: ['./bower_components/angular/angular.min.js', './bower_components/angular-route/angular-route.min.js']
};

gulp.task('clean', function (cb) {
  del(['build'], cb);
});

gulp.task('copy', function () {
  gulp.src(paths.copy)
    .pipe(gulp.dest('app/js'));
});

gulp.task('scripts', ['clean', 'copy'], function () {
  return gulp.src(paths.scripts)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

gulp.task('styles', ['clean', 'copy'], function () {
  return gulp.src(paths.styles)
    .pipe(concat('app.css'))
    .pipe(gulp.dest('app/css'));
});


gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['scripts']);
});
