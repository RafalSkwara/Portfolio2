var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	jade = require('gulp-jade'),
	imagemin = require('gulp-imagemin'),
	compass = require('gulp-compass'),
	prefix = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber'),
	webserver = require('gulp-webserver');

// Scripts Task
// Uglifies

gulp.task('scripts', function(){
	gulp.src('src/js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});

// Jade to Html

gulp.task('jade', function(){
	gulp.src('src/*.jade')
	.pipe(jade({
		pretty: true
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
	gulp.watch('src/*.jade', ['jade']);
	gulp.watch('src/sass/**/*.sass', ['styles']);
	gulp.watch('src/images', ['images']);
});

//Default
gulp.task('default', ['scripts', 'styles', 'jade', 'images', 'watch', 'webserver']);