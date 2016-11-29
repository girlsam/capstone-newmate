// *** dependencies *** //

const gulp = require('gulp')
const eslint = require('gulp-eslint')
const connect = require('gulp-connect')
const runSequence = require('run-sequence')
const sass = require('gulp-sass')
const path = require('path')

// *** tasks *** ///

gulp.task('connect', () => {
  connect.server({
    root: './src/',
    port: 8888,
    livereload: true
  })
})

gulp.task('lint', () => {
  return gulp.src('./src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format('stylish'))
    .pipe(eslint.failAfterError())
})

gulp.task('html', () => {
  gulp.src('./src/*.html')
    .pipe(connect.reload())
})

gulp.task('scss', () => {
  return gulp.src('./src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.join('src', 'client', 'css')))
})

gulp.task('javascript', () => {
  gulp.src('./src/**/*.js')
    .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch('./src/js/**/*.js', ['javascript'])
  gulp.watch(['./src/*.html'], ['html'])
  gulp.watch(['./src/css/*.css'], ['css'])
})

// *** default task *** //
gulp.task('default', () => {
  runSequence(
    ['scss'],
    ['lint'],
    ['watch'],
    ['connect']
  )
})
