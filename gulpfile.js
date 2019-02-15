var gulp = require('gulp'),
    sass = require('gulp-sass'),
    server = require('gulp-webserver');

gulp.task('sass', function(){
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('watch', function(){
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'))
})