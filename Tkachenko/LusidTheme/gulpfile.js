"use strict";

var gulp = require('gulp');
var concatCSS = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var pngmin = require('gulp-pngmin');
var htmlmin = require('gulp-htmlmin');
var base64 = require('gulp-base64-inline');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

/*минимизация html*/
gulp.task('html', () => {
    return gulp.src('app/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(rename('index.min.html'))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

/*объединение сторонних css*/
gulp.task('vendorCSS', () => {
    return gulp.src('app/css/*.vendor.css')
        .pipe(concatCSS('vendor.css'))
        .pipe(uncss({
            html: ['app/index.html']
        }))
        .pipe(cleanCSS({
            debug: true
        }, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename('vendor.min.css'))
        .pipe(gulp.dest('dist/css/'));
});

/*минимизация png*/
gulp.task('png', () => {
    return gulp.src('app/img/*.png')
        .pipe(pngmin())
        .pipe(gulp.dest('dist/img'));
});

/*создание css*/
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));

});

/*операции с css*/
gulp.task('css', () => {
    return gulp.src('app/css/style.css')
        .pipe(uncss({
            html: ['app/index.html']
        }))
        .pipe(autoprefixer({
            browsers: ['last 100 versions'],
            cascade: false
        }))
        .pipe(base64('../img'))
        .pipe(cleanCSS({
            debug: true
        }, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(livereload());
});

/*операции с js*/

gulp.task('compress', () => {
    return gulp.src('app/scripts/*.js')
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('dist/scripts/'));
});

/*WATCH*/
gulp.task('watch', () => {
    livereload.listen();
    gulp.watch('app/*.html', ['html', 'vendorCSS']) /*следить за html, запускать html и vendorCSS*/
    gulp.watch('app/css/*.min.css', ['vendorCSS']) /*следить за сторонними css, запускать vendorCSS*/
    gulp.watch('app/img/*.png', ['png']) /*следить за изображениями, запускать png*/
    gulp.watch('app/scss/**/*.scss', ['sass']) /*следить за SASS, запускать sass*/
    gulp.watch('app/css/style.css', ['css']) /*следить за style.css, запускать css*/
    gulp.watch('app/scripts/*.js', ['compress']) /*следить за js, запускать compress*/

});
