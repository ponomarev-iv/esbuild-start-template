const { paths } = require('./build-tasks-config.js');
const isProd = process.env.NODE_ENV === 'production';
const outputDir = isProd ? paths.build.js : paths.serve.js;

require('esbuild').build({
    entryPoints: {
      main: `./${paths.src.js}/index.js`
    },
    bundle: true,
    minify: isProd,
    watch: !isProd,
    outdir: `./${outputDir}`,
    target: 'es2019',
  }).catch(() => process.exit(1))
