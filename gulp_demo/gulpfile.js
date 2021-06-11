const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const file_include = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


gulp.task('why_first', () => {
    gulp.src('./src/css/base.css')
        .pipe(gulp.dest('dist/css'));
    c
});


gulp.task('html_min', () => {
    gulp.src('./src/*.html')
        //公共代码
        .pipe(file_include())
        //压缩
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('css_why', async () => {
    gulp.src(['./src/css/*.less', './src/css/*.css'])
        //将less转换为css语法
        .pipe(less())
        //压缩css代码
        .pipe(csso())
        //将处理的结果进行输出
        .pipe(gulp.dest('dist/css'))
})

//es6代码转换
//有点问题！
gulp.task('jsmin', async () => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            //判断当前代码的运行环境，将代码转换为当前运行环境所支持的代码
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

//复制文件夹
gulp.task('copy', () => {
    gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'));
    gulp.src('./src/lib/*')
        .pipe(gulp.dest('dist/lib'));
})

//构建任务(有问题)
//gulp.task('why_default',['html_min','why_first','css_why','copy']);