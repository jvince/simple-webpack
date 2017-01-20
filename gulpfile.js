var webpackConfig = require('./webpack.config');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var bundler = webpack(webpackConfig);

gulp.task('serve', function() {
    browserSync.init({
		open: false,
        server: {
			baseDir: 'public',
			middleware: [
				webpackDevMiddleware(bundler, {
					publicPath: '/js',
					stats: { colors: true }
				}),
				webpackHotMiddleware(bundler)
			]
		}
    });
});

gulp.task('default', ['serve']);
