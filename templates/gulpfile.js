/*
 *  gulpfile.js
 *  ===========
 *
 *  Rather than manage one giant configuration file responsible
 *  for creating multiple tasks, each task has been broken out into
 *  its own file in gulp/tasks. Any files in that directory get
 *  automatically required below.
 *
 *  To add a new task, simply add a new task file in that directory.
 *  gulp/tasks/default.js specifies the default set of tasks to run
 *  when you run `gulp`.
 *
 */

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    del = require('del'),
    notify = require("gulp-notify"),
    plumber = require("gulp-plumber"),
    browserSync = require('browser-sync'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    gutil = require('gulp-util'),
    processhtml = require('gulp-processhtml'),
    browserify = require('browserify'),
    sourcemaps = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    concat       = require('gulp-concat'),
    uglify     = require('gulp-uglify'),
    path        = require('path')


// Specify game project paths for tasks.
global['paths'] = {
    'src': 'src',
    'assets': 'assets',
    'temp': '.tmp',
    'product': 'dist',
    'less': 'src/less/*.less',
    'scripts': 'src/scripts/**/*.js',
    'js': './src/scripts'
};

function handleErrors() {
    return plumber(function () {
        var args = [].slice.apply(arguments);

        // Send error to notification center with gulp-notify
        notify.onError({
            title: "Compile Error",
            message: "<" + "%= error.message %" + ">"
        }).apply(this, args);

        // Keep gulp from hanging on this task
        this.emit('end');
    });
}

function logChanges (event) {
    gutil.log(
        gutil.colors.green('File ' + event.type + ': ') +
        gutil.colors.magenta(path.basename(event.path))
    );
}

gulp.task('scripts', ['lint'], function () {

    var bundler = browserify({
        cache: {},
        packageCache: {},
        fullPaths: true,
        entries: [paths['js'] + '/main.js'],
        debug: false
    });

    var bundlee = function () {
        return bundler
            .bundle()
            .pipe(handleErrors())
            .pipe(source('game.js'))
            //.pipe(source('main.min.js'))
            //.pipe(jshint('.jshintrc'))
            //.pipe(jshint.reporter('default'))
            //.pipe(gulpif(!watching, streamify(uglify({outSourceMaps: false}))))
            .pipe(gulp.dest(paths['temp'] + '/assets/js'))
    };

    return bundlee();
});

gulp.task('styles', function () {
    return gulp.src(paths['less'])
        .pipe(handleErrors())
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest(paths['temp'] + '/assets/css'));
});


gulp.task('processHtml', function () {
    return gulp.src(paths['src'] + '/index.html')
        .pipe(handleErrors())
        .pipe(processhtml('index.html'))
        .pipe(gulp.dest(paths['product']));
});

gulp.task('processAssets', function () {
    gulp.src([
        './assets/**'
    ])
        .pipe(handleErrors())
        .pipe(gulp.dest(paths['product'] + '/assets'));
});

gulp.task('minifyCss', function () {
    return gulp.src(paths['less'])
        .pipe(handleErrors())
        .pipe(less())
        .pipe(minifycss({
            keepSpecialComments: false,
            removeEmpty: true
        }))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(paths['product'] + '/assets/css'));
});

gulp.task('lint', function () {
    return gulp.src([paths['scripts']])
        .pipe(handleErrors())
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('html', function () {
    return gulp.src(paths['src'] + '/index.html')
        .pipe(gulp.dest(paths['temp']));
});


gulp.task('clean', function () {
    del([
        paths['temp'], paths['product']
    ]);
});

gulp.task('uglify', [ 'scripts' ], function () {
    return gulp.src([
        './bower_components/phaser-official/build/<%= phaserPath %>',
        './.tmp/assets/js/game.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('game.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths['product'] + '/assets/js'));
});

gulp.task('compile', [
    'html',
    'styles',
    'scripts'
]);

gulp.task('build', function (done) {
    runSequence('clean',
        'processHtml',
        'minifyCss',
        'uglify',
        'processAssets', done);
});

gulp.task('watch', function () {
    gulp.watch(paths['scripts'], [ 'scripts', browserSync.reload ])
        .on('error', gutil.log)
        .on('change', logChanges)

    gulp.watch(paths['less'], [ 'styles', browserSync.reload ])
        .on('error', gutil.log)
        .on('change', logChanges)

    gulp.watch(paths['src'] + '/index.html', [ 'html', browserSync.reload ])
        .on('error', gutil.log)
        .on('change', logChanges)
});

gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: [
                '',
                paths['temp']
            ]
        }
    });
});

gulp.task('default', [
    'compile',
    'watch',
    'server'
]);