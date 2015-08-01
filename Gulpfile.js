var gulp = require('gulp'),
    path = require('path'),
    karma = require('karma').server,
    plugins = require('gulp-load-plugins')(),
    baseOutputFileName = 'tdd-stack',
    karmaConf = __dirname + '/karma.conf.js',
    buildFiles = path.join('build', '*.js'),
    appFiles = path.join('src', '**/*.js'),
    testFiles = path.join('spec', '**/*.spec.js');


gulp.task('clean', function () {
    return gulp.src(['build', 'dist', 'report'], {read: false})
        .pipe(plugins.clean());
});

gulp.task('validate', ['clean'], function () {
    return gulp.src(appFiles)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'));
});

gulp.task('concat', ['validate'], function () {
    return gulp.src(
        ['src/**/*.js'])
        .pipe(plugins.uglify())
        .pipe(plugins.concat(baseOutputFileName + '.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('test', ['concat'], function (done) {
    karma.start({
        files: [testFiles, appFiles],
        configFile: karmaConf,
        singleRun: false,
        autoWatch: true
    }, done);
});

gulp.task('testdist', ['concat'], function (done) {
    karma.start({
        files: [testFiles, appFiles],
        configFile: karmaConf,
        singleRun: true,
        autoWatch: false
    }, done);
});

gulp.task('dist', ['testdist'], function () {
    return gulp.src('build/' + baseOutputFileName + '.js')
        .pipe(plugins.uglify())
        .pipe(plugins.rename(baseOutputFileName + '.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    var watcher = gulp.watch([testFiles, appFiles]);
    watcher.on('change', function (event) {
        gulp.run('test');
    });
});

gulp.task('dev', ['test', 'watch']);
gulp.task('build', ['test']);
gulp.task('release', ['dist']);
