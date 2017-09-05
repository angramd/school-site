var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    minifyCSS = require("gulp-minify-css"),
    plumber = require("gulp-plumber");


//MINIFY AND CONCAT CSS FILES
gulp.task("minify_css", function() {
  var mini_concatCss = ["css/foundation.css", "css/app.css", "css/arrow.css"];
	return gulp.src(mini_concatCss)
	.pipe(plumber())
  .pipe(concat("index.css"))
	.pipe(minifyCSS())
	.pipe(gulp.dest("css"))
});


//Uglify Scripts Task
// gulp.task("minify_js", function() {
// 	return gulp.src("js/index.js")
// 	.pipe(plumber())
// 	.pipe(concat("mini-counseling.js"))
// 	.pipe(uglify())
// 	.pipe(gulp.dest("js"));
// });


//WATCH FOR CHANGES
gulp.task("watch", function(){
  gulp.watch(["css/foundation.css", "css/app.css", "css/arrow.css"], ["minify_css"]);
});


//DEFAULT TASKS
gulp.task("default", ["watch", "minify_css"]);
