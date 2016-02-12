var gulp = require('gulp');
var shell = require('gulp-shell');

/**
 * [DEV] Build project for development
 */
gulp.task('build-dev', shell.task([
    'webpack --config webpack.config.dev.js --progress --colors'
]));

/**
 * [DEV] Watch changes and build for development
 */
gulp.task('watch-dev', shell.task([
    'webpack --config webpack.config.dev.js --progress --colors --watch'
]));

/**
 * [DEV] Build project for development
 */
gulp.task('serve', shell.task([
    'webpack-dev-server --config webpack.config.dev.js --watch --progress --colors'
]));

/**
 * [PROD] Build project for production
 */
gulp.task('build-prod', shell.task([
    'webpack --config webpack.config.production.js --progress --colors'
]));
