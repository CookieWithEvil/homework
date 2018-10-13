const gulp = require('gulp'),
 	  sass = require('gulp-sass'),
 	  cssclean = require('gulp-clean-css'),
  	  autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['sass', 'html', 'css']);

gulp.task("watch", function(){	
	gulp.watch("src/*.html", ["html"]);
	gulp.watch("src/*.scss", ["sass"]);
	gulp.watch("dest/*.css", ["css"]);
});

gulp.task("sass", function(){
	return gulp.src("src/*.scss")
		   .pipe(sass())
		   .pipe(gulp.dest("dest"));
});

gulp.task("html", function(){
	return gulp.src("src/*.html")
		   .pipe(gulp.dest("dest"));
});

gulp.task('css', function(){
	return gulp.src('dest/*.css')
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
    }))
	.pipe(cssclean())    
	.pipe(gulp.dest('dest'));
});