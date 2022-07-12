const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');
const htmlmin = require('gulp-htmlmin');
const { paths } = require('../build-tasks-config.js');

const isProd = process.env.NODE_ENV === 'production';

const outputDir = isProd ? paths.build.base : paths.serve.base;
// const outputDir = paths.serve.base;

function buildHTML() {
    const stream = src(`${paths.src.html}/*.pug`)
        .pipe(pug({ pretty: true }))
        .pipe(dest(paths.serve.base));

    stream.pipe(htmlmin({
        continueOnParseError: true,
        collapseWhitespace: true
    }));

    stream.pipe(dest(outputDir));
    return stream;
}

if (isProd) {
    module.exports = buildHTML;
} else {
    buildHTML();
    module.exports = function() {
        watch(`${paths.src.html}/**/*.pug`, buildHTML);
    };
}
