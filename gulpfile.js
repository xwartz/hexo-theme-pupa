var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')

var config = {
  src: './source/scss',
  dest: './source/css'
}

gulp.task('sass', function() {
  return gulp.src(config.src + '/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.dest))
})

gulp.task('default', ['sass'], function() {
  gulp.watch(config.src + '/**/*.scss', ['sass'])
})
