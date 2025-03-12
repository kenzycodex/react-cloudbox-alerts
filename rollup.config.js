const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
const url = require('@rollup/plugin-url');
const pkg = require('./package.json');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      modules: true,
      minimize: true,
      extract: false,
      // Generate a CSS file per JS file (that contains CSS)
      autoModules: true,
      namedExports: true,
      // Only write out CSS for the entry file
      inject: false,
    }),
    url({
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif'],
      limit: 8192, // inline files < 8k
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    terser(),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
