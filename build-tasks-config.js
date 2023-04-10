const paths = {
  src: {
    root: 'src',
    style: 'src/scss',
    html: 'src/pug',
    js: 'src/js',
    img: 'src/assets/img',
    fonts: 'src/assets/fonts',
    components: 'src/components',
    entryJs: 'src/entry-points/js',
    entryScss: 'src/entry-points/scss',
  },
  build: {
    base: 'build',
    style: 'build/css',
    js: 'build/js',
    img: 'build/img',
    fonts: 'build/fonts'
  },
  public: {
    base: 'public',
    style: 'public/css',
    js: 'public/js',
    img: 'public/img',
    fonts: 'public/fonts'
  }
};

exports.paths = paths;
