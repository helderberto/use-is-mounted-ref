import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

const mergeAll = (objs) => Object.assign({}, ...objs);

const cjs = {
  exports: 'named',
  format: 'cjs',
  sourcemap: true,
};

const esm = {
  format: 'es',
  sourcemap: true,
};

const globals = { react: 'React' };

const commonPlugins = [
  typescript({
    sourceMap: true,
  }),
];

const configBase = {
  output: {
    exports: 'named',
  },
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: commonPlugins,
};

const umdConfig = mergeAll([
  configBase,
  {
    input: 'src/index.ts',
    output: mergeAll([
      configBase.output,
      {
        file: `dist/${pkg.name}.js`,
        format: 'umd',
        name: 'useIsMountedRef',
        globals,
        sourcemap: true,
      },
    ]),
    external: Object.keys(pkg.peerDependencies || {}),
  },
]);

const devUmdConfig = mergeAll([
  umdConfig,
  {
    input: 'src/index.ts',
    plugins: umdConfig.plugins.concat(
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        preventAssignment: true,
      }),
    ),
  },
]);

const prodUmdConfig = mergeAll([
  umdConfig,
  {
    input: 'src/index.ts',
    output: mergeAll([
      umdConfig.output,
      {
        file: umdConfig.output.file.replace(/\.js$/, '.min.js'),
      },
    ]),
  },
  {
    plugins: umdConfig.plugins.concat(
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true,
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
        },
      }),
    ),
  },
]);

const defaultConfig = mergeAll([
  configBase,
  {
    input: 'src/index.ts',
    output: [
      mergeAll([configBase.output, { ...esm, file: pkg.module }]),
      mergeAll([configBase.output, { ...cjs, file: pkg.main }]),
    ],
    plugins: configBase.plugins.concat(),
  },
]);

export default [devUmdConfig, prodUmdConfig, defaultConfig];
