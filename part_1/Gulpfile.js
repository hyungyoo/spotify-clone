// Gulp 모듈 로드
const gulp = require("gulp");

// Sass 컴파일러 모듈 로드
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function () {
  return gulp
    .src("./scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
});

// 파일 변경 감지 및 자동 변환
gulp.task("watch", function () {
  gulp.watch("./scss/*.scss", gulp.series("sass"));
});

// 기본 작업 설정
gulp.task("default", gulp.series("watch"));
