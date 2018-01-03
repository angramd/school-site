var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    minifyCSS = require("gulp-minify-css"),
    plumber = require("gulp-plumber"),
    sass = require("gulp-sass");


//MINIFY AND CONCAT CSS FILES
gulp.task("minify_css", function() {
  var mini_concatCss = ["css/foundation.css", "css/app.css", "css/faculty.css", "css/about.css", "css/arrow.css"];
	return gulp.src(mini_concatCss)
	.pipe(plumber())
  .pipe(concat("index.css"))
	.pipe(minifyCSS())
	.pipe(gulp.dest("css"));
});


//SASS
gulp.task("styles", function() {
  return gulp.src("css/*.scss")
	.pipe(sass({
	  style: "expanded"
	}))
	.pipe(plumber())
	.pipe(gulp.dest("css"));
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

gulp.task("minifyAb_js", function() {
	return gulp.src("js/about.js")
	.pipe(plumber())
	.pipe(concat("mini-about.js"))
	.pipe(uglify())
	.pipe(gulp.dest("js"));
});


//WATCH FOR CHANGES
gulp.task("watch", function(){
  gulp.watch(["css/foundation.css", "css/app.css", "css/faculty.css", "css/about.css", "css/arrow.css"], ["minify_css"]);
	gulp.watch("css/*.scss", ["styles"]);
  gulp.watch(["js/app.js"], ["minify_js"]);
  gulp.watch(["js/faculty.js"], ["minifyFa_js"]);
  gulp.watch(["js/about.js"], ["minifyAb_js"]);
});


//DEFAULT TASKS
gulp.task("default", ["watch", "minify_css", "styles", "minify_js", "minifyFa_js", "minifyAb_js"]);
