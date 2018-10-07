var gulp = require('gulp'),
	uglify = require('gulp-uglifyes'),
	pug = require('gulp-pug'),
	imagemin = require('gulp-imagemin'),
	compass = require('gulp-compass'),
	prefix = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber'),
	webserver = require('gulp-webserver');
	minifycss = require('gulp-minify-css');

// Scripts Task
// Uglifies

gulp.task('scripts', function(){
	gulp.src('src/js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});

// Jade to Html

gulp.task('pug', function(){
	gulp.src('src/*.pug')
	.pipe(pug({
		pretty: false
	}))
	.pipe(gulp.dest('./build'));
});

// Styles Task
// Uglifies
// Sass to CSS

gulp.task('styles', function(){
	gulp.src('src/sass/**/*.sass')
		.pipe(plumber())
		.pipe(compass({
			css: './build/css',
			sass: './src/sass'
		}))
		.pipe(prefix({browsers: ['last 4 versions']}))
		.pipe(minifycss())
		.pipe(gulp.dest('./build/css/'));
});


// Images
// Compress
gulp.task('images', function(){
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./build/images'));
});

// Connect

gulp.task('webserver', function() {
    gulp.src('build')
    	.pipe(webserver({
    		livereload: true,
    		directoryListing: false,
    		open: true
    	}));
});

//Watch

gulp.task('watch', function(){

	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('src/*.pug', ['pug']);
	gulp.watch('src/sass/**/*.sass', ['styles']);
	gulp.watch('src/images', ['images']);
});

//Default
gulp.task('default', ['scripts', 'styles', 'pug', 'images', 'watch', 'webserver']);