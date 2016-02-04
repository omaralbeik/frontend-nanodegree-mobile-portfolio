const gulp = require('gulp');
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;

const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const minifyCSS = require("gulp-minify-css");
const replace = require("gulp-html-replace");
const sourcemap = require("gulp-sourcemaps");

const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

gulp.task('content', function() {
	gulp.src('./src/*.html')
		.pipe(gulp.dest('./dist/'))
		.pipe(reload({stream: true}))
});

gulp.task('scripts', function() {
	gulp.src('./src/js/*.js')
		.pipe(sourcemap.init())
			.pipe(uglify())
			.pipe(concat('app.js'))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('./dist/js'))
		.pipe(reload({stream: true}))
});

gulp.task('styles', function() {
	gulp.src('src/css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dist/css'))
		.pipe(reload({stream: true}))
});

gulp.task('images', () => {
	return gulp.src('src/img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: './dist/'
		}
	});
	gulp.watch('./src/index.html', ['content']);
	gulp.watch('./src/js/*.js', ['scripts']);
	gulp.watch('./src/css/*.css', ['styles']);
	gulp.watch('.src/img/*', ['images']);
});

gulp.task('default', ['content', 'scripts', 'styles', 'images', 'serve']);