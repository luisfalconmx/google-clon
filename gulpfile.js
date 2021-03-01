const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const terser = require("gulp-terser");
const clean = require("gulp-clean");

gulp.task("minify-html", () => {
  return gulp
    .src("src/html/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});

gulp.task("minify-css", () => {
  return gulp
    .src("src/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/"));
});

gulp.task("minify-js", () => {
  return gulp.src("src/js/*.js").pipe(terser()).pipe(gulp.dest("dist/"));
});

gulp.task("copy-images", () => {
  return gulp.src("./src/images/**/*").pipe(gulp.dest("./dist/images"));
});

gulp.task("clean", () => {
  return gulp.src("dist", { read: false }).pipe(clean());
});

gulp.task(
  "build",
  gulp.series([
    "clean",
    "minify-html",
    "minify-css",
    "minify-js",
    "copy-images",
  ])
);
