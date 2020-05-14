const { NODE_ENV, BABEL_ENV } = process.env;
const modules = BABEL_ENV === 'cjs' || NODE_ENV === 'test' ? 'commonjs' : false;

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules,
        loose: true,
      },
    ],
    '@babel/preset-react',
  ],
};
