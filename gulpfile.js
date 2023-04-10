const fs = require('fs');
const { paths } = require('./build-tasks-config.js');
const { parallel, series, task } = require('gulp');
const initBrowserSync = require('./gulp-tasks/browsersync.js');
const buildStyles = require('./gulp-tasks/styles.js');
const buildHTML = require('./gulp-tasks/buildHTML.js');
const buildImages = require('./gulp-tasks/images.js');
const buildFonts = require('./gulp-tasks/fonts.js');

const isProd = process.env.NODE_ENV === 'production';
const isDemo = process.env.NODE_ENV === 'demo';

function clearDir(dir) {
    try {
        fs.rmdirSync(`./${dir}`, { recursive: true });
        console.info(`Clear ${dir}`);
    } catch (err) {
        console.error(`Error while deleting ${dir}.`);
    }
}

task('buildStyles', buildStyles);
task('buildHTML', buildHTML);
task('buildImages', buildImages);
task('buildFonts', buildFonts);
task('clear', function () {
    clearDir(paths.build.base)
    clearDir(paths.public.base);
})

if (!isProd && !isDemo) {
    initBrowserSync();
}

const tasks = [parallel(['buildStyles', 'buildHTML', 'buildImages', 'buildFonts'])];

let build = series(...tasks);

if (isProd) {
  build = series('clear', ...tasks);
}

exports.default = build;
