"use strict";

var gulp = require('gulp');

var htmlmin = require('gulp-htmlmin');

var file_include = require('gulp-file-include');

var less = require('gulp-less');

var csso = require('gulp-csso');

var babel = require('gulp-babel');

var uglify = require('gulp-uglify');

gulp.task('why_first', function () {
  gulp.src('./src/css/base.css').pipe(gulp.dest('dist/css'));
  c;
});
gulp.task('html_min', function () {
  gulp.src('./src/*.html') //公共代码
  .pipe(file_include()) //压缩
  .pipe(htmlmin({
    collapseWhitespace: true
  })).pipe(gulp.dest('dist'));
});
gulp.task('css_why', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          gulp.src(['./src/css/*.less', './src/css/*.css']) //将less转换为css语法
          .pipe(less()) //压缩css代码
          .pipe(csso()) //将处理的结果进行输出
          .pipe(gulp.dest('dist/css'));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}); //es6代码转换
//有点问题！

gulp.task('jsmin', function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          gulp.src('./src/js/*.js').pipe(babel({
            //判断当前代码的运行环境，将代码转换为当前运行环境所支持的代码
            presets: ['@babel/env']
          })).pipe(uglify()).pipe(gulp.dest('dist/js'));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //复制文件夹

gulp.task('copy', function () {
  gulp.src('./src/images/*').pipe(gulp.dest('dist/images'));
  gulp.src('./src/lib/*').pipe(gulp.dest('dist/lib'));
}); //构建任务(有问题)
//gulp.task('why_default',['html_min','why_first','css_why','copy']);