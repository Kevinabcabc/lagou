const {
  src,
  dest,
  watch,
  parallel
} = require('gulp');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const minifyHTML = require('gulp-minify-html');
const webserver = require('gulp-webserver');
const mockDataMiddleware = require('./data/mockDataMiddleware');
const babel = require('gulp-babel');
const cssConfig = require('./build/css.config');
const jsConfig = require('./build/js.config');
const htmlConfig = require('./build/html.config');

const handleCss = (cb) => {
  Object.entries(cssConfig).forEach(([key, value]) => {
    src(value)
      .pipe(concat(`${key}.css`))
      .pipe(minifyCSS())
      .pipe(dest('./dist/css'));
  });
  cb();
}


const handleFont = () => {
  return src('./app/css/*.ttf')
    .pipe(dest('./dist/css'));
}

const handleJS = (cb) => {
  Object.entries(jsConfig).forEach(([key, value]) => {
    src(value)
      .pipe(concat(`${key}.js`))
      .pipe(babel())
      .pipe(uglify())
      .pipe(dest('./dist/js'));
  });
  cb();
}

const handleLibJS = () => {
  return src('./app/lib/**/*.js')
    .pipe(dest('./dist/lib'));
}

const handleHTML =()=>{  
  // console.log(htmlConfig);
  
  return src(htmlConfig)
  .pipe(minifyHTML())
  .pipe(dest('./dist/views'));
}

const watchTask = ()=>{
  return watch('./app/**/*', {ignoreInitial: false, delay: 500}, parallel(handleCss, handleLibJS, handleJS, handleFont, handleHTML));
};

const server = ()=>{
  return src('./')
  .pipe(webserver({
    livereload: true,
    directoryListing: true,
    middleware: mockDataMiddleware

  }))
};

// exports.default = watchTask;


if(process.env.NODE_ENV === 'production'){
  exports.default = parallel(handleCSS, handleLibJS, handleJS, handleFont, handleHTML);
}
else{
  exports.default = parallel(
    watchTask,
    server
  );
}
