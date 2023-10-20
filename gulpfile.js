const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

function compilaSass() {
  return gulp
    .src("./source/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css/"));
}
function comprimeImagens() {
  return gulp
    .src("./source/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images/"));
}

exports.default = gulp.parallel(compilaSass, comprimeImagens);

exports.watch = function () {
  gulp.watch("./source/sass/**/*.scss", gulp.parallel(compilaSass));
};
