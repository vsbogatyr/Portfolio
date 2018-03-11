const gulp = require('gulp');
const pug = require('gulp-pug');

const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const svgSprite = require('gulp-svg-sprites');
const autoprefixer = require('gulp-autoprefixer');

const del = require('del');

const browserSync = require('browser-sync').create();

const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const paths = {
    root: './build',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug'
    },
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'build/styles/'
    },
    images: {
        src: 'src/img/**/*.*',
        dest: 'build/img/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'build/scripts/'
    },
    fonts: {
        src: 'src/fonts/**/*.*',
        dest: 'build/fonts/'
    }
}

//sprite
function svg() {
    return gulp.src('./src/img/**/*.svg')
        .pipe(svgSprite())
        .pipe(gulp.dest(paths.images.dest));
}

// pug
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.root));
}

// scss
function styles() {
    return gulp.src('./src/scss/main.scss')
        .pipe(sourcemaps.init())
        /*  .pipe(autoprefixer ({
              browsers: ['last 2 versions'],
              cascade: false
          }))*/
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.styles.dest))
}

// очистка
function clean() {
    return del(paths.root);
}

// webpack
function scripts() {
    return gulp.src('src/scripts/app.js')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest));
}

//временно пока не освоил pug
function html() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest(paths.root));
}

// галповский вотчер
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch('src/**/*.html', html);
}

// локальный сервер + livereload (встроенный)
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

// просто переносим картинки
function images() {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
}

//переносим шрифты
function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
}

//перенос общих стилей
function commonCss() {
    return gulp.src('./src/styles/**/*.*')
        .pipe(gulp.dest(paths.styles.dest))

}

exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.images = images;
exports.svg = svg;
exports.fonts = fonts;
exports.commonCss = commonCss;
exports.html = html;


gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, templates, images, scripts, svg, fonts, commonCss, html),
    gulp.parallel(watch, server)
));