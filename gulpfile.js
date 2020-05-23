const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix', () =>
    gulp.src('css/style.min.css')
        .pipe(autoprefixer({
            browsers: ['last 99 versions'],
            cascade: false
    }))
    .pipe(gulp.dest('css/style.min2.css'))
);