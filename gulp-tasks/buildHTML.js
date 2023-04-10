const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');
const { paths } = require('../build-tasks-config.js');

const isProd = process.env.NODE_ENV === 'production';
const isDemo = process.env.NODE_ENV === 'demo';

// const outputDir = isProd ? paths.build.base : paths.public.base;
const outputDir = paths.public.base;

function buildHTML() {
    const stream = src(`${paths.src.html}/*.pug`)
        .pipe(pug({ pretty: true }))
        .pipe(dest(paths.public.base));

    stream.pipe(dest(outputDir));
    return stream;
}

if (isProd || isDemo) {
    module.exports = buildHTML;
} else {
    buildHTML();
    module.exports = function() {
      watch(`${paths.src.root}/**/*.pug`, buildHTML);
    };
}
