const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const terser = require('gulp-terser')
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin')

gulp.task('compile:html', () => {
  return gulp
    .src('./src/html/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('compile:css', () => {
  return gulp
    .src('./src/css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('compile:js', () => {
  return gulp
    .src('./src/js/**/*.js')
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(terser())
    .pipe(gulp.dest('./dist/'))
})

gulp.task('compile:images', () => {
  return gulp
    .src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images/'))
})

gulp.task('create:dist', () => {
  return gulp
    .src('./')
    .pipe(gulp.dest('./dist/'))
})

gulp.task('clean:dist', () => {
  return gulp
    .src('./dist/')
    .pipe(clean())
})

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: './dist/'
    }
  });

  gulp.watch('./src/html/**/*.html', gulp.series(['compile:html'])).on('change', reload);
  gulp.watch('./src/css/**/*.css', gulp.series(['compile:css'])).on('change', reload);
  gulp.watch('./src/js/**/*.js', gulp.series(['compile:js'])).on('change', reload);
});

gulp.task('dev', gulp.series(['create:dist', 'clean:dist', 'compile:html', 'compile:css', 'compile:js', 'compile:images', 'server']));
gulp.task('build', gulp.series(['create:dist', 'clean:dist', 'compile:html', 'compile:css', 'compile:images', 'compile:js']));
