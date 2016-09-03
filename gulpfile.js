var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var plumber = require('gulp-plumber')

var config = {
  src: './source/scss',
  dest: './source/css'
}

gulp.task('sass', function() {
  return gulp.src(config.src + '/main.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.dest))
})

gulp.task('default', function() {
  gulp.watch(config.src + '/**/*.scss', ['sass'])
})
