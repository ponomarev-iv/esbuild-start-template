const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const mmq = require('gulp-merge-media-queries');
const sassGlob = require('gulp-sass-glob')
const { paths } = require('../build-tasks-config.js');

const isProd = process.env.NODE_ENV === 'production';
const isDemo = process.env.NODE_ENV === 'demo';
const outputDir = isProd ? paths.build.style : paths.public.style;
function buildStyles() {
  return src([`${paths.src.entryScss}/*.scss`, `${paths.src.components}/**/*.scss`])
    .pipe(sassGlob())
    .pipe(sass({
      includePaths: ['./node_modules']
    }).on('error', sass.logError))
    .pipe(mmq({
      log: !isProd
    }))
    .pipe(cssnano({
      zindex: false
    }))
    .pipe(dest(outputDir));
}

if (isProd || isDemo) {
    module.exports = buildStyles;
} else {
    buildStyles();

    module.exports = function() {
      watch(`${paths.src.root}/**/*.scss`, buildStyles);
    };
}

