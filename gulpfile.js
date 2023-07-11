"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const serve = require("browser-sync").create();
const cssnano = require("cssnano");
const concat = require('gulp-concat');
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const livereload = require("gulp-livereload");
const notify = require("gulp-notify");
const reload = serve.reload;
const rtlcss = require('gulp-rtlcss');

// == Browser-sync task
gulp.task("browser-sync", function (done) {
  serve.init({
    server: "./",
    startPath: "./webpage",
    // After it browser running [File path set]
    // browser: 'chrome',
    host: 'localhost',
    livereload: true,
    port: 3001,
    open: true,
    tunnel: false,
  });
  gulp.watch(["./**/*.html"]).on("change", reload); // [File path set]
  done();
});

// CSS task
gulp.task("css", () => {
  return gulp
    .src("assets/scss/app.scss")
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("public/css"))
    .pipe(notify({
      message: "main SCSS processed"
    }))
    .pipe(serve.stream())
    .pipe(livereload());
});

// Transpile, concatenate and minify scripts
gulp.task("js", () => {
  return (
    gulp
    .src([
      'assets/js/jquery-3.6.0.min.js',
      'assets/js/popper.min.js',
      'assets/js/bootstrap.min.js',
      'assets/js/extra-js/*.js',
      'assets/js/other-js/*.js',
    ])
    .pipe(plumber())
    // folder only, filename is specified in webpack config
    .pipe(concat('app.js'))
    .pipe(gulp.dest("public/js"))
    .pipe(serve.stream())
    .pipe(livereload())
  );
});

gulp.task("default", gulp.series("css", "js", "browser-sync", () => {
  livereload.listen();
  gulp.watch(["assets/scss/**/*"], gulp.series("css"));
  gulp.watch(["assets/js/**/*"], gulp.series("js"));
}));

gulp.task('rtl', function () {
  return gulp.src(['public/css/app.min.css','public/css/bootstrap.css'])
    .pipe(rtlcss())
    .pipe(rename({
      suffix: '.rtl' // Change the suffix to '.rtl' or your desired file name
    }))
    .pipe(gulp.dest('public/css/'))
    .pipe(reload({ stream: true })); // Change 'dist' to your desired directory name
});
