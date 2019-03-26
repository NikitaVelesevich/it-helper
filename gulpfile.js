/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyjs');
/* eslint-enable node/no-unpublished-require */

gulp.task('css', () => {
  return gulp
    .src('dev/css/**/*.css')
    .pipe(plumber())
    .pipe(
      autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
        cascade: true
      })
    )
    .pipe(cssnano())
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('scripts', () =>
  gulp
    .src([
      'dev/js/get_consult.js',
      'dev/js/get_discount.js'
      //
    ])
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'))
);

gulp.task('default', ['css', 'scripts'], () => {
  gulp.watch('dev/css/**/*.css', ['css']);
  gulp.watch('dev/js/**/*.js', ['scripts']);
});
