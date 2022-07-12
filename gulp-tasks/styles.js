const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const mmq = require('gulp-merge-media-queries');
const { paths } = require('../build-tasks-config.js');

const isProd = process.env.NODE_ENV === 'production';
const isDemo = process.env.NODE_ENV === 'demo';
const outputDir = isProd ? paths.build.style : paths.serve.style;
function buildStyles() {
    return src(`${paths.src.style}/**/*.scss`)
        .pipe(sass({
          includePaths: ['./node_modules']
        }))
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
        watch(`${paths.src.style}/**/*.scss`, buildStyles);
    };
}

