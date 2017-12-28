var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    compass = require('gulp-compass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat');

var config = {
    'src': './src',
    'dest': './dist',
    'html': {
        'src': './src/*.html',
        'dest': './dist/'
    },
    'sass': {
        'dest': './dist/styles/css',
        'src': './src/styles/scss/styles.scss'
    },
    'js': {
        'src': [
            '../node_modules/jquery/dist/jquery.min.js',
            '../node_modules/tether/dist/js/tether.min.js',
            '../node_modules/bootstrap/dist/js/bootstrap.min.js',
            '../node_modules/masonry-layout/dist/masonry.pkgd.min.js',
            '../src/js/*.js'
        ],
        'dest': './dist/js'
    },
    'img': {
        'dest': './dist/img/',
        'src': './src/img/*'
    }
};

gulp.task('copy:html', function () {
    return gulp.src(config.html.src)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.html.dest));
});

gulp.task('minify:img', function () {
        return gulp.src(config.img.src)
            .pipe(imagemin())
            .pipe(gulp.dest(config.img.dest));
        }
);


gulp.task('build',['copy:html', 'minify:img'], function () {});

gulp.task('watch', function () {
    gulp.watch([
        config.sass.path + '/**/*.scss',
        config.js.path + '/**/*.js',
        config.html.src
    ], ['build']);
});

gulp.task('scss', function () {
    return gulp.src(config.sass.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.sass.dest));
});
gulp.task('compress', function() {
    gulp.src(config.js.src)
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest(config.js.dest))
});
gulp.task('default', function () {
    gulp.src('./src/styles/css/styles.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.sass.dest));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});