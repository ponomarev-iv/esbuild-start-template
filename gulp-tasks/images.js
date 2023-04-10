const { src, dest, watch } = require('gulp');
const { paths } = require('../build-tasks-config.js');

const isProd = process.env.NODE_ENV === 'production';
const isDemo = process.env.NODE_ENV === 'demo';
const outputDir = isProd ? paths.build.img : paths.public.img;
function buildImages() {
    return src(`${paths.src.img}/**/*`)
        .pipe(dest(outputDir));
}

if (isProd || isDemo) {
    module.exports = buildImages;
} else {
    buildImages();

    module.exports = function() {
        watch(`${paths.src.img}/**/*`, buildImages);
    };
}
