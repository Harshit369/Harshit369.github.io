'use strict';

/* importing required modules */
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    del = require('del'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    moment = require('moment'),
    uglifycss = require('gulp-uglifycss'),
    program = require('commander'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel');

var js_order = ['react','react-dom','toastr.min','json_tweets','navbar','tweets','home'];

require('gulp-help')(gulp, {
    description: 'Help listing.'
});

program
    .usage('./crystal <options>')
    .version('0.0.1')
    .option('-d, --debug', 'run in debug mode')
    .parse(process.argv);

var debug = program.debug;

/* Clean task to build directory */
gulp.task('clean', function() {
    gutil.log('Cleaning build directory');
    return del([
        'static/build/styles/**/*',
        'static/build/scripts/**/*',
        'static/build/fonts/**/*'
    ]);
});

gulp.task('build-sass', function() {
    gulp.src('static/scss/*.scss')
    .pipe(sass())
    .on('error', notify.onError("Error: <%= error.message %>"))
    .pipe(gulp.dest('static/css'))
    .pipe(notify('Compiled sass for (' + moment().format('MMM Do h:mm:ss A') + ')'));
});


gulp.task('build-jsx', function() {    
        gulp.src('static/jsx/*.jsx')
            .pipe(babel({
           presets: ['react', 'es2015']
        }))
            .pipe(gulp.dest('static/js'))
            .pipe(notify('Compiled jsx (' + moment().format('MMM Do h:mm:ss A') + ')'));
});

gulp.task('copy-fonts', function() {
   gulp.src('static/fonts/**/*')
   .pipe(gulp.dest('static/build/fonts'))
   .pipe(notify('Copied fonts to build (' + moment().format('MMM Do h:mm:ss A') + ')'));
});

gulp.task('build-js', function() {
    gulp.src(js_order.map(function(js){
            return 'static/js/' + js + '.js';
        }))
        .pipe(concat("home.min.js"))
        .on('error', notify.onError("Error: <%= error.message %>"))
        /*.pipe(uglify())
        .on('error', notify.onError("Error: <%= error.message %>"))*/
        .pipe(gulp.dest('static/build/scripts'))
        .pipe(notify('Concatenated javascript (' + moment().format('MMM Do h:mm:ss A') + ')'));
});

gulp.task('build-css', function() {    
        gulp.src('static/css/*.css')
            .pipe(concat('home.min.css'))
            .on('error', notify.onError("Error: <%= error.message %>"))
            .pipe(uglifycss())
            .on('error', notify.onError("Error: <%= error.message %>"))
            .pipe(gulp.dest('static/build/styles'))
            .pipe(notify('Concatenated stylesheets (' + moment().format('MMM Do h:mm:ss A') + ')'));
});


gulp.task('deploy',['build-css','build-js', 'copy-fonts'],function(){
    gutil.log('Ready for deployment');
});

gulp.task('watch', ['clean','build-sass', 'build-jsx', 'deploy']);

/* default task for gulp */
gulp.task('default', ['watch']);
