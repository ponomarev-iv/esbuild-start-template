const browserSync = require('browser-sync').create();
const { paths } = require('../build-tasks-config.js');


function initBrowserSync() {
    browserSync.init({
        server: {
            baseDir: `${paths.public.base}/`
        },
        port: 9000,
        watch: true,
        // open: false,
        // open: 'tunnel',
        // tunnel: 'pepd',
        // socket: {
        //     domain: 'localhost:9000'
        // }
    });
}

module.exports = initBrowserSync;
