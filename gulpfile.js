var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    minifyCSS = require("gulp-minify-css"),
    plumber = require("gulp-plumber");


//MINIFY AND CONCAT CSS FILES
gulp.task("minify_css", function() {
  var mini_concatCss = ["css/foundation.css", "css/app.css", "css/faculty.css", "css/arrow.css"];
	return gulp.src(mini_concatCss)
	.pipe(plumber())
  .pipe(concat("index.css"))
	.pipe(minifyCSS())
	.pipe(gulp.dest("css"))
});


//UGLIFY JAVASCRIPT
gulp.task("minify_js", function() {
	return gulp.src("js/app.js")
	.pipe(plumber())
	.pipe(concat("mini-app.js"))
	.pipe(uglify())
	.pipe(gulp.dest("js"));
});

gulp.task("minifyFa_js", function() {
	return gulp.src("js/faculty.js")
	.pipe(plumber())
	.pipe(concat("mini-faculty.js"))
	.pipe(uglify())
	.pipe(gulp.dest("js"));
});


//WATCH FOR CHANGES
gulp.task("watch", function(){
  gulp.watch(["css/foundation.css", "css/app.css", "css/faculty.css", "css/arrow.css"], ["minify_css"]);
  gulp.watch(["js/app.js"], ["minify_js"]);
  gulp.watch(["js/faculty.js"], ["minifyFa_js"]);
});


//DEFAULT TASKS
gulp.task("default", ["watch", "minify_css", "minify_js", "minifyFa_js"]);
