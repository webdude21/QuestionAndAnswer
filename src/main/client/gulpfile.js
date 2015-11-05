// Include plug-ins
var isProduction = true,//require('yargs').argv.env === 'production',
	gulp = require('gulp'),
	gulpIf = require('gulp-if'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	inject = require('gulp-inject'),
	minifyHTML = require('gulp-minify-html'),
	del = require('del'),
	addStream = require('add-stream'),
	angularFilesort = require('gulp-angular-filesort'),
	angularTemplateCache = require('gulp-angular-templatecache');

// File paths
var config = {
	destPath: '../resources/static',
	vendorJsSrc: [],
	vendorCssSrc: [],
	resultVendorScriptFileName: 'vendorscripts',
	resultScriptFileName: 'scripts',
	resultStyleFileName: 'styles',
	vendorScriptsBuild: '../resources/static/vendorscripts*',
	scriptsBuild: '../resources/static/scripts*',
	cssBuild: '../resources/static/styles*',
	sourceRoot: 'src',
	appJsSrc: ['src/**/*.js'],
	appCssSrc: ['src/styles/site.css'],
	appTemplatesHtml: 'src/**/*.html',
	appIndexHtml: 'index-template.html'
};

// For browser caching
var getStamp = function () {
	var myDate = new Date();

	var myYear = myDate.getFullYear().toString();
	var myMonth = ('0' + (myDate.getMonth() + 1)).slice(-2);
	var myDay = ('0' + myDate.getDate()).slice(-2);
	var mySeconds = myDate.getSeconds().toString();

	var myFullDate = myYear + myMonth + myDay + mySeconds;

	return myFullDate;
};

// For angular templates
var prepareTemplates = function () {
	return gulp.src(config.appTemplatesHtml)
	.pipe(gulpIf(isProduction, minifyHTML({ conditionals: true, empty: true })))
	.pipe(angularTemplateCache());
};

// Minify, prefix and contat CSS
gulp.task('css', function () {
	del.sync([config.cssBuild], {force: true});

	var allCss = config.vendorCssSrc.concat(config.appCssSrc);

	return gulp.src(allCss)
		.pipe(gulpIf(isProduction, minifyCSS()))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(concat(config.resultStyleFileName + (isProduction ? getStamp() : '') + '.min.css', {newLine: ''}))
		.pipe(gulp.dest(config.destPath))
});

// Combine and minify all library JS files
gulp.task('vendors', function () {
	del.sync([config.vendorScriptsBuild], {force: true});

	return gulp.src(config.vendorJsSrc)
		.pipe(gulpIf(isProduction, uglify()))
		.pipe(concat(config.resultVendorScriptFileName + (isProduction ? getStamp() : '') + '.min.js', {newLine: ''}))
		.pipe(gulp.dest(config.destPath))
});

// Combine and minify all JS files from the app folder
gulp.task('scripts', function () {
	del.sync([config.scriptsBuild], {force: true});

	return gulp.src(config.appJsSrc)
		.pipe(angularFilesort())
		.pipe(gulpIf(isProduction, uglify({mangle: false})))
		.pipe(addStream.obj(prepareTemplates()))
		.pipe(concat(config.resultScriptFileName + (isProduction ? getStamp() : '') + '.min.js', {newLine: ''}))
		.pipe(gulp.dest(config.destPath))
});

// Inject minified files into new HTML
gulp.task('html', ['css', 'scripts'], function () {
	del.sync(['index.html'], {force: true});
	var target = gulp.src(config.appIndexHtml);
	var vendorSources = gulp.src([config.vendorScriptsBuild], {read: false});
	var appSources = gulp.src([config.scriptsBuild, config.cssBuild], {read: false});

	return target
		.pipe(inject(vendorSources, {relative: false, ignorePath: config.destPath}))
		.pipe(inject(appSources, {relative: false, ignorePath: config.destPath}))
		.pipe(minifyHTML({conditionals: true}))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./' + config.destPath))
})
;

// Watch for changes
gulp.task('watch', ['css', 'scripts', 'html'], function () {
	gulp.watch(config.appCssSrc, ['css', 'html']);
	gulp.watch(config.appJsSrc, ['scripts', 'html']);
	gulp.watch(config.appTemplatesHtml, ['scripts', 'html']);
	gulp.watch(config.appIndexHtml, ['html']);
});

// Set  default tasks
gulp.task('default', ['css', 'scripts', 'html'], function () {
});