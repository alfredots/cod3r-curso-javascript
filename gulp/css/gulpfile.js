const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglify')
const concat = require('gulp-concat')

gulp.task('default', ['copiarHtml'], () => {
    gulp.src('src/sass/index.css')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
})

gulp.task('copiarHtml', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})