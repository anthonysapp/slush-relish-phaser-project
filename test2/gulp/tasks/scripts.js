var gulp         = require('gulp'),
    browserify   = require('browserify'),
    sourcemaps   = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    handleErrors = require('../util/handleErrors');


gulp.task('scripts', [ 'lint' ], function () {

    var bundler = browserify({
        cache: {},
        packageCache: {},
        fullPaths: true,
        entries: [paths['js'] + '/main.js'],
        debug: false
    });

    var bundlee = function() {
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

    /*
     return gulp.src(paths['scripts'])
     .pipe(handleErrors())
     .pipe(sourcemaps.init())
     .pipe(traceur({
     modules: 'register',
     moduleName: true
     }))
     .pipe(concat('game.js'))
     .pipe(sourcemaps.write())
     .pipe(gulp.dest(paths['temp'] + '/assets/js'));
     */
});
