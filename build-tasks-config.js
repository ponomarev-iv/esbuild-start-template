const paths = {
    src: {
        style: 'src/scss',
        html: 'src/pug',
        js: 'src/js',
        img: 'src/img',
        fonts: 'src/fonts',
        video: 'src/video'
    },
    build: {
        base: 'public',
        style: 'public/css',
        js: 'public/js',
        img: 'public/img',
        fonts: 'public/fonts'
    },
    serve: {
        base: 'serve',
        style: 'serve/css',
        js: 'serve/js',
        img: 'serve/img',
        fonts: 'serve/fonts',
        video: 'serve/video'
    }
};

exports.paths = paths;
