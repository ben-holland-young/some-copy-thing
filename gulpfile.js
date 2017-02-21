var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var sass = require('gulp-sass');

gulp.task('compress', function (cb) {
    pump([
        gulp.src('app/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
        cb
    );
});


gulp.task('sass', function () {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/scss/**/*.scss', ['sass']);
});
