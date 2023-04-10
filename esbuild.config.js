const { paths } = require('./build-tasks-config.js');
const isProd = process.env.NODE_ENV === 'production';
const isDemo = process.env.NODE_ENV === 'demo';
const outputDir = isProd ? paths.build.js : paths.public.js;

require('esbuild').build({
    entryPoints: {
      common: `./${paths.src.entryJs}/common.js`,
    },
    bundle: true,
    minify: isProd,
    watch: !isProd && !isDemo,
    outdir: `./${outputDir}`,
    target: 'es2019',
  }).catch(() => process.exit(1))
