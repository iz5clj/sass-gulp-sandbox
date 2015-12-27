var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');//.create();
var concat       = require('gulp-concat');
var debug        = require('gulp-debug');
var notify       = require('gulp-notify');
var size         = require('gulp-size');

var config = {
  //sassPath: './resources/assets/sass',
  bowerDir: './bower_components' 
}

var jsFiles = [
  config.bowerDir + '/jquery/dist/jquery.js',
  //config.bowerDir + '/motion-ui/dist/motion-ui.js',
  'resources/js/main.js'
]

// Process sass files from resources/sass/styles.scss
// Autoprefix
gulp.task('sass', function () {

  return gulp.src('resources/sass/styles.scss')
    //.pipe(plumber())
    //.pipe($.sourcemaps.init())
    //.pipe(debug({title: 'sass files:'}))
    .pipe(sass({ 
      outputStyle: 'expanded', 
      precision: 10, 
      includePaths: [
        config.bowerDir + '/foundation-sites/scss',
        config.bowerDir + '/motion-ui/src',
        config.bowerDir + '/font-awesome/scss'
      ]
    }).on('error', notify.onError(function(error){
      return 'Sass error: ' + error.message;
    })))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    //.pipe(minifycss)
    //.pipe($.sourcemaps.write())
    .pipe(gulp.dest('css/'))
    //.pipe(debug({title: 'css files:'}))
    .pipe(size({showFiles: true}))
    .pipe(browserSync.stream());

    //console.log(stream);
});

// Combine all javascript files into one file: js/main.js
gulp.task('javascript', function() {

  return gulp.src(jsFiles)
    //.pipe($.sourcemaps.init())
    .pipe(concat('main.js'))
    //.pipe(uglify)
    .pipe(size({showFiles: true}))
    //.pipe($.if(!isProduction, $.sourcemaps.write()))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.stream());
});

// Static Server + watching scss, html and javascript files
gulp.task('serve', ['sass', 'javascript'], function() {

    browserSync.init({
        server: '.'
    });

    gulp.watch("resources/sass/**/*.scss", ['sass']);
    gulp.watch("resources/js/*.js", ['javascript']);
    gulp.watch("index.html").on('change', browserSync.reload);
});