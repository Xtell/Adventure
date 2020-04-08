let baseDir = "src"

const gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    csso            = require('gulp-csso'),
    postcss         = require('gulp-postcss'),
    autoprefixer    = require('autoprefixer'),
    imagemin        = require('gulp-imagemin'),
    webp            = require('imagemin-webp'),
    svgSprite       = require('gulp-svg-sprite'),
    uglify          = require('gulp-uglify-es').default,
    rename          = require('gulp-rename'),
    concat          = require('gulp-concat'),
    rigger          = require('gulp-rigger'),
    del             = require('del'),
    debug           = require('gulp-debug'),
    extReplace      = require('gulp-ext-replace'),
    browserSync     = require('browser-sync').create();

const paths = {
    styles: {
        src: baseDir + '/scss/main.scss',
        libs: baseDir + '/libs/css/*',
        dest: "build/css/"
    },
    scripts: {
        src: baseDir + '/js/main.js',
        dest: 'build/js/'
    },
    images: {
        src: baseDir + '/images/*',
        dest: 'build/images/'
    },
    html: {
        src: baseDir + '/*.html',
        dest: 'build/'
    },
    fonts: {
        src: baseDir + '/fonts/*.{woff2,woff}',
        dist: 'build/fonts/'
    }
    
}

gulp.task('serve', function(done) {
    browserSync.init({
        server: "build",
        nofity: false
    });
});

gulp.task('styles', function () {
    return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(csso())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src(paths.scripts.src)
    .pipe(rigger())
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
});
gulp.task('imageOptimize', function() {
    return gulp.src(paths.images.src)
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 95, progressive: true}),
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.svgo()
    ]))
    .pipe(gulp.dest(paths.images.dest))
});
gulp.task('makeWebp', function() {
    return gulp.src(paths.images.src +'.*{jpg,png}')
    .pipe(imagemin([
        webp({quality: 95})
    ]))
    .pipe(extReplace('.webp'))
    .pipe(gulp.dest(paths.images.dest));
});

gulp.task('images', gulp.series('imageOptimize', 'makeWebp'));

gulp.task('html', function () {
    return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
});
gulp.task('watch', function(){
    gulp.watch(baseDir + '/scss/**/*', gulp.series('styles'));
    gulp.watch(baseDir + '/js/**/*', gulp.series('scripts'));
    gulp.watch(baseDir + '/*.html', gulp.series('html'));
});
gulp.task('cleanBuild', function(){
    return del("build/");
});
gulp.task('copy', function() {
    return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dist))
});
gulp.task('build', gulp.series('cleanBuild', 'copy', 'images', 'styles', 'scripts', 'html'));
gulp.task('default', gulp.series('build', gulp.parallel('serve', 'watch')));
