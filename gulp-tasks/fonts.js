const { src, dest, watch } = require('gulp');
const { paths } = require('../build-tasks-config.js');

const isProd = process.env.NODE_ENV === 'production';
const isDemo = process.env.NODE_ENV === 'demo';
const outputDir = isProd ? paths.build.fonts : paths.public.fonts;
function buildFonts() {
    return src(`${paths.src.fonts}/**/*`)
        .pipe(dest(outputDir));
}

if (isProd || isDemo) {
    module.exports = buildFonts;
} else {
    buildFonts();

    module.exports = function() {
        watch(`${paths.src.fonts}/**/*`, buildFonts);
    };
}
