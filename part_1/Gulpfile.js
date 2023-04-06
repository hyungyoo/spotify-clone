// Load Gulp modules
const gulp = require("gulp");

// Load Sass compiler module
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function () {
  return gulp
    .src("./scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
});

// Detect file changes and automatically covert to css
gulp.task("watch", function () {
  gulp.watch("./scss/*.scss", gulp.series("sass"));
});

// Set defaul task
gulp.task("default", gulp.series("sass", "watch"));
