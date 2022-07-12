const { src, dest } = require('gulp');
const { paths } = require('../build-tasks-config.js');

const outputDir = paths.serve.video;
function copyVideo() {
    return src(`${paths.src.video}/**/*`)
        .pipe(dest(outputDir));
}

module.exports = copyVideo;
